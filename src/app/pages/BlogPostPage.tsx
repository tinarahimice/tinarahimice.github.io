import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Languages, Copy, Check } from 'lucide-react';
import { useMemo, useState } from 'react';

interface BlogPost {
  id: number;
  titleEn: string;
  titleFa: string;
  excerptEn: string;
  excerptFa: string;
  contentEn: string;
  contentFa: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
}

const IMAGE_URL =
  'https://github.com/docling-project/docling/raw/main/docs/assets/docling_processing.png';

const doclingPost: BlogPost = {
  id: 2,
  titleEn: 'Docling',
  titleFa: 'داکلینگ',
  excerptEn:
    'Docling is an open-source library for preparing and processing documents and producing a standardized representation for downstream GenAI workflows such as RAG.',
  excerptFa:
    'Docling یک کتابخانه متن‌باز برای آماده‌سازی و پردازش اسناد مختلف است که خروجی استاندارد قابل استفاده برای فرایندهای GenAI مانند RAG تولید می‌کند.',
  date: 'Dec 27, 2025',
  readTime: '10 min',
  category: 'Tools',
  imageUrl: IMAGE_URL,

  contentEn: `Docling is an open-source library for preparing and processing different kinds of documents (PDF, Word, HTML, etc.). It can turn their structure, text, and metadata into a standardized and usable representation. This standard representation is known as **DoclingDocument**, and it becomes the foundation for many downstream tasks such as semantic search, AI-assisted question answering, and more.

## Chunking in Docling
Docling stands out as a superior choice for the chunking component in RAG architectures because it operates on a deep understanding of a document's actual structure rather than simply slicing text into arbitrary, fixed-length segments. This distinction is vital for the overall quality of retrieval and the final response, as traditional chunking often breaks semantic boundaries—splitting a sentence in the middle of a heading or a crucial explanation—which leads to ambiguous embeddings and poor retrieval performance. By recognizing sections, headings, captions, and table contexts, Docling ensures that each chunk remains a complete "conceptual unit." This structural awareness results in far more accurate embeddings, allows similarity searches to return truly relevant results, and provides the language model with a clean, coherent context to answer from.

Beyond just dividing text, Docling’s real strength lies in how it preserves context through rich metadata. Each chunk isn't just a raw string of text; it carries its own "identity," including its heading path and its specific position within the document hierarchy. This is a game-changer for RAG pipelines because it allows the system to feed the chunk to the model along with its parent headers, helping the AI understand the exact context in which the information was written. By grounding the text in its original structural environment, Docling significantly reduces the risk of hallucinations and ensures the model’s answers are contextually sound. Furthermore, the HybridChunker feature elegantly balances the need for semantic integrity with the technical constraints of embedding models. It respects document boundaries while simultaneously monitoring token limits, ensuring chunks are neither too massive to process nor so fragmented that they lose their essential meaning.

Ultimately, Docling is far more than a simple parsing tool; it was engineered from the ground up with Generative AI pipelines in mind. Through its standardized DoclingDocument output and intuitive APIs for chunking and contextualization, it seamlessly integrates into the workflow from raw document to vector database. By producing text that is inherently ready for embedding and minimizing the "noise" typically found in automated document extraction, Docling acts as a sophisticated data-preparation layer. This focus on structural integrity and meaningful segmentation transforms the RAG process, leading to higher retrieval precision and much more reliable AI-generated answers.

Docling fits easily into RAG pipelines:
Document → DoclingDocument → Chunking → Embedding → Vector DB → Retrieval → LLM

## Short code example (RAG-friendly)

from docling.document_converter import DocumentConverter
from docling.chunking import HybridChunker

source = "document.pdf"

converter = DocumentConverter()
doc = converter.convert(source).document

chunker = HybridChunker()
chunks = list(chunker.chunk(doc))

texts_for_embedding = [
    chunker.contextualize(chunk)
    for chunk in chunks
]

In this pattern, the contextualize method plays a pivotal role by generating chunked text that is inherently enriched with its original structural context. This ensures that the output is perfectly tailored for embedding processes and immediate storage within vector databases, providing a seamless transition from raw data to searchable knowledge.
The primary advantage of using Docling in a RAG architecture lies in its ability to produce meaningful segments rather than arbitrary, "blind" cuts. By maintaining the inherent structure of the document and respecting the token limits of modern language models, it effectively minimizes noise during the retrieval phase and significantly boosts the accuracy of the final generated answers. Ultimately, Docling proves to be much more than a standard chunking utility; it functions as a comprehensive data-preparation layer for RAG, bridging the gap between complex raw documents and high-performance AI systems.

Reference:
https://github.com/docling-project/docling`,

  contentFa: `کتابخانه Docling یک ابزار متن‌باز برای آماده‌سازی و پردازش اسناد مختلف (PDF، Word، HTML و غیره) است که می‌تواند ساختار، متن و متادیتای آن‌ها را به صورت نمایش استاندارد و قابل‌استفاده تبدیل کند. این نمایش استاندارد به نام DoclingDocument شناخته می‌شود و پایه‌ی بسیاری از پردازش‌های بعدی مثل جستجوی معنایی، پاسخ‌گویی با هوش مصنوعی و… است.
کتابخانه Docling را می‌توان یکی از بهترین انتخاب‌ها برای مرحله چانکینگ در معماری RAG دانست، چرا که این ابزار به جای بریدن کورکورانه متن در طول‌های ثابت، فرآیند تکه‌تکه کردن را بر اساس فهم عمیق از ساختار واقعی سند انجام می‌دهد. این رویکرد هوشمندانه مستقیماً روی کیفیت بازیابی اطلاعات و دقت پاسخ نهایی اثر می‌گذارد، زیرا در سیستم‌های RAG اگر مرزهای معنایی رعایت نشود و متن مثلاً در وسط یک تیتر یا توضیح حساس شکسته شود، بردارهای معنایی (Embedding) مبهم شده و دقت جستجو به شدت افت می‌کند. Docling با تکیه بر ساختار سند مثل بخش‌بندی‌ها، تیترها و حتی کانتکست جداول، هر چانک را به یک واحد مفهومی کامل تبدیل می‌کند که نتیجه آن تولید Embeddingهای دقیق‌تر، نتایج جستجوی مرتبط‌تر و در نهایت ارائه یک محتوای تمیز و منسجم به مدل زبانی است.

فراتر از بحث جداسازی متن، هوشمندی Docling در حفظ کانتکست از طریق متادیتا نهفته است؛ به این معنا که هر تکه متن تولید شده، شناسنامه‌ای همراه خود دارد که مسیر تیترهای بالادستی و موقعیت دقیقش در سند را مشخص می‌کند. این موضوع در پروژه‌های هوش مصنوعی حیاتی است، چون می‌توان متن را همراه با سلسله‌مراتب موضوعی‌اش به مدل ارائه داد تا مدل دقیقاً بفهمد این اطلاعات در چه زمینه‌ای نوشته شده است. این رویکرد نه تنها درک مدل را بالا می‌برد، بلکه به شکل چشم‌گیری پدیده توهم یا Hallucination را کاهش می‌دهد. در کنار این‌ها، قابلیت HybridChunker در این کتابخانه توازن ظریفی میان دنیای معنا و محدودیت‌های فنی ایجاد می‌کند؛ یعنی در عین حال که به مرزهای ساختاری سند وفادار می‌ماند، مراقب است که طول هر چانک با محدودیت توکن مدل‌های Embedding یا LLM کاملاً هماهنگ باشد تا اطلاعات نه آن‌قدر حجیم شوند که پردازششان مختل شود و نه آن‌قدر کوچک که معنای خود را از دست بدهند.

در نهایت، چیزی که Docling را از یک ابزار پارس کردن ساده متمایز می‌کند، طراحی اختصاصی آن برای خط لوله‌های GenAI از همان ابتدای کار است. این کتابخانه با ارائه خروجی استاندارد DoclingDocument و در اختیار گذاشتن APIهای مشخص برای چانکینگ و غنی‌سازی متن، فرآیند آماده‌سازی داده‌ها را بسیار ساده کرده است. در واقع Docling می‌تواند به راحتی در مسیر تبدیل یک سند خام به بردارهای آماده ذخیره‌سازی در دیتابیس‌های گراف یا وکتور قرار بگیرد و با تولید متن‌های آماده برای Embedding، نویزهای معمول در بازیابی اطلاعات را حذف کرده و دقت پاسخ‌گویی سیستم را به سطح جدیدی برساند.

Docling خیلی راحت داخل pipelineهای RAG جا می‌گیرد:
Document → DoclingDocument → Chunking → Embedding → Vector DB → Retrieval → LLM

نمونه کد کوتاه (مناسب RAG)
from docling.document_converter import DocumentConverter
from docling.chunking import HybridChunker

source = "document.pdf"

converter = DocumentConverter()
doc = converter.convert(source).document

chunker = HybridChunker()
chunks = list(chunker.chunk(doc))

texts_for_embedding = [
    chunker.contextualize(chunk)
    for chunk in chunks
]

در این الگو، استفاده از قابلیت contextualize نقشی کلیدی ایفا می‌کند؛ این متد متن هر چانک را با بافت و ساختار اصلی سند پیوند می‌دهد تا خروجی نهایی به شکلی کاملاً بهینه و آماده برای فرآیند Embedding و ذخیره‌سازی در پایگاه‌داده‌های برداری (Vector Database) درآید. آنچه Docling را در دنیای RAG متمایز می‌کند، توانایی آن در ایجاد چانک‌های معنادار به جای برش‌های تصادفی و کورکورانه است. این ابزار با حفظ دقیق ساختار سند و رعایت هوشمندانه محدودیت‌های توکن در مدل‌های زبانی، نویز موجود در مرحله بازیابی (Retrieval) را به شدت کاهش داده و دقت پاسخ‌های نهایی را بالا می‌برد. به همین دلیل، Docling فراتر از یک ابزار چانکینگ ساده، در واقع به عنوان یک لایه استراتژیک برای آماده‌سازی داده‌ها عمل می‌کند که کیفیت و هوشمندی کل زنجیره RAG را تضمین می‌نماید.
رفرنس
https://github.com/docling-project/docling`,
};

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

function escapeHtml(s: string) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

/**
 * Robust lightweight highlighting using placeholders so no regex ever touches injected HTML.
 */
function highlightPython(code: string) {
  let text = escapeHtml(code);

  const stashed: Array<{ key: string; html: string }> = [];
  let stashId = 0;

  // Use control chars in keys to avoid word-boundary regex matches.
  const makeKey = () => `\u0001HL${stashId++}\u0002`;

  const stashSimple = (regex: RegExp, wrap: (match: string) => string) => {
    text = text.replace(regex, (match) => {
      const key = makeKey();
      stashed.push({ key, html: wrap(match) });
      return key;
    });
  };

  // 1) Stash strings first (triple quotes then single/double)
  stashSimple(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, (m) => `<span class="text-emerald-300">${m}</span>`);
  stashSimple(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, (m) => `<span class="text-emerald-300">${m}</span>`);

  // 2) Stash comments (after strings)
  stashSimple(/(#.*)$/gm, (m) => `<span class="text-slate-400">${m}</span>`);

  // 3) Stash keywords
  stashSimple(
    /\b(from|import|as|return|for|in|if|elif|else|try|except|with|class|def|lambda|yield|await|async|True|False|None)\b/g,
    (m) => `<span class="text-violet-300 font-medium">${m}</span>`
  );

  // 4) Stash some builtins (light touch)
  stashSimple(
    /\b(list|dict|set|tuple|str|int|float|bool|print|len|range)\b/g,
    (m) => `<span class="text-sky-300">${m}</span>`
  );

  // 5) Stash numbers (preserve the left separator)
  text = text.replace(/(^|[^\w])(\d+)(?=[^\w]|$)/g, (match, p1: string, p2: string) => {
    const key = makeKey();
    stashed.push({ key, html: `<span class="text-amber-300">${p2}</span>` });
    return `${p1}${key}`;
  });

  // Restore all stashed HTML
  for (const item of stashed) {
    text = text.replaceAll(item.key, item.html);
  }

  return text;
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

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.split('\n'), [code]);

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
                <code
                  className="block font-mono text-[13px] leading-6 text-slate-100 whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlightPython(code) }}
                />
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
  const [language, setLanguage] = useState<'en' | 'fa'>('fa');
  const post = doclingPost;

  // Only title + body alignment/direction changes. Other UI remains fixed.
  const isRtl = language === 'fa';

  const parts = useMemo(() => {
    if (language === 'en') {
      return splitWithCode(post.contentEn, '## Short code example (RAG-friendly)\n\n', 'In this pattern,');
    }
    return splitWithCode(post.contentFa, 'نمونه کد کوتاه (مناسب RAG)\n', 'در این الگو،');
  }, [language, post.contentEn, post.contentFa]);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back button (fixed) */}
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

            {/* Toggle label stays fixed (no translation needed) */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors px-4 py-2 border border-border rounded-lg"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4" />
              <span>English / فارسی</span>
            </button>
          </div>

          {/* Only title changes direction/alignment */}
          <h1
            className="text-4xl mb-4"
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{ textAlign: isRtl ? 'right' : 'left' }}
          >
            {language === 'en' ? post.titleEn : post.titleFa}
          </h1>

          {/* Meta row stays fixed */}
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
              alt="Docling processing"
              className="w-full rounded-2xl border border-border"
              loading="lazy"
            />
          </div>
        )}

        <div className="prose prose-slate max-w-none">
          {/* Only post body changes direction/alignment */}
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
