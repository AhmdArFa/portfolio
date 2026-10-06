/* ============================================================
   AHMED GAMAL ARFA — DATA & AI ENGINEER | VALIDATION SPECIALIST (MCIT)
   Cinematic Portfolio Content
   Replicating Hazem Elerefy's portfolio architecture
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Projects", href: "#projects" },
    { label: "The Mind", href: "#think" },
    { label: "Skills", href: "#method" },
    { label: "MCIT & Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Ahmed",
  role: ["Data & AI Engineer", "Validation Specialist"],
  meta: ["AI", "Power BI", "MCIT"],

  notification: {
    name: "Ahmed Arfa",
    time: "now",
    lead: "MCIT Validation",
    message: "Data Analyst & AI Engineer at MCIT — building automated OCR validation and intelligent BI architectures.",
  },

  section2: {
    sideLeft: ["MCIT Validation", "Data Systems."],
    sideRight: ["Precision.", "Impact."],
  },

  /* My Works — 6 production projects with direct GitHub links and metrics */
  works: {
    brand: "Ahmed Gamal Arfa · Portfolio",
    projects: [
      {
        key: "hand-automation",
        name: "BASEERA (بَصِيرَة)",
        img: "assets/work-hand-automation.jpg",
        w: 800,
        h: 600,
        cat: "Assistive AI · Healthcare · Computer Vision",
        year: "2026",
        accent: "#00f0ff",
        title: "BASEERA (بَصِيرَة) — AI Kinetic Suite for Assistive, Healthcare & Rehabilitation Tech",
        github: "https://github.com/AhmdArFa/hand-automation",
        desc: "منصة ذكاء اصطناعي إنسانية ورعاية صحية تحول كاميرا الويب العادية إلى منظومة تتبع كينيتيكي ثلاثية الأبعاد (21 مفصلاً تشريحياً @ 60 FPS) محلياً 100% بدون إنترنت عبر MediaPipe WASM و OpenCV. تضم 4 عيادات ووحدات مساعدة بالإضافة إلى استوديو الهولوجرام ثلاثي الأبعاد.",
        quote: "تسخير الذكاء الاصطناعي ليكون عوناً للإنسان: صوتاً لمن لا يستطيع الكلام، وعيادة تأهيل حركي، وحرية تحكم لذوي الشلل، ودرعاً معقماً في غرف العمليات الجراحية.",
        badges: ["60 FPS Real-Time", "21 3D Landmarks", "100% Offline WASM & TFLite", "Zero Wearables", "FastAPI & OpenCV"],
        modules: [
          {
            name: "🧏‍♂️ مُتَكَلِّم (Mutakallim)",
            sub: "مترجم لغة الإشارة واستغاثة الطوارئ SOS",
            desc: "ترجمة فورية لعشر إشارات يومية إلى صوت عربي طبيعي، مع تواصل صوتي ثنائي الاتجاه، ونظام استغاثة SOS فوري عند إشارة الخطر العالمية."
          },
          {
            name: "🏥 تَعَافِي (Ta'afi)",
            sub: "عيادة التأهيل والعلاج الطبيعي الحركي",
            desc: "حساب زوايا مفاصل الأصابع الخمسة بدقة (0°-180°)، مؤشر مرونة اليد ROM، 4 بروتوكولات تمارين طبية موجهة، وتصدير تقرير طبي سريري."
          },
          {
            name: "🖱️ طَلِيق (Taleeq)",
            sub: "الفأرة الهوائية ولوحة المفاتيح اللاتلامسية",
            desc: "تتبع رأس السبابة بفلتر مانع للرعشة (EMA)، نقر تلقائي بالثبات (Dwell Click) لذوي الشلل، وتصفح ولوحة مفاتيح هوائية عربية كاملة."
          },
          {
            name: "🩺 طَبِيب (Tabib)",
            sub: "مستعرض الأشعة والتشريح الطبي المعقم",
            desc: "استعراض صور الأشعة (X-Ray / MRI / CT) في الهواء بغرف العمليات المعقمة، تكبير حتى 350%، ومسطرة قياس رقمية بالمليمتر."
          },
          {
            name: "⚡ استوديو الهولوجرام 3D",
            sub: "Hologram Studio & Cranial Bio-Scanner",
            desc: "تثبيت الأشكال الهندسية النيونية بالهواء، دمجها بصواعق كهربائية، وماسح بيولوجي لعظام الوجه والجمجمة وعوالم Three.js التفاعلية."
          }
        ]
      },
      {
        key: "notebooklm",
        name: "MCIT AI NotebookLM",
        img: "assets/work-notebooklm.jpg",
        w: 800,
        h: 600,
        cat: "GovTech AI · Local LLMs & RAG",
        year: "2026",
        accent: "#f59e0b",
        title: "MCIT AI NotebookLM — Local Ministry Document Intelligence Platform",
        github: "https://github.com/AhmdArFa/mcit-ai-notebooklm",
        desc: "منصة ذكاء اصطناعي سيادية لوزارة الاتصالات وتكنولوجيا المعلومات (MCIT) مستوحاة من NotebookLM، تعمل محلياً بنسبة 100% دون اتصال بالإنترنت للحفاظ على سرية الوثائق الحكومية. تستخدم نماذج مكممة Qwen3 4B وتضمينات BGE-M3 عبر Ollama لتحليل وثائق (PDF, DOCX, PPTX) واستخراج المعرفة وتوليد 3 مخرجات وزارية رئيسية.",
        quote: "فصل الفهم عن التوليد: كل قرار وإحصائية موثقة برقم الصفحة أو الشريحة الأصلية لمنع التخريف وحماية سيادة البيانات الحكومية.",
        badges: ["100% Air-Gapped & Local", "Ollama Qwen3 4B (Q4_K_M)", "BGE-M3 Embeddings", "FastAPI & React 18", "python-pptx Engine"],
        modules: [
          {
            name: "📄 استخراج المستندات والجداول",
            sub: "Multi-Format Parsing (PDF / DOCX / PPTX)",
            desc: "استخراج دقيق للنصوص والجداول المعقدة مع تعقب رقم الصفحة والشريحة الأصلية وملاحظات العرض بدون أي فقدان للبيانات."
          },
          {
            name: "🧠 البحث الدلالي والفهرسة المحلية",
            sub: "Local RAG & BGE-M3 Embeddings",
            desc: "تضمين مقطعي دلالي بأبعاد 1024 مع فهرسة متجهات داخلية عبر NumPy Cosine Similarity لحساب أسرع استرجاع محلي."
          },
          {
            name: "📋 ملخصات وزارية موثقة",
            sub: "Source-Anchored Executive Briefings",
            desc: "توليد موجزات تنفيذية، مصفوفات قرارات، وتوصيات استراتيجية موثقة برقم الصفحة لضمان دقة اتخاذ القرار القيادي."
          },
          {
            name: "📊 عروض تقديمية قابلة للتعديل (.pptx)",
            sub: "python-pptx Native Presentation Generator",
            desc: "توليد شرائح PowerPoint رسمية قابلة للتعديل بـ 7 قوالب قيادية (بطاقات أداء، خرائط طريق، وتحليلات مقارنة)."
          },
          {
            name: "📈 إنفوجرافيك موجه تفاعلي (.svg)",
            sub: "5 Scalable Vector Infographic Archetypes",
            desc: "توليد رسوم بيانية فيكتور عالية الجودة للطباعة والنشر الرسمي (مسارات العمليات، الجداول الزمنية، والهياكل التنظيمية)."
          }
        ]
      },
      {
        key: "nilex",
        name: "NILEX.AI",
        img: "assets/work-nilex.jpg",
        w: 800,
        h: 600,
        cat: "AgriTech · Computer Vision",
        year: "2026",
        accent: "#00ff88",
        title: "Smart Green Agro-Ecosystem for Automated Disease Detection (Graduation Project)",
        github: "https://github.com/AhmdArFa/NILEX-Smart-Agriculture-AI",
        desc: "Combines YOLOv8 fruit detection with ResNet-50 disease classification (Macro-F1 0.978) at sub-3-second latency, FastAPI, Azure, Power BI, and multilingual RAG.",
      },
      {
        key: "ocr",
        name: "National ID OCR",
        img: "assets/work-ocr.jpg",
        w: 800,
        h: 600,
        cat: "GovTech · Computer Vision",
        year: "2026",
        accent: "#38bdf8",
        title: "Egyptian National ID Automated OCR Extraction & Validation Pipeline",
        github: "https://github.com/AhmdArFa/National-ID-OCR-Validation",
        desc: "Automated computer vision and Tesseract OCR pipelines to detect Egyptian ID cards, correct skew/binarization with OpenCV, and extract structured fields with FastAPI & JWT auth at MCIT.",
      },
      {
        key: "hospital",
        name: "Hospital Command Center",
        img: "assets/work-hospital.jpg",
        w: 800,
        h: 600,
        cat: "Healthcare · Power BI (PL-300)",
        year: "2026",
        accent: "#f59e0b",
        title: "Hospital Patient Flow & Clinical Revenue Command Center",
        github: "https://github.com/AhmdArFa/Hospital-Patient-Flow-PowerBI",
        desc: "Executive BI dashboard tracking 300 patients across 8 departments and EGP 37.44M revenue with star schema and advanced DAX measures, saving 50% executive review time.",
      },
      {
        key: "sales",
        name: "Global Sales Analytics",
        img: "assets/work-sales.jpg",
        w: 800,
        h: 600,
        cat: "Enterprise BI · Microsoft Fabric",
        year: "2026",
        accent: "#ec4899",
        title: "Global Superstore Sales & Profitability Intelligence System",
        github: "https://github.com/AhmdArFa/Global-Superstore-PowerBI",
        desc: "Interactive enterprise BI analyzing 4,117 orders across global regions with multi-currency conversion, OneLake Delta tables, and dynamic executive KPI trees.",
      },
      {
        key: "sql",
        name: "SQL Data Quality Pipeline",
        img: "assets/work-sql.jpg",
        w: 800,
        h: 600,
        cat: "Data Engineering · ETL",
        year: "2025",
        accent: "#a855f7",
        title: "Automated SQL Data Cleansing & Integrity Verification Pipeline",
        github: "https://github.com/AhmdArFa/Enterprise-Data-Quality-Pipeline",
        desc: "Cleansed, validated, and deduplicated 4,000+ enterprise records with automated integrity constraints, regex checks, and relational audit logging.",
      },
      {
        key: "clv",
        name: "Customer Retention ML",
        img: "assets/work-clv.jpg",
        w: 800,
        h: 600,
        cat: "Machine Learning · Scikit-Learn",
        year: "2025",
        accent: "#10b981",
        title: "Customer Lifetime Value & Predictive Churn Prevention Engine",
        github: "https://github.com/AhmdArFa/Customer-Churn-Analytics",
        desc: "Machine learning classifier achieving 97% accuracy in identifying churn risk factors, segmenting user cohorts, and optimizing retention revenue.",
      },
    ],
  },

  /* BIG ROBOT section (Spline 3D experience) */
  bigRobot: {
    labels: { left: "Data Analyst & AI Engineer", right: "MCIT Validation · Deep Learning" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build intelligent systems that", "turn raw data into verified impact."],
    description: "From deep learning computer vision to enterprise Power BI architectures and secure production APIs.",
    hint: "Scroll to move through the disciplines.",

    techIdeas: [
      {
        no: "01",
        title: "Applied AI & Computer Vision",
        description: "Architecting convolutional backbones, YOLOv8 detectors, MediaPipe 3D kinetic biomechanics, and OCR extraction pipelines that process visual streams with sub-second inference.",
        tags: ["PyTorch", "YOLOv8", "MediaPipe 3D", "OpenCV", "Tesseract OCR", "ResNet-50", "Scikit-Learn"],
      },
      {
        no: "02",
        title: "Enterprise Business Intelligence & Fabric",
        description: "Architecting Medallion Lakehouses, OneLake Delta tables, star schemas, and DAX metric governance for executive decision makers.",
        tags: ["Power BI (PL-300)", "Microsoft Fabric", "DAX Modeling", "SQL Server", "ETL"],
      },
      {
        no: "03",
        title: "Production Validation & Secure Backends",
        description: "Engineering high-availability asynchronous microservices with FastAPI, JWT security, and relational database integrity at MCIT.",
        tags: ["FastAPI", "JWT Auth", "PostgreSQL", "Docker", "REST APIs", "Azure"],
      },
      {
        no: "04",
        title: "Sovereign LLMs & Retrieval Augmented Generation",
        description: "Engineering local-first air-gapped RAG pipelines, quantized models (Qwen3 4B via Ollama), BGE-M3 dense embeddings, and strict citation traceability for ministry document intelligence.",
        tags: ["Local RAG", "Ollama", "Qwen3", "BGE-M3", "Vector Embeddings", "FastAPI", "Transformers"],
      },
    ],
  },

  /* EDITORIAL / SKILLS section */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Data is my canvas.", "Validation is my standard."],
    note: "Bridging the gap between raw statistical data, deep learning models, and mission-critical production systems.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "AI & ML", items: ["Local LLMs (Ollama)", "RAG & BGE-M3", "PyTorch", "YOLOv8", "OpenCV", "MediaPipe 3D", "Scikit-Learn", "Transformers", "Tesseract OCR"] },
        { name: "Data & BI", items: ["Power BI (PL-300)", "Microsoft Fabric", "DAX", "SQL Server", "PostgreSQL", "Pandas", "NumPy"] },
        { name: "Backend & Cloud", items: ["FastAPI", "JWT Auth", "Docker", "Microsoft Azure", "REST APIs", "Linux"] },
        { name: "Languages", items: ["Python", "SQL", "R", "JavaScript", "HTML5 / CSS3"] },
      ],
    },
    mindset: {
      title: "Analyze → Model → Validate → Deploy",
      lines: [
        "I explore the distribution and hygiene of data.",
        "I model the underlying patterns with machine learning.",
        "I validate rigorously against real-world edge cases.",
        "And I deploy secure, observable systems that deliver measurable value.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "Autonomous multi-agent workflows with tool use",
        "Fine-tuning Small Language Models (SLMs) on domain tasks",
        "Real-time streaming analytics with Microsoft Fabric",
        "End-to-end MLOps deployment on Azure",
      ],
    },
    ending: {
      lines: ["Still analyzing.", "Still modeling.", "Still validating."],
      note: "Continuous learning and relentless precision.",
    },
  },

  /* SMALL ROBOT section */
  smallRobot: {
    eyebrow: "( 07 · Still Curious )",
    titleLines: ["Always learning,", "always optimizing."],
    description: "A small machine, quietly observing — the way every rigorous model should.",
    note: "Move your cursor · it follows",
  },

  /* FOOTER */
  footer: {
    eyebrow: "( 08 · Contact )",
    headline: ["Let’s build", "something extraordinary."],
    line: "Open to Data Analyst & AI Engineer roles, Machine Learning opportunities, and technical collaborations.",
    email: "anaarafa2019@gmail.com",
    emailLabel: "Send an email",
    columns: [
      {
        title: "Navigation",
        items: [
          { label: "Hero", href: "#top" },
          { label: "Where Code Meets AI", href: "#work" },
          { label: "About Me", href: "#section-03" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Mind", href: "#think" },
          { label: "Certifications & MCIT", href: "#certifications" },
        ],
      },
      {
        title: "Socials",
        items: [
          { label: "LinkedIn", href: "https://linkedin.com/in/ahmed-gamal-arfa" },
          { label: "GitHub", href: "https://github.com/AhmdArFa" },
          { label: "Facebook", href: "https://www.facebook.com/ahmed.arafa.426817" },
          { label: "Instagram", href: "https://www.instagram.com/arafa8140/" },
          { label: "WhatsApp", href: "https://wa.me/201090646919" },
        ],
      },
    ],
    social: [
      { label: "LinkedIn", href: "https://linkedin.com/in/ahmed-gamal-arfa" },
      { label: "GitHub", href: "https://github.com/AhmdArFa" },
      { label: "Facebook", href: "https://www.facebook.com/ahmed.arafa.426817" },
      { label: "Instagram", href: "https://www.instagram.com/arafa8140/" },
    ],
    legal: "© 2026 Ahmed Gamal Arfa",
    note: "Data Analyst & AI Engineer · Validation Team (MCIT)",
    backToTop: "Back to top",
  },

  /* About Me chapter */
  about: {
    boxes: {
      who: { title: "Who I Am", sub: "Ahmed Gamal Arfa — Data & AI Engineer at MCIT." },
      what: { title: "What I Do", sub: "AI · Computer Vision · Power BI · FastAPI" },
      think: { title: "How I Think", sub: "Analyze · Model · Validate · Deploy · Impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Ahmed Gamal Arfa",
        text: "Data and AI professional with proven impact across enterprise Business Intelligence, computer vision validation, and scalable machine learning pipelines. Microsoft Certified Fabric Analytics Engineer & Power BI PL-300 Associate. Currently building automated OCR validation and secure FastAPI services at MCIT.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "From Raw Data to Autonomous Systems.",
        text: "Building end-to-end intelligent systems: from YOLOv8 & OpenCV computer vision pipelines to enterprise Microsoft Fabric lakehouses, star-schema Power BI dashboards, and secure FastAPI microservices.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Clean Architecture & Verifiable Truth",
        text: "Every dataset has a signal, and every model needs validation. I prioritize rigorous statistical evaluation, scalable code structure, and business value.",
      },
    },
  },
};
