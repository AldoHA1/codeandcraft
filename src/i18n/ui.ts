export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Code&Craft | Estudio y Laboratorio Digital',
    'meta.description':
      'Code&Craft — Tu laboratorio digital para landing pages, desarrollo web, campañas e innovación de producto.',

    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.toggleThemeLabel': 'Cambiar Tema',
    'nav.toggleMenu': 'Abrir menú',
    'nav.switchLanguageAria': 'Cambiar a inglés',
    'nav.switchLanguageLabel': 'Cambiar Idioma',

    'hero.badge': 'Abiertos a Proyectos',
    'hero.titleHtml':
      'Dos mundos que nunca debieron estar <span class="text-primary dark:text-primary-bright">separados</span>, <span class="text-tertiary dark:text-tertiary-bright">historia</span> y <span class="italic text-secondary dark:text-secondary-bright">código</span>.',
    'hero.subtitle':
      'Un estudio web boutique liderado por expertos en narrativa estratégica e ingeniería Full-stack real. Sin procesos lentos. Sin resultados promedio. Sin humo.',
    'hero.ctaPrimary': 'Inicia tu Proyecto',
    'hero.ctaSecondary': 'Ver Servicios',
    'hero.accent': '3 proyectos activos',

    'services.eyebrow': 'Servicios',
    'services.titleHtml':
      'Precisión, <span class="italic text-secondary dark:text-secondary-bright">por diseño</span>.',
    'services.landing.title': 'Landing Page',
    'services.landing.desc':
      'La solución precisa para necesidades enfocadas que no requieren un sitio completo. Estructuras ágiles con narrativa estratégica, diseñadas para alcanzar un único objetivo.',
    'services.websites.title': 'Sitios Web',
    'services.websites.desc':
      'Ecosistemas digitales robustos construidos desde cero — sin límites de plantillas. Desarrollo Full-stack de alto rendimiento combinado con una estructura que proyecta el alma de tu marca en cada interacción.',
    'services.maintenance.title': 'Mantenimiento',
    'services.maintenance.desc':
      'Protegemos la salud técnica y la velocidad de tu plataforma mediante optimización proactiva. No solo corregimos bugs — acompañamos la evolución de tu sitio al máximo nivel profesional.',
    'services.learnMore': 'Saber más',
    'services.consultancyHtml':
      'No solo ejecutamos servicios fijos. Te acompañamos con consultoría experta para identificar lo que tu proyecto realmente necesita — adaptando nuestra capacidad técnica y creativa para que cada decisión <span class="font-bold text-on-surface dark:text-white">libere todo el potencial de tu visión</span>.',

    'about.eyebrow': 'Quiénes Somos',
    'about.titleHtml':
      'Donde el storytelling <span class="italic text-secondary dark:text-secondary-bright">se une</span> a la ingeniería inquebrantable.',
    'about.p1':
      'Un estudio boutique de creación web liderado por expertos en narrativa estratégica y desarrollo técnico. Unimos talento creativo de primer nivel con ingeniería Full-stack real — sin fábrica industrial, solo un Estudio de alta precisión.',
    'about.p2':
      'La mayoría de agencias son ruido, las shops publicitarias aportan creatividad que no pueden construir, y las grandes casas de desarrollo tienen el músculo pero les falta el alma. Somos el punto exacto donde el storytelling se encuentra con una arquitectura técnica sólida como una roca. Si no cuenta una historia, es solo ruido.',
    'about.stats.years': '14 años',
    'about.stats.yearsLabel': 'Experiencia Combinada',
    'about.stats.projects': '1',
    'about.stats.projectsLabel': 'Proyecto a la Vez',
    'about.stats.middlemen': '0',
    'about.stats.middlemenLabel': 'Intermediarios',

    'why.eyebrow': 'Por Qué Nosotros',
    'why.titleHtml':
      '14 años de experiencia combinada, <span class="italic text-tertiary dark:text-tertiary-bright">vertidos en un solo proyecto,</span> el tuyo.',
    'why.subtitle': 'Código puro diseñado para crecer y perdurar.',
    'why.boutique.title': 'Boutique',
    'why.boutique.desc':
      'Sin cuentas gestionadas en masa. Un proyecto a la vez, para que cada línea de código y cada palabra tenga un propósito real de negocio.',
    'why.experts.title': 'Expertos al Mando',
    'why.experts.desc':
      'Sin intermediarios. Trabaja directamente con los especialistas que lideran la estrategia creativa y la ejecución técnica de tu plataforma.',
    'why.craft.title': 'Músculo Técnico, Alma Creativa',
    'why.craft.desc':
      'Construimos productos digitales que no solo funcionan impecablemente — viven, respiran y resuenan con quien los visita.',

    'team.eyebrow': 'Las Personas',
    'team.title': 'Conoce a las Mentes detrás de Code&Craft',
    'team.subtitle':
      'Un equipo pequeño y enfocado donde la narrativa estratégica y la ingeniería Full-stack hablan el mismo idioma.',
    'team.aldo.role': 'Fundador y Lead Developer',
    'team.aldo.bio':
      'Arquitecto Full-stack con pasión por el código limpio y los sistemas escalables.',
    'team.pamela.role': 'Fundadora y Directora Creativa',
    'team.pamela.bio':
      'Transforma narrativas de marca en experiencias visuales que resuenan y convierten.',

    'contact.titleHtml':
      'Listos para ser tu <span class="text-primary dark:text-primary-bright">equipo de confianza</span>.',
    'contact.subtitle':
      '¿Buscas guía y ejecución experta que fusione lo mejor de la creatividad y la ingeniería? Hablemos.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.namePlaceholder': 'Juan Pérez',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.emailPlaceholder': 'juan@ejemplo.com',
    'contact.form.message': 'Mensaje del Proyecto',
    'contact.form.messagePlaceholder': 'Describe tu visión...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensaje enviado. Te contactaremos pronto.',
    'contact.form.error': 'No se pudo enviar. Intenta de nuevo o escríbenos a info@codeandcraftcr.com.',

    'footer.copyright': '© 2026 Code&Craft. Creado con precisión.',
  },
  en: {
    'meta.title': 'Code&Craft | Digital Studio & Lab',
    'meta.description':
      'Code&Craft — Your digital lab for landing pages, web development, campaigns, and product innovation.',

    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.toggleTheme': 'Toggle theme',
    'nav.toggleThemeLabel': 'Toggle Theme',
    'nav.toggleMenu': 'Open menu',
    'nav.switchLanguageAria': 'Switch to Spanish',
    'nav.switchLanguageLabel': 'Switch Language',

    'hero.badge': 'Open for Projects',
    'hero.titleHtml':
      'Two worlds that should never have been <span class="text-primary dark:text-primary-bright">apart</span>, <span class="text-tertiary dark:text-tertiary-bright">story</span> and <span class="italic text-secondary dark:text-secondary-bright">code</span>.',
    'hero.subtitle':
      'A boutique web studio led by experts in strategic storytelling and real Full-stack engineering. No slow processes. No average results. No smoke and mirrors.',
    'hero.ctaPrimary': 'Start Your Project',
    'hero.ctaSecondary': 'View Services',
    'hero.accent': '3 active projects',

    'services.eyebrow': 'Services',
    'services.titleHtml':
      'Precision, <span class="italic text-secondary dark:text-secondary-bright">by design</span>.',
    'services.landing.title': 'Landing Page',
    'services.landing.desc':
      'The precise solution for focused needs that do not require a full site. Agile structures with strategic storytelling, designed to achieve a single objective.',
    'services.websites.title': 'Websites',
    'services.websites.desc':
      'Robust digital ecosystems built from scratch — with no template limits. High-performance Full-stack development combined with a structure that projects your brand’s soul in every interaction.',
    'services.maintenance.title': 'Maintenance',
    'services.maintenance.desc':
      'We protect your platform’s technical health and speed through proactive optimization. We don’t just fix bugs — we guide your site’s evolution at the highest professional level.',
    'services.learnMore': 'Learn more',
    'services.consultancyHtml':
      'We don’t just deliver fixed services. We guide you with expert consulting to identify what your project truly needs — adapting our technical and creative capability so that every decision <span class="font-bold text-on-surface dark:text-white">unlocks the full potential of your vision</span>.',

    'about.eyebrow': 'Who We Are',
    'about.titleHtml':
      'Where storytelling <span class="italic text-secondary dark:text-secondary-bright">meets</span> unshakable engineering.',
    'about.p1':
      'A boutique web studio led by experts in strategic storytelling and technical development. We pair top-tier creative talent with real Full-stack engineering — no industrial factory, just a high-precision Studio.',
    'about.p2':
      'Most agencies are noise, ad shops bring creativity they can’t build, and large dev houses have the muscle but lack the soul. We are the exact point where storytelling meets rock-solid technical architecture. If it doesn’t tell a story, it’s just noise.',
    'about.stats.years': '14 years',
    'about.stats.yearsLabel': 'Combined Experience',
    'about.stats.projects': '1',
    'about.stats.projectsLabel': 'Project at a Time',
    'about.stats.middlemen': '0',
    'about.stats.middlemenLabel': 'Middlemen',

    'why.eyebrow': 'Why Us',
    'why.titleHtml':
      '14 years of combined experience, <span class="italic text-tertiary dark:text-tertiary-bright">poured into a single project,</span> yours.',
    'why.subtitle': 'Pure code engineered to grow and endure.',
    'why.boutique.title': 'Boutique',
    'why.boutique.desc':
      'No mass-managed accounts. One project at a time, so every line of code and every word carries a real business purpose.',
    'why.experts.title': 'Experts in Charge',
    'why.experts.desc':
      'No middlemen. Work directly with the specialists leading the creative strategy and technical execution of your platform.',
    'why.craft.title': 'Technical Muscle, Creative Soul',
    'why.craft.desc':
      'We build digital products that don’t just run flawlessly — they live, breathe, and resonate with everyone who visits.',

    'team.eyebrow': 'The People',
    'team.title': 'Meet the Minds Behind Code&Craft',
    'team.subtitle':
      'A small, focused team where strategic storytelling and Full-stack engineering speak the same language.',
    'team.aldo.role': 'Founder & Lead Developer',
    'team.aldo.bio':
      'Full-stack architect with a passion for clean code and scalable systems.',
    'team.pamela.role': 'Founder & Creative Director',
    'team.pamela.bio':
      'Transforms brand narratives into visual experiences that resonate and convert.',

    'contact.titleHtml':
      'Ready to be your <span class="text-primary dark:text-primary-bright">trusted team</span>.',
    'contact.subtitle':
      'Looking for expert guidance and execution that fuses the best of creativity and engineering? Let’s talk.',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'John Doe',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'john@example.com',
    'contact.form.message': 'Project Message',
    'contact.form.messagePlaceholder': 'Describe your vision...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent. We will be in touch soon.',
    'contact.form.error': 'Could not send. Try again or email us at info@codeandcraftcr.com.',

    'footer.copyright': '© 2026 Code&Craft. Crafted with precision.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
