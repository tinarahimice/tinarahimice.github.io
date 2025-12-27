import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Languages } from 'lucide-react';
import { useState } from 'react';

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
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    titleEn: 'Phoenix',
    titleFa: 'Phoenix',
    excerptEn: 'A comprehensive guide to understanding and working with Phoenix framework. Learn about real-time features, channels, and practical applications.',
    excerptFa: 'راهنمای جامع برای درک و کار با فریمورک Phoenix. در مورد ویژگی‌های بلادرنگ، کانال‌ها و کاربردهای عملی بیاموزید.',
    contentEn: `Phoenix is a web development framework written in Elixir that enables developers to build scalable and maintainable web applications. This comprehensive guide covers the essential concepts and best practices for working with Phoenix.

## What is Phoenix?

Phoenix is built on top of the Elixir programming language and leverages the Erlang VM (BEAM) to provide exceptional performance and reliability. It follows the Model-View-Controller (MVC) pattern and emphasizes developer productivity.

## Key Features

### Real-time Capabilities

Phoenix Channels provide built-in support for WebSocket connections, enabling real-time features like:
- Live chat applications
- Collaborative editing tools
- Real-time notifications
- Live dashboards and monitoring

### LiveView

Phoenix LiveView allows you to build rich, real-time user experiences without writing JavaScript. Server-rendered HTML updates automatically in response to user interactions and server events.

### Performance

Thanks to the Erlang VM, Phoenix applications can handle millions of connections with minimal resource usage. The framework is designed for:
- Low latency responses
- High concurrency
- Fault tolerance
- Hot code reloading

## Core Concepts

### Contexts

Contexts organize related functionality and provide a clear API for interacting with your application's business logic. They help maintain clean separation of concerns.

### Ecto

Ecto is Phoenix's database wrapper and query language. It provides:
- Schema definitions
- Query composition
- Migrations
- Changesets for data validation

### Router

The Phoenix router maps incoming requests to controllers and defines the structure of your application's URL space.

## Getting Started

To create a new Phoenix application:

1. Install Elixir and Phoenix
2. Generate a new project
3. Configure your database
4. Start the development server
5. Begin building your features

## Best Practices

**Organize with Contexts**: Group related functionality into contexts for better code organization.

**Use Changesets**: Leverage Ecto changesets for robust data validation and error handling.

**Embrace Concurrency**: Take advantage of Elixir's concurrency model with processes and GenServers.

**Test Thoroughly**: Write comprehensive tests using ExUnit and Phoenix's testing helpers.

## Production Deployment

Phoenix applications are designed for production deployment with:
- Easy containerization with Docker
- Support for clustering and distribution
- Built-in monitoring and telemetry
- Seamless deployment to platforms like Fly.io and Gigalixir

## Conclusion

Phoenix combines the productivity of modern web frameworks with the performance and reliability of the Erlang VM. Whether you're building a simple web application or a complex real-time system, Phoenix provides the tools and patterns you need to succeed.`,
    contentFa: `Phoenix یک فریمورک توسعه وب است که با زبان Elixir نوشته شده و به توسعه‌دهندگان امکان می‌دهد برنامه‌های وب مقیاس‌پذیر و قابل نگهداری بسازند. این راهنمای جامع مفاهیم و بهترین شیوه‌های کار با Phoenix را پوشش می‌دهد.

## Phoenix چیست؟

Phoenix بر روی زبان برنامه‌نویسی Elixir ساخته شده و از ماشین مجازی Erlang (BEAM) برای ارائه عملکرد و قابلیت اطمینان استثنایی استفاده می‌کند. از الگوی Model-View-Controller (MVC) پیروی می‌کند و بر بهره‌وری توسعه‌دهنده تأکید دارد.

## ویژگی‌های کلیدی

### قابلیت‌های بلادرنگ

کانال‌های Phoenix پشتیبانی داخلی برای اتصالات WebSocket ارائه می‌دهند و ویژگی‌های بلادرنگ مانند موارد زیر را فعال می‌کنند:
- برنامه‌های چت زنده
- ابزارهای ویرایش مشارکتی
- اعلان‌های بلادرنگ
- داشبوردهای زنده و نظارت

### LiveView

Phoenix LiveView به شما امکان می‌دهد تجربیات کاربری غنی و بلادرنگ بدون نوشتن JavaScript بسازید. HTML رندر شده در سرور به طور خودکار در پاسخ به تعاملات کاربر و رویدادهای سرور به‌روزرسانی می‌شود.

### عملکرد

به لطف ماشین مجازی Erlang، برنامه‌های Phoenix می‌توانند میلیون‌ها اتصال را با استفاده حداقلی از منابع مدیریت کنند. فریمورک برای موارد زیر طراحی شده است:
- پاسخ‌های با تأخیر کم
- همزمانی بالا
- تحمل خطا
- بارگذاری مجدد کد داغ

## مفاهیم اصلی

### Contexts

Contextها عملکردهای مرتبط را سازماندهی می‌کنند و یک API واضح برای تعامل با منطق تجاری برنامه شما ارائه می‌دهند. آنها به حفظ جداسازی واضح نگرانی‌ها کمک می‌کنند.

### Ecto

Ecto پوشش پایگاه داده و زبان پرس‌وجوی Phoenix است. ارائه می‌دهد:
- تعاریف طرحواره
- ترکیب پرس‌وجو
- مهاجرت‌ها
- Changesets برای اعتبارسنجی داده

### Router

روتر Phoenix درخواست‌های ورودی را به کنترلرها نگاشت می‌کند و ساختار فضای URL برنامه شما را تعریف می‌کند.

## شروع کار

برای ایجاد یک برنامه Phoenix جدید:

1. Elixir و Phoenix را نصب کنید
2. یک پروژه جدید تولید کنید
3. پایگاه داده خود را پیکربندی کنید
4. سرور توسعه را راه‌اندازی کنید
5. شروع به ساخت ویژگی‌های خود کنید

## بهترین شیوه‌ها

**با Contexts سازماندهی کنید**: عملکردهای مرتبط را در contextها گروه‌بندی کنید تا سازماندهی کد بهتر شود.

**از Changesets استفاده کنید**: از Ecto changesets برای اعتبارسنجی قوی داده و مدیریت خطا استفاده کنید.

**همزمانی را بپذیرید**: از مدل همزمانی Elixir با فرآیندها و GenServers بهره ببرید.

**به طور کامل تست کنید**: تست‌های جامع را با استفاده از ExUnit و کمک‌کننده‌های تست Phoenix بنویسید.

## استقرار تولید

برنامه‌های Phoenix برای استقرار تولید طراحی شده‌اند با:
- کانتینریزه‌سازی آسان با Docker
- پشتیبانی از خوشه‌بندی و توزیع
- نظارت و تله‌متری داخلی
- استقرار یکپارچه در پلتفرم‌هایی مانند Fly.io و Gigalixir

## نتیجه‌گیری

Phoenix بهره‌وری فریمورک‌های وب مدرن را با عملکرد و قابلیت اطمینان ماشین مجازی Erlang ترکیب می‌کند. چه در حال ساخت یک برنامه وب ساده باشید یا یک سیستم بلادرنگ پیچیده، Phoenix ابزارها و الگوهایی را که برای موفقیت نیاز دارید فراهم می‌کند.`,
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
    contentEn: `Docling is a powerful document processing library that simplifies working with various document formats. This guide explores its capabilities and shows you how to leverage it for efficient document management.

## What is Docling?

Docling provides a unified interface for processing different document types including PDFs, Word documents, spreadsheets, and more. It handles the complexity of format-specific parsing and extraction, allowing you to focus on your application logic.

## Key Features

### Multi-Format Support

Docling works seamlessly with:
- PDF documents
- Microsoft Word (.docx, .doc)
- Excel spreadsheets
- PowerPoint presentations
- Plain text and markdown files
- HTML documents

### Text Extraction

Extract text content from documents while preserving:
- Document structure
- Formatting information
- Metadata
- Tables and lists

### Document Parsing

Parse complex document structures including:
- Headers and footers
- Tables of contents
- Page numbers
- Sections and chapters

## Core Capabilities

### Metadata Extraction

Retrieve document metadata such as:
- Author information
- Creation and modification dates
- Document properties
- Keywords and tags

### Content Analysis

Analyze document content for:
- Text statistics (word count, character count)
- Language detection
- Readability scores
- Keyword extraction

### Document Conversion

Convert between different formats:
- PDF to text
- Word to markdown
- HTML to plain text
- Cross-format conversions

## Practical Applications

### Document Management Systems

Build robust document management systems with features like:
- Automatic document indexing
- Full-text search
- Document classification
- Version control

### Data Extraction Pipelines

Create data extraction workflows for:
- Invoice processing
- Contract analysis
- Research paper mining
- Report generation

### Content Analysis

Perform content analysis tasks:
- Sentiment analysis on documents
- Topic modeling
- Entity extraction
- Summary generation

## Best Practices

**Handle Errors Gracefully**: Document processing can fail for various reasons. Implement proper error handling and validation.

**Optimize for Performance**: Process large documents efficiently by using streaming and chunking techniques.

**Preserve Quality**: Maintain document quality during extraction and conversion by configuring appropriate settings.

**Test with Various Formats**: Different document formats may behave differently. Test with a diverse set of documents.

## Integration

Docling integrates well with:
- Cloud storage services (S3, Google Drive)
- Database systems
- Search engines (Elasticsearch, Solr)
- Machine learning pipelines

## Advanced Features

### OCR Support

Extract text from scanned documents and images using optical character recognition.

### Table Extraction

Intelligently extract and structure tabular data from documents.

### Layout Analysis

Analyze document layout to understand structure and hierarchy.

## Conclusion

Docling simplifies the complex task of document processing, making it accessible for developers to build sophisticated document-centric applications. Whether you're building a document management system, data extraction pipeline, or content analysis tool, Docling provides the capabilities you need.`,
    contentFa: `Docling یک کتابخانه قدرتمند پردازش اسناد است که کار با فرمت‌های مختلف اسناد را ساده می‌کند. این راهنما قابلیت‌های آن را بررسی می‌کند و به شما نشان می‌دهد چگونه از آن برای مدیریت کارآمد اسناد استفاده کنید.

## Docling چیست؟

Docling یک رابط یکپارچه برای پردازش انواع مختلف اسناد از جمله PDFها، اسناد Word، صفحات گسترده و موارد دیگر ارائه می‌دهد. پیچیدگی تجزیه و استخراج خاص فرمت را مدیریت می‌کند و به شما امکان می‌دهد بر منطق برنامه خود تمرکز کنید.

## ویژگی‌های کلیدی

### پشتیبانی چند فرمتی

Docling به طور یکپارچه با موارد زیر کار می‌کند:
- اسناد PDF
- Microsoft Word (.docx, .doc)
- صفحات گسترده Excel
- ارائه‌های PowerPoint
- فایل‌های متن ساده و markdown
- اسناد HTML

### استخراج متن

محتوای متنی را از اسناد استخراج کنید در حالی که موارد زیر را حفظ می‌کنید:
- ساختار سند
- اطلاعات قالب‌بندی
- فراداده
- جداول و لیست‌ها

### تجزیه سند

ساختارهای پیچیده سند از جمله موارد زیر را تجزیه کنید:
- سرصفحه و پاصفحه
- فهرست مطالب
- شماره صفحات
- بخش‌ها و فصل‌ها

## قابلیت‌های اصلی

### استخراج فراداده

فراداده سند مانند موارد زیر را بازیابی کنید:
- اطلاعات نویسنده
- تاریخ ایجاد و تغییر
- ویژگی‌های سند
- کلمات کلیدی و برچسب‌ها

### تحلیل محتوا

محتوای سند را برای موارد زیر تجزیه و تحلیل کنید:
- آمار متن (تعداد کلمات، تعداد کاراکترها)
- تشخیص زبان
- امتیازهای خوانایی
- استخراج کلمات کلیدی

### تبدیل سند

بین فرمت‌های مختلف تبدیل کنید:
- PDF به متن
- Word به markdown
- HTML به متن ساده
- تبدیل‌های بین فرمتی

## کاربردهای عملی

### سیستم‌های مدیریت اسناد

سیستم‌های مدیریت اسناد قوی با ویژگی‌هایی مانند موارد زیر بسازید:
- نمایه‌سازی خودکار اسناد
- جستجوی تمام متن
- طبقه‌بندی اسناد
- کنترل نسخه

### خطوط لوله استخراج داده

گردش‌های کاری استخراج داده برای موارد زیر ایجاد کنید:
- پردازش فاکتور
- تحلیل قرارداد
- استخراج مقالات تحقیقاتی
- تولید گزارش

### تحلیل محتوا

وظایف تحلیل محتوا را انجام دهید:
- تحلیل احساسات در اسناد
- مدل‌سازی موضوع
- استخراج موجودیت
- تولید خلاصه

## بهترین شیوه‌ها

**خطاها را به خوبی مدیریت کنید**: پردازش اسناد می‌تواند به دلایل مختلف شکست بخورد. مدیریت خطا و اعتبارسنجی مناسب را پیاده‌سازی کنید.

**برای عملکرد بهینه‌سازی کنید**: اسناد بزرگ را به طور کارآمد با استفاده از تکنیک‌های streaming و chunking پردازش کنید.

**کیفیت را حفظ کنید**: کیفیت سند را در طول استخراج و تبدیل با پیکربندی تنظیمات مناسب حفظ کنید.

**با فرمت‌های مختلف تست کنید**: فرمت‌های مختلف سند ممکن است رفتار متفاوتی داشته باشند. با مجموعه متنوعی از اسناد تست کنید.

## یکپارچگی

Docling به خوبی با موارد زیر یکپارچه می‌شود:
- سرویس‌های ذخیره‌سازی ابری (S3، Google Drive)
- سیستم‌های پایگاه داده
- موتورهای جستجو (Elasticsearch، Solr)
- خطوط لوله یادگیری ماشین

## ویژگی‌های پیشرفته

### پشتیبانی OCR

متن را از اسناد اسکن‌شده و تصاویر با استفاده از تشخیص نوری کاراکتر استخراج کنید.

### استخراج جدول

داده‌های جدولی را به طور هوشمند از اسناد استخراج و ساختاربندی کنید.

### تحلیل چیدمان

چیدمان سند را برای درک ساختار و سلسله‌مراتب تجزیه و تحلیل کنید.

## نتیجه‌گیری

Docling وظیفه پیچیده پردازش اسناد را ساده می‌کند و آن را برای توسعه‌دهندگان قابل دسترس می‌کند تا برنامه‌های پیچیده متمرکز بر اسناد بسازند. چه در حال ساخت یک سیستم مدیریت اسناد، خط لوله استخراج داده یا ابزار تحلیل محتوا باشید، Docling قابلیت‌هایی را که نیاز دارید فراهم می‌کند.`,
    date: 'Nov 28, 2024',
    readTime: '10 min',
    category: 'Tools',
  },
];

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [language, setLanguage] = useState<'en' | 'fa'>('en');

  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const isRtl = language === 'fa';

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog</span>
      </Link>

      {/* Header */}
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
              <span>{language === 'en' ? 'فارسی' : 'English'}</span>
            </button>
          </div>

          <h1 className="text-4xl mb-4" dir={isRtl ? 'rtl' : 'ltr'}>
            {language === 'en' ? post.titleEn : post.titleFa}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground" dir={isRtl ? 'rtl' : 'ltr'}>
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

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div 
            className="text-muted-foreground leading-relaxed whitespace-pre-wrap"
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{ textAlign: 'justify' }}
          >
            {language === 'en' ? post.contentEn : post.contentFa}
          </div>
        </div>
      </article>
    </main>
  );
}