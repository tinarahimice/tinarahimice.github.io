import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  titleEn: string;
  titleFa: string;
  excerptEn: string;
  excerptFa: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    titleEn: 'Phoenix',
    titleFa: 'Phoenix',
    excerptEn: 'A comprehensive guide to understanding and working with Phoenix framework. Learn about real-time features, channels, and practical applications.',
    excerptFa: 'راهنمای جامع برای درک و کار با فریمورک Phoenix. در مورد ویژگی‌های بلادرنگ، کانال‌ها و کاربردهای عملی بیاموزید.',
    date: 'Dec 15, 2024',
    readTime: '8 min',
    category: 'Web Development',
  },
  {
    id: 2,
    titleEn: 'Docling',
    titleFa: 'Docling',
    excerptEn: 'Exploring document processing and management with Docling. Practical solutions for text extraction, parsing, and analysis.',
    excerptFa: 'بررسی پردازش و مدیریت اسناد با Docling. راه‌حل‌های عملی برای استخراج متن، تجزیه و تحلیل.',
    date: 'Nov 28, 2024',
    readTime: '10 min',
    category: 'Tools',
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Blog</h1>
        <p className="text-muted-foreground max-w-2xl">
          Articles and notes about AI, machine learning, and data science. 
          I share my experiences, learnings, and insights here.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => {
          return (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
            >
              <article
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
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
          );
        })}
      </div>
    </main>
  );
}