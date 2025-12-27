import { Mail, MapPin, Phone, Briefcase, GraduationCap, Download, Github } from 'lucide-react';

export default function HomePage() {
  const experiences = [
    {
      title: 'Data Scientist (AI Engineer)',
      company: 'IraniCard',
      location: 'Isfahan, Iran',
      period: 'Dec 2024 - Present',
      responsibilities: [
        'Designed and productionized intelligent agent workflows to automate key steps in order processing, improving system reliability and reducing manual intervention.',
        'Partnered with product, operations, and engineering teams to integrate AI-driven features into existing platforms and iterate based on real user/operational feedback.',
        'Built and refined ML-driven decision support to enhance user purchase decision-making (e.g., scoring/segmentation/ranking logic aligned with business goals).',
      ],
    },
    {
      title: 'Data Scientist (NLP Developer)',
      company: 'SamIoray ICT Co.',
      location: 'Remote',
      period: 'Jan 2024 - Dec 2024',
      responsibilities: [
        'Researched and fine-tuned LLMs for Persian text processing, focusing on practical downstream performance and robustness.',
        'Implemented embedding-based approaches to improve semantic search and text classification quality and relevance.',
        'Built and optimized end-to-end NLP pipelines for chatbot and retrieval-augmented generation (RAG) applications, improving response quality and stability.',
        'Improved model usability for scalable delivery by standardizing pipelines, experiment structure, and handoff-ready outputs for product integration.',
      ],
    },
    {
      title: 'Data Engineer Intern',
      company: 'Digitoon',
      location: 'Tehran, Iran',
      period: 'Jul 2023 - Sep 2023',
      responsibilities: [
        'Contributed to building ETL pipelines for large-scale user activity logs to produce clean, analysis-ready datasets.',
        'Processed and analyzed datasets to generate insights supporting product and content optimization decisions.',
        'Supported personalization and engagement initiatives by assisting with ML experimentation and data preparation.',
        'Worked closely with the data science team on preprocessing, cleaning, and feature engineering for modeling workflows.',
      ],
    },
  ];

  const skills = [
    {
      category: 'Programming',
      items: ['Python', 'Java (familiar)'],
    },
    {
      category: 'Machine Learning & Deep Learning',
      items: ['Scikit-learn', 'PyTorch', 'Transformers (HF)'],
    },
    {
      category: 'LLM / Generative AI & RAG',
      items: ['LlamaIndex', 'Hugging Face Datasets', 'OpenAI API', 'Ollama', 'RAG pipelines', 'embeddings', 'prompt engineering'],
    },
    {
      category: 'Backend & Serving',
      items: ['FastAPI'],
    },
    {
      category: 'NLP & Text Processing',
      items: ['Hazm', 'NLTK'],
    },
    {
      category: 'Data Analysis & Visualization',
      items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Metabase'],
    },
    {
      category: 'Databases & Search',
      items: ['SQL Server', 'MongoDB', 'Elasticsearch'],
    },
    {
      category: 'Data Engineering & MLOps Tooling',
      items: ['Airflow', 'Git', 'Docker'],
    },
    {
      category: 'Testing / Automation',
      items: ['Selenium'],
    },
    {
      category: 'LLM Observability & Evaluation',
      items: ['Arize Phoenix (Phoenix)'],
    },
    {
      category: 'Core Knowledge',
      items: ['Machine Learning', 'NLP', 'Applied Linear Algebra'],
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24">
        <div>
          <h1 className="text-4xl mb-4">Tina Rahimi<br />Data Scientist / AI Engineer</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl text-justify">
            Data Scientist / AI Engineer specializing in NLP and LLM-powered applications (Persian text processing, RAG, semantic search, and intelligent agents). I'm driven by continuous learning actively exploring new approaches and tools, prototyping quickly, and turning the best ideas into reliable, production-ready systems. I thrive in collaborative teams and prefer fast-evolving environments where I can take on new challenges and keep expanding my skill set.
          </p>
          <a
            href="/Tina_Rahimi_Resume.pdf"
            download="Tina_Rahimi_Resume.pdf"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
            <a href="tel:09215384489" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              0921-538-4489
            </a>
            <a href="mailto:tinarahimi.ce@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" />
              tinarahimi.ce@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Tehran
            </div>
            <a href="https://github.com/tinarahimice" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Github className="w-4 h-4" />
              Github
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-1 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span className="text-justify">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-3xl">Education</h2>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
            <div>
              <h3 className="text-xl mb-1">Bachelor's Degree in Computer Engineering</h3>
              <p className="text-muted-foreground">University of Isfahan</p>
            </div>
            <span className="text-sm text-muted-foreground mt-1 md:mt-0">Nov 2020 - Sep 2024</span>
          </div>
          <ul className="space-y-1 text-muted-foreground">
            <li>• GPA: 16.93/20 (≈ 3.386/4.0)</li>
            <li>• Core Areas: Artificial Intelligence & Software Engineering</li>
            <li>• Bachelor's Thesis: LLM-based Security Vulnerability Detection</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl mb-8">Skills</h2>
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h4 className="text-lg mb-3 text-primary">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}