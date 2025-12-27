import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Languages, Copy, Check } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type CmsPost = {
  id: number;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  en: { title: string; excerpt: string; content: string };
  fa: { title: string; excerpt: string; content: string };
};

type PostIndexItem = { id: number; slug: string };
type PostsIndex = { posts: PostIndexItem[] };

function withBase(path: string) {
  const base = import.meta.env.BASE_URL ?? '/';
  const b = String(base).replace(/\/$/, '');
  const p = path.replace(/^\//, '');
  return `${b}/${p}`;
}

function splitWithCode(content: string, startMarker: string, endMarker: string) {
  const start = content.indexOf(startMarker);
  if (start === -1) return { before: content, code: '', after: '' };

  const codeStart = start + startMarker.length;
  const end = content.indexOf(endMarker, codeStart);
  if (end === -1) return { before: content, code: '', after: '' };

  return {
    before: content.slice(0, codeStart).trimEnd(),
    code: content.slice(codeStart, end).trim(),
    after: content.slice(end).trimStart(),
  };
}

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s)]+)(?=\s|$)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) => {
    const isUrl = /^https?:\/\/[^\s)]+$/.test(part);
    if (!isUrl) return <span key={i}>{part}</span>;

    return (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noreferrer"
        className="text-accent underline underline-offset-4 hover:opacity-90"
      >
        {part}
      </a>
    );
  });
}

type PyTokenType = 'plain' | 'keyword' | 'builtin' | 'number' | 'string' | 'comment';

const PY_KEYWORDS = new Set([
  'from',
  'import',
  'as',
  'return',
  'for',
  'in',
  'if',
  'elif',
  'else',
  'try',
  'except',
  'with',
  'class',
  'def',
  'lambda',
  'yield',
  'await',
  'async',
  'True',
  'False',
  'None',
]);

const PY_BUILTINS = new Set([
  'list',
  'dict',
  'set',
  'tuple',
  'str',
  'int',
  'float',
  'bool',
  'print',
  'len',
  'range',
]);

function isIdentStart(ch: string) {
  return /[A-Za-z_]/.test(ch);
}

function isIdentPart(ch: string) {
  return /[A-Za-z0-9_]/.test(ch);
}

function isDigit(ch: string) {
  return /[0-9]/.test(ch);
}

function tokenizePython(code: string): Array<{ type: PyTokenType; text: string }> {
  const tokens: Array<{ type: PyTokenType; text: string }> = [];
  const n = code.length;
  let i = 0;

  const push = (type: PyTokenType, text: string) => {
    if (text) tokens.push({ type, text });
  };

  while (i < n) {
    const ch = code[i];

    // Whitespace
    if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') {
      let j = i + 1;
      while (
        j < n &&
        (code[j] === ' ' || code[j] === '\t' || code[j] === '\n' || code[j] === '\r')
      ) {
        j++;
      }
      push('plain', code.slice(i, j));
      i = j;
      continue;
    }

    // Comment
    if (ch === '#') {
      let j = i + 1;
      while (j < n && code[j] !== '\n') j++;
      push('comment', code.slice(i, j));
      i = j;
      continue;
    }

    // Strings (triple / single / double)
    if (ch === '"' || ch === "'") {
      const quote = ch;
      const isTriple = code[i + 1] === quote && code[i + 2] === quote;

      if (isTriple) {
        let j = i + 3;
        while (
          j < n &&
          !(code[j] === quote && code[j + 1] === quote && code[j + 2] === quote)
        ) {
          j++;
        }
        j = Math.min(n, j + 3);
        push('string', code.slice(i, j));
        i = j;
        continue;
      }

      let j = i + 1;
      while (j < n) {
        if (code[j] === '\\') {
          j += 2;
          continue;
        }
        if (code[j] === quote) {
          j++;
          break;
        }
        j++;
      }
      push('string', code.slice(i, j));
      i = j;
      continue;
    }

    // Numbers
    if (isDigit(ch)) {
      let j = i + 1;
      while (j < n && (isDigit(code[j]) || code[j] === '_')) j++;

      if (code[j] === '.' && isDigit(code[j + 1] ?? '')) {
        j++;
        while (j < n && (isDigit(code[j]) || code[j] === '_')) j++;
      }

      push('number', code.slice(i, j));
      i = j;
      continue;
    }

    // Identifiers
    if (isIdentStart(ch)) {
      let j = i + 1;
      while (j < n && isIdentPart(code[j])) j++;
      const word = code.slice(i, j);

      if (PY_KEYWORDS.has(word)) push('keyword', word);
      else if (PY_BUILTINS.has(word)) push('builtin', word);
      else push('plain', word);

      i = j;
      continue;
    }

    // Operators / punctuation
    push('plain', ch);
    i++;
  }

  return tokens;
}

function tokenClass(t: PyTokenType) {
  switch (t) {
    case 'keyword':
      return 'text-violet-300 font-medium';
    case 'builtin':
      return 'text-sky-300';
    case 'number':
      return 'text-amber-300';
    case 'string':
      return 'text-emerald-300';
    case 'comment':
      return 'text-slate-400';
    default:
      return 'text-slate-100';
  }
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.split('\n'), [code]);
  const tokens = useMemo(() => tokenizePython(code), [code]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // Clipboard might not be available in some environments; fail silently.
    }
  };

  return (
    <div className="my-8" dir="ltr">
      <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400/90" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-300/90" />
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span className="ml-3 text-xs font-medium text-slate-200">Python</span>
          </div>

          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-2 text-xs text-slate-200/90 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="overflow-x-auto">
            <div className="grid" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <div className="select-none px-4 py-4 text-right text-xs text-slate-500 border-r border-white/5">
                {lines.map((_, i) => (
                  <div key={i} className="leading-6">
                    {i + 1}
                  </div>
                ))}
              </div>

              <pre className="m-0 px-4 py-4 overflow-visible">
                <code className="block font-mono text-[13px] leading-6 whitespace-pre">
                  {tokens.map((t, idx) => (
                    <span key={idx} className={tokenClass(t.type)}>
                      {t.text}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-xs text-muted-foreground">Tip: Click “Copy” to copy the snippet.</div>
    </div>
  );
}

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();

  const [language, setLanguage] = useState<'en' | 'fa'>('fa');
  const [post, setPost] = useState<CmsPost | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setError('');
        setPost(null);

        const indexRes = await fetch(withBase('/content/posts-index.json'), { cache: 'no-store' });
        if (!indexRes.ok) throw new Error('Failed to load posts index');
        const indexJson = (await indexRes.json()) as PostsIndex;

        const postId = Number(id);
        const item = indexJson.posts.find((p) => p.id === postId);
        if (!item) throw new Error('Post not found');

        const postRes = await fetch(withBase(`/content/posts/${item.slug}.json`), { cache: 'no-store' });
        if (!postRes.ok) throw new Error('Post not found');
        const postJson = (await postRes.json()) as CmsPost;

        if (!alive) return;
        setPost(postJson);
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message ?? 'Failed to load post');
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  const isRtl = language === 'fa';

  const parts = useMemo(() => {
    if (!post) return { before: '', code: '', after: '' };

    const content = language === 'en' ? post.en.content : post.fa.content;

    if (language === 'en') {
      return splitWithCode(content, '## Short code example (RAG-friendly)\n\n', 'In this pattern,');
    }
    return splitWithCode(content, 'نمونه کد کوتاه (مناسب RAG)\n', 'در این الگو،');
  }, [language, post]);

  if (error) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
          {error}
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <div className="text-muted-foreground">Loading…</div>
      </main>
    );
  }

  const title = language === 'en' ? post.en.title : post.fa.title;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog</span>
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {post.category}
            </span>

            <button
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors px-4 py-2 border border-border rounded-lg"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span>English / فارسی</span>
            </button>
          </div>

          <h1
            className="text-4xl mb-4"
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{ textAlign: isRtl ? 'right' : 'left' }}
          >
            {title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {post.imageUrl && (
          <div className="mb-10">
            <img
              src={post.imageUrl}
              alt="Post cover"
              className="w-full rounded-2xl border border-border"
              loading="lazy"
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          <div
            className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{ textAlign: isRtl ? 'justify' : 'left' }}
          >
            {renderTextWithLinks(parts.before)}
          </div>

          {parts.code && <CodeBlock code={parts.code} />}

          {parts.after && (
            <div
              className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
              dir={isRtl ? 'rtl' : 'ltr'}
              style={{ textAlign: isRtl ? 'justify' : 'left' }}
            >
              {renderTextWithLinks(parts.after)}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
