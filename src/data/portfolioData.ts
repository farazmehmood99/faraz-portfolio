export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Mobile' | 'Web' | 'Full-Stack';
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl: string;
  isFeatured: boolean;
  metrics?: string;
  year?: string;
  isRepoPublished?: boolean;
  isDemoPublished?: boolean;
}

export interface Skill {
  name: string;
  category: 'Mobile' | 'Frontend' | 'Backend & Cloud' | 'Tools';
  level: string;
  proficiency: number; // 0 to 100
  iconName: string;
  color: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export const portfolioData = {
  personal: {
    name: 'Faraz Mehmood',
    title: 'Full Satck Software Engineer',
    roleTagline: 'Engineering Scalable Mobile Apps & Modern Web Experiences',
    statusBadge: 'Available for New Projects & Roles',
    location: 'Kohat, Pakistan',
    phone: '+92 333-9097637',
    email: 'farazmehmood003@gmail.com',
    experienceYears: '1.5+ Years',
    avatarUrl: '/images/faraz_avatar.jpg',
    resumeUrl: '/Faraz_Mehmood_Resume.pdf',
    bio: 'Software Engineer specializing in cross-platform mobile apps (Flutter, Dart, Provider, MVVM, SQLite) and modern full-stack web applications (React 18, Next.js 14, TypeScript, Tailwind CSS) with robust cloud backends (Firebase & Supabase).',
    aboutExtended: [
      'Graduated with a Bachelor of Science in Computer Science from Kohat University of Science & Technology (2020–2024), actively developing production mobile applications at LogicCraft Technologies using Flutter, Dart, and clean MVVM architecture.',
      'Expanding my full-stack capabilities through the Full Stack Development program at Arfa Karim Technology Incubator, Peshawar, while building scalable mobile apps backed by Firebase, Supabase, and SQLite.',
    ],
  },

  socials: {
    github: 'https://github.com/farazmehmood99',
    linkedin: 'https://linkedin.com/in/faraz-mehmood-808046360',
    whatsapp: 'https://wa.me/923339097637?text=Hi%20Faraz,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20collaborate.',
    twitter: 'https://twitter.com',
  },

  stats: [
    { label: 'Completed Projects', value: 8, suffix: '+' },
    { label: 'Months Experience', value: 14, suffix: '+' },
    { label: 'Tech Stack Tools', value: 15, suffix: '+' },
    { label: 'Code Quality Score', value: 99, suffix: '%' },
  ],

  services: [
    {
      id: 'mobile-dev',
      title: 'Flutter Mobile Engineering',
      description: 'Production-ready iOS and Android apps with high-performance Flutter UI, clean MVVM architecture, Provider state management, and offline SQLite caching.',
      technologies: ['Flutter', 'Dart', 'Provider', 'MVVM', 'SQLite', 'Play Store'],
      color: 'var(--primary)',
    },
    {
      id: 'backend-cloud',
      title: 'Cloud & Database Architecture',
      description: 'Real-time databases, authentication, and secure file storage using Firebase (Firestore & Auth) and Supabase Storage integration.',
      technologies: ['Firebase Firestore', 'Firebase Auth', 'Supabase Storage', 'SQLite', 'REST API (HTTP)'],
      color: 'var(--primary)',
    },
    {
      id: 'web-dev',
      title: 'Full-Stack Web Development',
      description: 'Modern, responsive web applications engineered with React 18, Next.js 14, Tailwind CSS, TypeScript, and clean API consumption.',
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'ES2023'],
      color: 'var(--primary)',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design for Mobile & Web',
      description: 'Intuitive user interface implementation, responsive layouts, smooth micro-interactions, and certified UI/UX design practices.',
      technologies: ['UI/UX Design', 'Figma to Flutter', 'Responsive Design', 'Material Design 3'],
      color: 'var(--primary)',
    },
  ],

  skills: [
    { name: 'Flutter', category: 'Mobile', level: 'Advanced', proficiency: 92, iconName: 'flutter', color: '#02569B' },
    { name: 'Dart', category: 'Mobile', level: 'Advanced', proficiency: 90, iconName: 'dart', color: '#0175C2' },
    { name: 'Provider & MVVM', category: 'Mobile', level: 'Advanced', proficiency: 88, iconName: 'layers', color: '#005fea' },
    { name: 'SQLite', category: 'Backend & Cloud', level: 'Intermediate', proficiency: 84, iconName: 'database', color: '#003B57' },
    { name: 'Firebase (Firestore/Auth)', category: 'Backend & Cloud', level: 'Advanced', proficiency: 88, iconName: 'firebase', color: '#FFCA28' },
    { name: 'Supabase Storage', category: 'Backend & Cloud', level: 'Intermediate', proficiency: 82, iconName: 'database', color: '#3ECF8E' },
    { name: 'REST API (HTTP)', category: 'Backend & Cloud', level: 'Advanced', proficiency: 86, iconName: 'api', color: '#0284C7' },
    { name: 'React 18 & Next.js 14', category: 'Frontend', level: 'Intermediate', proficiency: 80, iconName: 'react', color: '#61DAFB' },
    { name: 'TypeScript & JavaScript', category: 'Frontend', level: 'Intermediate', proficiency: 82, iconName: 'ts', color: '#3178C6' },
    { name: 'HTML5 & CSS3 / Tailwind', category: 'Frontend', level: 'Advanced', proficiency: 90, iconName: 'css', color: '#E34F26' },
    { name: 'C++ & OOP', category: 'Tools', level: 'Intermediate', proficiency: 80, iconName: 'code', color: '#00599C' },
    { name: 'Java', category: 'Tools', level: 'Intermediate', proficiency: 75, iconName: 'code', color: '#EA2D2E' },
    { name: 'VS Code', category: 'Tools', level: 'Advanced', proficiency: 95, iconName: 'vscode', color: '#007ACC' },
    { name: 'Android Studio', category: 'Tools', level: 'Advanced', proficiency: 92, iconName: 'androidstudio', color: '#3DDC84' },
    { name: 'Git & GitHub', category: 'Tools', level: 'Advanced', proficiency: 90, iconName: 'git', color: '#F05032' },
    { name: 'Postman', category: 'Tools', level: 'Intermediate', proficiency: 85, iconName: 'postman', color: '#FF6C37' },
  ] as Skill[],

  projects: [
    {
      id: 'tenant-link',
      title: 'Tenant Link Application',
      description: 'Modern property and tenant management mobile app built with Flutter. Integrates Firebase Firestore for live tenant records, Authentication for secure access, and Supabase Storage for rental lease agreements and document management.',
      category: 'Mobile',
      techStack: ['Flutter', 'Firebase Firestore', 'Firebase Auth', 'Supabase Storage'],
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99/Tenant_Links',
      isFeatured: true,
      metrics: 'Active Repo: Tenant_Links · 2026',
      year: '2026',
      isRepoPublished: true,
      isDemoPublished: false,
    },
    {
      id: 'rentmate',
      title: 'RentMate — Rental Management Suite',
      description: 'Smart rental management mobile application that empowers landlords and property owners to track tenants, monthly rent collections, and property contracts with an intuitive Flutter UI.',
      category: 'Mobile',
      techStack: ['Flutter', 'Dart', 'Provider', 'Firebase Firestore'],
      imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99/RentMate1',
      isFeatured: true,
      metrics: 'Active Repo: RentMate1 · 2025',
      year: '2025',
      isRepoPublished: true,
      isDemoPublished: false,
    },
    {
      id: 'faraz-portfolio',
      title: 'Faraz Portfolio — Modern Engineering Showcase',
      description: 'High-performance interactive developer portfolio engineered with React 18, Next.js 14 App Router, TypeScript, and modern modular CSS with dark glassmorphism and GSAP micro-animations.',
      category: 'Web',
      techStack: ['Next.js 14', 'React 18', 'TypeScript', 'GSAP', 'CSS Modules'],
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99/Faraz_Protfolio',
      isFeatured: true,
      metrics: 'Active Repo: Faraz_Protfolio · 2026',
      year: '2026',
      isRepoPublished: true,
      isDemoPublished: false,
    },
    {
      id: 'bidding-application',
      title: 'Bidding Application (User & Admin Panel)',
      description: 'Comprehensive real-time auction and bidding system featuring two dedicated interfaces: a bidder UI and an Admin panel. Built using Flutter with Firebase Firestore streams, Authentication, Supabase Storage, and Provider state management.',
      category: 'Mobile',
      techStack: ['Flutter', 'Provider', 'Firebase Firestore', 'Supabase Storage', 'Auth'],
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99',
      isFeatured: true,
      metrics: 'Dual Interfaces: User & Admin Panel',
      year: '2025',
      isRepoPublished: false,
      isDemoPublished: false,
    },
    {
      id: 'kovue-coffee',
      title: 'Kovue Coffee — Final Year Project',
      description: 'Flagship BS Computer Science Final Year Project: a full-scale mobile cafe ecosystem allowing users to browse nearby cafes, view menus, place orders, and track deliveries. Architected with four distinct user interfaces for Customer, Seller, Rider, and Admin.',
      category: 'Mobile',
      techStack: ['Flutter', 'Firebase', 'State Management', 'Geolocation Tracking'],
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99',
      isFeatured: true,
      metrics: '4 Dedicated Portals (Customer, Seller, Rider, Admin)',
      year: '2024',
      isRepoPublished: false,
      isDemoPublished: false,
    },
    {
      id: 'weather-application',
      title: 'Live Weather Application',
      description: 'Real-time meteorological monitoring mobile application built with Flutter and Dart, consuming external REST APIs over HTTP to display live weather updates, temperature forecasts, humidity readings, and dynamic atmospheric condition visuals.',
      category: 'Mobile',
      techStack: ['Flutter', 'Dart', 'REST API (HTTP)', 'JSON Serialization'],
      imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99',
      isFeatured: true,
      metrics: 'Real-time HTTP REST API Integration',
      year: '2025',
      isRepoPublished: false,
      isDemoPublished: false,
    },
    {
      id: 'todo-application',
      title: 'Cloud-Synced To-Do Application',
      description: 'High-productivity task management application with secure multi-user authentication, cloud synchronization via Firebase Firestore, Supabase integration, and persistent local storage.',
      category: 'Mobile',
      techStack: ['Flutter', 'Firebase Firestore', 'Authentication', 'Supabase'],
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=80',
      demoUrl: '',
      githubUrl: 'https://github.com/farazmehmood99',
      isFeatured: false,
      metrics: 'Cloud Firestore & Supabase Integration',
      year: '2025',
      isRepoPublished: false,
      isDemoPublished: false,
    },
  ] as Project[],

  experiences: [
    {
      period: 'July 2024 – Present',
      role: 'Flutter & Mobile Application Developer',
      company: 'LogicCraft Technologies',
      location: 'Pakistan',
      description: [
        'Developed and maintained high-performance mobile applications using Flutter and Dart.',
        'Applied MVVM architecture to ensure a clean, scalable code structure, utilizing Provider to manage application state effectively.',
        'Integrated Firebase and Supabase for secure, real-time data handling and storage.',
        'Implemented SQLite databases to provide robust offline functionality and local data persistence.',
        'Collaborated on custom UI implementation and performance optimization to enhance the overall user experience.',
      ],
      skills: ['Flutter', 'Dart', 'Provider', 'MVVM', 'Firebase', 'Supabase', 'SQLite'],
    },
  ] as Experience[],

  workflow: [
    {
      step: '01',
      title: 'Requirement & Architecture Design',
      desc: 'Defining application logic, MVVM clean structure, database schema, and state management flow.',
    },
    {
      step: '02',
      title: 'Pixel-Perfect UI/UX Implementation',
      desc: 'Developing high-performance Flutter user interfaces and responsive layouts adhering to certified UI/UX principles.',
    },
    {
      step: '03',
      title: 'Cloud & Database Integration',
      desc: 'Hooking up Firebase Firestore, Supabase Storage, offline SQLite persistence, and REST APIs.',
    },
    {
      step: '04',
      title: 'Optimization & Store Deployment',
      desc: 'Performance profiling, smoke testing, release builds, and production deployment.',
    },
  ],

  education: [
    {
      degree: 'B.S. Computer Science',
      institution: 'Kohat University of Science & Technology (KUST)',
      period: '2020 – 2024',
      status: 'Graduated',
      highlights: [
        'Final Year Project: Kovue Coffee with 4 dedicated mobile portals (Customer, Seller, Rider, Admin).',
        'Coursework: Object-Oriented Programming, Data Structures, Algorithms, Database Systems, Software Engineering.',
      ],
    },
    {
      degree: 'Full Stack Development (Ongoing)',
      institution: 'Arfa Karim Technology Incubator, Peshawar',
      period: '2026 – Present',
      status: 'Ongoing',
      highlights: [
        'Hands-on full-stack development mastering React 18, Next.js 14, Tailwind CSS, TypeScript, and modern backend systems.',
      ],
    },
    {
      degree: 'Higher Secondary School In Pre-Engineering',
      institution: 'Karwan Model College Kohat',
      period: '2017 – 2019',
      status: 'Completed',
      highlights: [
        'Core studies in Pre-Engineering, Mathematics, Physics, and analytical logic.',
      ],
    },
    {
      degree: 'Secondary School',
      institution: 'Working Folks Grammar School Kohat-1',
      period: '2015 – 2017',
      status: 'Completed',
      highlights: ['Matriculation in Science with distinguished academic record.'],
    },
  ] as Education[],

  certifications: [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      year: '2023',
    },
    {
      title: 'Cross-Platform Development with Flutter',
      issuer: 'KPSDP',
      year: '2025',
    },
    {
      title: 'UI/UX Design for Mobile and Web',
      issuer: 'KPSDP',
      year: '2025',
    },
  ] as Certification[],

  languages: [
    { name: 'Pashto', level: 'Native' },
    { name: 'Urdu', level: 'Proficient' },
    { name: 'English', level: 'Working' },
  ],
};

