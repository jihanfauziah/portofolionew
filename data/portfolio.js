export const portfolioData = {
  personal: {
    name: "Jihan Fauziah",
    shortName: "Jihan",
    monogram: "JF",
    profileImage: "/images/jihan-profile.jpg",
    role: "Junior Web Developer / Software Developer",
    education: "SMK Rekayasa Perangkat Lunak",
    yearRange: "portfolio 2024–2026",
    socialHandle: "@jihaanfauziah_",
    tagline: "an ordinary piece of work, done out of necessity and intention",
    startIdea: "the start, the idea was simple.",
    heroBio:
      "Saya seorang siswa SMK Rekayasa Perangkat Lunak yang tertarik pada pengembangan website modern menggunakan JavaScript, React, dan Next.js. Saya senang membangun website yang clean, responsive, dan memiliki pengalaman pengguna yang baik.",
    aboutBio:
      "Hi, I'm Jihan. I'm a Software Engineering student who enjoys building digital products and exploring modern web technologies. I focus on creating responsive, clean, and user-friendly interfaces while continuously improving my development skills.",
    highlights: [
      { label: "Focus Area", value: "Web Development & Frontend" },
      { label: "Specialty", value: "UI Implementation & Design Systems" },
      { label: "Current Focus", value: "JavaScript, React, and Next.js" },
      { label: "Background", value: "Software Engineering Student" },
    ],
    experience: [
      {
        role: "Web Development",
        period: "2024 – Present",
        description: "Membangun antarmuka web modern, interaktif, dan performan.",
      },
      {
        role: "UI Implementation",
        period: "2024 – Present",
        description: "Mengonversi wireframe & design Figma ke kode web clean & responsive.",
      },
      {
        role: "Software Engineering Student",
        period: "SMK PPLG / RPL",
        description: "Mempelajari algoritma pemrograman, database, dan arsitektur web.",
      },
    ],
  },

  skills: {
    categories: [
      {
        title: "Frontend Development",
        badge: "Client-Side",
        description: "Pengembangan antarmuka visual yang responsif, rapi, dan dinamis.",
        items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
        accent: "#E875AC",
      },
      {
        title: "Backend & Database",
        badge: "Server-Side",
        description: "Logika server, API, dan pengelolaan basis data relasional.",
        items: ["PHP", "Laravel", "MySQL"],
        accent: "#087A4B",
      },
      {
        title: "Tools & Workflow",
        badge: "Productivity",
        description: "Alat kolaborasi, version control, dan lingkungan pengembangan.",
        items: ["Git", "GitHub", "Figma", "VS Code"],
        accent: "#1A1A1A",
      },
    ],
  },

  projects: [
    {
      id: 1,
      name: "Muslim App",
      title: "Muslim App",
      category: "Mobile Application",
      accent: "#087A4B",
      description:
        "Aplikasi mobile Islami yang menyediakan fitur jadwal sholat akurat, Al-Qur'an digital, doa harian, dan petunjuk arah kiblat dengan antarmuka yang bersih dan mudah digunakan.",
      technologies: ["Flutter", "Dart", "REST API"],
      repository: "https://github.com/jihanfauziah/Muslim-App",
      repositoryUrl: "https://github.com/jihanfauziah/Muslim-App",
      demoUrl: null,
      image: "/images/Project-1.jpeg",
    },
    {
      id: 2,
      name: "Daebak.Tix",
      title: "Daebak.Tix",
      category: "Web Application",
      accent: "#E875AC",
      description:
        "Platform web pemesanan tiket konser dan fanmeeting K-Pop resmi dengan sistem digital ber-QR Code untuk transaksi yang aman, terpercaya, dan bebas calo.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "CSS"],
      repository: "https://github.com/jihanfauziah/Daebak.Tix",
      repositoryUrl: "https://github.com/jihanfauziah/Daebak.Tix",
      demoUrl: null,
      image: "/images/Project-2.jpeg",
    },
    {
      id: 3,
      name: "Lightstick Web",
      title: "Lightstick Web",
      category: "Frontend Showcase",
      accent: "#1A1A1A",
      description:
        "Website landing page interaktif merchandise Official CORTIS Lightstick yang menampilkan spesifikasi produk, galeri visual elegan, dan alur pre-order yang responsif.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      repository: "https://github.com/jihanfauziah/lightstick-web",
      repositoryUrl: "https://github.com/jihanfauziah/lightstick-web",
      demoUrl: null,
      image: "/images/Project-3.jpeg",
    },
  ],

  contact: {
    heading: "Let's Work Together",
    subheading:
      "Terbuka untuk diskusi proyek web, kolaborasi tim, atau peluang magang / freelance.",
    email: "jihanfauziah1414@gmail.com",
    emailLink: "mailto:jihanfauziah1414@gmail.com",
    github: "https://github.com/jihanfauziah",
    githubDisplay: "github.com/jihanfauziah",
    instagram: "https://www.instagram.com/jihaanfauziah_",
    instagramDisplay: "@jihaanfauziah_",
  },

  navigation: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  footer: {
    copyright: "© 2026 Jihan Fauziah. All rights reserved.",
  },
};
