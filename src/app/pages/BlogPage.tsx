import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

type PostIndexItem = {
  id: number;
  slug: string;
  titleEn: string;
  titleFa: string;
  excerptEn: string;
  excerptFa: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
};

type PostsIndex = { posts: PostIndexItem[] };

function withBase(path: string) {
  const base = import.meta.env.BASE_URL ?? '/';
  const b = String(base).replace(/\/$/, '');
  const p = path.replace(/^\//, '');
  return `${b}/${p}`;
}

export default function BlogPage() {
  const [data, setData] = useState<PostsIndex | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const res = await fetch(withBase('/content/posts-index.json'), { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load posts index');
        const json = (await res.json()) as PostsIndex;

        if (!alive) return;
        setData(json);
      } catch (e: any) {
        if (!alive) return;
        setError(e?.message ?? 'Failed to load posts');
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const posts = useMemo(() => data?.posts ?? [], [data]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl">
          Articles and notes about AI, machine learning, and data science.
          I share my experiences, learnings, and insights here.
        </p>
      </div>

      {error && (
        <div className="mb-8 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <article className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.titleEn}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerptEn}
                </p>

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
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
