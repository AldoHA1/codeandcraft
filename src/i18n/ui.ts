export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Code&Craft | Estudio Digital y Laboratorio',
    'meta.description':
      'Code&Craft — Tu laboratorio digital para landing pages, desarrollo web, campañas e innovación de producto.',

    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.toggleMenu': 'Abrir menú',
    'nav.toggleThemeLabel': 'Cambiar tema',
    'nav.switchLanguage': 'EN',
    'nav.switchLanguageAria': 'Cambiar a inglés',

    'hero.badge': 'Aceptando proyectos',
    'hero.titleHtml':
      'Aportando precisión <span class="text-primary dark:text-primary-bright">técnica</span> a <span class="text-tertiary dark:text-tertiary-bright">almas creativas</span>.',
    'hero.subtitle':
      'Code&Craft es donde el código se encuentra con el oficio. Diseñamos experiencias digitales con el cuidado meticuloso de un laboratorio y la visión de un estudio.',
    'hero.ctaPrimary': 'Inicia tu proyecto',
    'hero.ctaSecondary': 'Ver servicios',
    'hero.accent': '3 proyectos en vivo',

    'services.title': 'Servicios de Precisión',
    'services.landing.title': 'Landing Pages',
    'services.landing.desc':
      'Estructuras optimizadas para conversión, diseñadas para máximo impacto y claridad visual.',
    'services.webdev.title': 'Desarrollo Web',
    'services.webdev.desc':
      'Arquitectura de alto rendimiento con código limpio y testing de grado laboratorio.',
    'services.scripts.title': 'Guiones Publicitarios',
    'services.scripts.desc':
      'Contenido narrativo diseñado para provocar la respuesta correcta en tu audiencia.',
    'services.campaigns.title': 'Campañas',
    'services.campaigns.desc':
      'Estrategias de crecimiento multicanal calculadas para escalar tu presencia digital.',
    'services.product.title': 'Desarrollo de Producto',
    'services.product.desc':
      'Del MVP al ecosistema digital completo: construimos productos que perduran.',

    'about.philosophy.eyebrow': 'La Filosofía',
    'about.philosophy.titleHtml':
      'Un estudio donde la lógica <span class="italic text-secondary dark:text-secondary-bright">se encuentra</span> con la creatividad.',
    'about.philosophy.p1':
      'En Code&Craft no solo diseñamos: planteamos hipótesis, probamos y refinamos. Nuestro enfoque de laboratorio asegura que cada píxel tenga un propósito y cada línea de código una función.',
    'about.philosophy.p2':
      'Creemos en el "Sastre Digital": la idea de que el software debe ajustarse a tu negocio como un traje a la medida. Sin plantillas genéricas, sin soluciones de catálogo. Solo crecimiento diseñado con precisión.',
    'about.stats.projects': 'Proyectos',
    'about.stats.satisfaction': 'Satisfacción',
    'about.stats.experience': 'Experiencia',
    'about.team.eyebrow': 'El Equipo',
    'about.team.title': 'Las Mentes detrás de Code&Craft',
    'about.team.subtitle':
      'Un equipo pequeño y enfocado que combina rigor de ingeniería con intuición creativa.',
    'about.team.aldo.role': 'Fundador y Desarrollador Principal',
    'about.team.aldo.bio':
      'Arquitecto full-stack con pasión por el código limpio y los sistemas escalables.',
    'about.team.pamela.role': 'Fundadora y Directora Creativa',
    'about.team.pamela.bio':
      'Transforma narrativas de marca en experiencias visuales que resuenan y convierten.',

    'contact.titleHtml':
      'Inicia un <span class="text-primary dark:text-primary-bright">Proyecto</span>',
    'contact.subtitle':
      'Envíanos tu brief y construyamos juntos algo extraordinario.',
    'contact.form.name': 'Nombre completo',
    'contact.form.namePlaceholder': 'Juan Pérez',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPlaceholder': 'juan@ejemplo.com',
    'contact.form.message': 'Mensaje del proyecto',
    'contact.form.messagePlaceholder': 'Describe tu visión...',
    'contact.form.submit': 'Enviar mensaje',

    'footer.copyright': '© 2026 Code&Craft. Diseñado con precisión.',
  },
  en: {
    'meta.title': 'Code&Craft | Digital Studio & Lab',
    'meta.description':
      'Code&Craft - Your digital lab for landing pages, web development, campaigns, and product innovation.',

    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.toggleTheme': 'Toggle theme',
    'nav.toggleMenu': 'Toggle menu',
    'nav.toggleThemeLabel': 'Toggle Theme',
    'nav.switchLanguage': 'ES',
    'nav.switchLanguageAria': 'Switch to Spanish',

    'hero.badge': 'Open for Projects',
    'hero.titleHtml':
      'Bringing <span class="text-primary dark:text-primary-bright">technical</span> precision to <span class="text-tertiary dark:text-tertiary-bright">creative</span> souls.',
    'hero.subtitle':
      'Code&Craft is where code meets craft. We tailor digital experiences with the meticulous care of a laboratory and the vision of a studio.',
    'hero.ctaPrimary': 'Start Your Project',
    'hero.ctaSecondary': 'View Services',
    'hero.accent': '3 projects live',

    'services.title': 'Precision Services',
    'services.landing.title': 'Landing Pages',
    'services.landing.desc':
      'Conversion-optimized structures crafted for maximum impact and visual clarity.',
    'services.webdev.title': 'Web Development',
    'services.webdev.desc':
      'High-performance architecture built with clean code and laboratory-grade testing.',
    'services.scripts.title': 'Publicity Scripts',
    'services.scripts.desc':
      'Narrative-driven content engineered to trigger the right responses in your audience.',
    'services.campaigns.title': 'Campaigns',
    'services.campaigns.desc':
      'Multi-channel growth strategies calculated to scale your digital presence.',
    'services.product.title': 'Product Development',
    'services.product.desc':
      'From MVP to full-scale digital ecosystem, we build products that endure.',

    'about.philosophy.eyebrow': 'The Philosophy',
    'about.philosophy.titleHtml':
      'A studio where logic <span class="italic text-secondary dark:text-secondary-bright">meets</span> creativity.',
    'about.philosophy.p1':
      "At Code&Craft, we don't just design; we hypothesize, test, and refine. Our laboratory-like approach ensures that every pixel has a purpose and every line of code serves a function.",
    'about.philosophy.p2':
      'We believe in "Digital Tailoring" — the idea that software should fit your business like a bespoke suit. No off-the-shelf templates, no generic solutions. Only precision-engineered growth.',
    'about.stats.projects': 'Projects',
    'about.stats.satisfaction': 'Satisfaction',
    'about.stats.experience': 'Experience',
    'about.team.eyebrow': 'The People',
    'about.team.title': 'Meet the Minds Behind Code&Craft',
    'about.team.subtitle':
      'A small, focused team that blends engineering rigor with creative intuition.',
    'about.team.aldo.role': 'Founder & Lead Developer',
    'about.team.aldo.bio':
      'Full-stack architect with a passion for clean code and scalable systems.',
    'about.team.pamela.role': 'Founder & Creative Director',
    'about.team.pamela.bio':
      'Transforms brand narratives into visual experiences that resonate and convert.',

    'contact.titleHtml':
      'Start a <span class="text-primary dark:text-primary-bright">Project</span>',
    'contact.subtitle':
      "Send us your brief, and let's engineer something remarkable together.",
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'John Doe',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'john@example.com',
    'contact.form.message': 'Project Message',
    'contact.form.messagePlaceholder': 'Describe your vision...',
    'contact.form.submit': 'Send Message',

    'footer.copyright': '© 2026 Code&Craft. Crafted with precision.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
