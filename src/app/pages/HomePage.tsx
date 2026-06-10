import { Mail, MapPin, Phone, Briefcase, GraduationCap, Download, Github } from 'lucide-react';

export default function HomePage() {
  const experiences = [
    {
      title: 'Data Scientist (AI Engineer)',
      company: 'IraniCard',
      location: 'Isfahan, Iran',
      period: 'Dec 2024 - Jan 2026',
      responsibilities: [
        'Developed machine learning models for flight ticket price forecasting using large-scale tabular datasets, performing feature engineering, feature selection, model evaluation, and performance analysis to support pricing insights and decision-making workflows. (Pateh)',
        'Designed automated evaluation and monitoring pipelines for forecasting models using Apache Airflow and Metabase, enabling performance tracking, analytical reporting, and model behavior analysis. (Pateh)',
        'Built intelligent automation workflows for customer order processing using Selenium and LLM-based agents, reducing manual operational effort and improving process efficiency. (IraniCard)',
        'Developed an AI-powered flight ticket purchasing agent capable of automating parts of the search and booking workflow. (Pateh)',
        'Built a RAG-based customer support chatbot leveraging historical customer service conversations as a knowledge base to improve response relevance and support efficiency. (IraniCard)',
      ],
    },
    {
      title: 'Data Scientist (NLP Developer)',
      company: 'Saminray ICT Co.',
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
      items: ['Scikit-learn', 'PyTorch'],
    },
    {
      category: 'LLM / Generative AI & RAG',
      items: ['LlamaIndex', 'LangChain', 'LangGraph', 'Transformers (Hugging Face)', 'OpenAI API', 'Ollama', 'prompt engineering'],
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
      items: ['SQL Server', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'Data Engineering & MLOps Tooling',
      items: ['Airflow', 'MLflow', 'Git', 'Docker'],
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
      items: ['Machine Learning', 'Deep Learning', 'NLP', 'Applied Linear Algebra'],
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24">
        <div>
          <h1 className="text-4xl mb-4">Tina Rahimi<br />Data Scientist / AI Engineer</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl text-justify">
            Data Scientist / AI Engineer with experience building machine learning models, AI-powered applications, and intelligent decision-support systems. Skilled in Python, SQL, machine learning, NLP, and LLM-based architectures, including RAG, semantic search, and agentic AI systems. Experienced in developing end-to-end AI solutions, from data processing and feature engineering to model deployment, monitoring, and evaluation. Passionate about continuous learning, rapid experimentation, and delivering reliable, production-ready AI systems in collaborative and fast-paced environments.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}Tina_Rahimi_Resume.pdf`}
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
            <li>• GPA: 16.93/20</li>
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