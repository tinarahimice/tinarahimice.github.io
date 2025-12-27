import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'LLM-based Security Vulnerability Detection',
    description: 'Bachelor\'s thesis project focusing on using large language models to detect security vulnerabilities in code. Implemented fine-tuning techniques and achieved significant improvement in detection accuracy.',
    year: '2024',
    category: 'Research',
    tags: ['Python', 'LLMs', 'Security', 'NLP'],
  },
  {
    id: 2,
    title: 'Persian Text Classification System',
    description: 'Developed a comprehensive NLP pipeline for Persian text classification using transformer models. Implemented custom word embeddings optimized for Persian language.',
    year: '2024',
    category: 'NLP',
    tags: ['Python', 'Transformers', 'Hazm', 'PyTorch'],
  },
  {
    id: 3,
    title: 'Intelligent Order Processing Agent',
    description: 'Designed and implemented AI agents to automate order processing workflows. Integrated with existing systems to improve reliability and reduce manual intervention.',
    year: '2024',
    category: 'AI Agent',
    tags: ['Python', 'LangChain', 'FastAPI', 'MongoDB'],
  },
  {
    id: 4,
    title: 'RAG-based Chatbot',
    description: 'Built a retrieval-augmented generation chatbot system for customer support. Implemented efficient document retrieval and context-aware response generation.',
    year: '2024',
    category: 'Chatbot',
    tags: ['Python', 'LangChain', 'Elasticsearch', 'OpenAI'],
  },
  {
    id: 5,
    title: 'User Engagement Analytics Pipeline',
    description: 'Developed ETL pipelines for processing large-scale user activity logs. Created dashboards for real-time insights and personalization recommendations.',
    year: '2023',
    category: 'Data Engineering',
    tags: ['Python', 'Airflow', 'SQL Server', 'Metabase'],
  },
  {
    id: 6,
    title: 'ML-based Content Recommendation',
    description: 'Implemented machine learning models to improve content personalization and user engagement. Applied collaborative filtering and deep learning techniques.',
    year: '2023',
    category: 'Machine Learning',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl mb-4">Projects</h1>
        <p className="text-muted-foreground max-w-2xl">
          A collection of projects I've worked on, ranging from research to production systems. 
          Each project represents a unique challenge and learning experience in AI and data science.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}