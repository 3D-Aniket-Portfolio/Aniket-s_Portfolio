const config = {
  title: "Aniket Totawar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aniket Totawar, a Full-Stack Developer skilled in Java, Spring Boot, React.js, and MySQL. Passionate about building scalable, high-performance applications with hands-on experience in RESTful APIs, JWT-based authentication, and AWS cloud deployment.",
    short:
      "Portfolio of Aniket Totawar, a Full-Stack Developer specializing in Java, Spring Boot, React.js, and AWS.",
  },
  keywords: [
    "Aniket Totawar",
    "portfolio",
    "full-stack developer",
    "Java developer",
    "Spring Boot",
    "React.js",
    "AWS",
    "MySQL",
    "web development",
    "REST APIs",
    "JWT authentication",
    "CDAC",
  ],
  author: "Aniket Totawar",
  email: "aniketstotawar01@gmail.com",
  site: "https://aniket-s-portfolio-fm6e.vercel.app",

  // for github stars button
  githubUsername: "AniketTotawarKC-DAC",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/anikettotawar",
    linkedin: "https://www.linkedin.com/in/aniket-totawar-15b555352",
    instagram: "https://www.instagram.com/anikettotawar",
    facebook: "https://www.facebook.com/anikettotawar",
    github: "https://github.com/AniketTotawarKC-DAC",
  },
};
export { config };
