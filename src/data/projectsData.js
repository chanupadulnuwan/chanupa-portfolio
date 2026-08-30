// Detailed Projects Data Source with imports, first-person stories, and status badges

// Image Imports from Images/Projects/
import uiMockup from '../../UI mocup.png';

// Bathi's World
import bhathi1 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002010.png';
import bhathi2 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002041.png';
import bhathi3 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002102.png';
import bhathi4 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002221.png';
import bhathi5 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002238.png';
import bhathi6 from '../../Images/Projects/Bathi\'s World/Screenshot 2026-08-31 002250.png';

// Nestle Insight
import nestle1 from '../../Images/Projects/Nestle Insight/1782147910184.jpeg';
import nestle2 from '../../Images/Projects/Nestle Insight/1782147907980.jpeg';
import nestle3 from '../../Images/Projects/Nestle Insight/1782147907881.jpeg';
import nestle4 from '../../Images/Projects/Nestle Insight/1782147910236.jpeg';
import nestle5 from '../../Images/Projects/Nestle Insight/1782147912047.jpeg';

// PayPatch Web APP
import paypatchWeb1 from '../../Images/Projects/PayPatch Web APP/Screenshot 2026-08-31 002853.png';
import paypatchWeb2 from '../../Images/Projects/PayPatch Web APP/Screenshot 2026-08-31 002913.png';
import paypatchWeb3 from '../../Images/Projects/PayPatch Web APP/Screenshot 2026-08-31 002927.png';
import paypatchWeb4 from '../../Images/Projects/PayPatch Web APP/Screenshot 2026-08-31 002938.png';

// PayPatch mobile app
import paypatchMob1 from '../../Images/Projects/PayPatch mobile app/Screenshot 2026-08-31 002648.png';
import paypatchMob2 from '../../Images/Projects/PayPatch mobile app/Screenshot 2026-08-31 002704.png';
import paypatchMob3 from '../../Images/Projects/PayPatch mobile app/Screenshot 2026-08-31 002722.png';

// Phonix Hub
import phoenix1 from '../../Images/Projects/Phonix Hub/Screenshot 2026-08-31 003108.png';
import phoenix2 from '../../Images/Projects/Phonix Hub/Screenshot 2026-08-31 003121.png';
import phoenix3 from '../../Images/Projects/Phonix Hub/Screenshot 2026-08-31 003135.png';
import phoenix4 from '../../Images/Projects/Phonix Hub/Screenshot 2026-08-31 003148.png';
import phoenix5 from '../../Images/Projects/Phonix Hub/Screenshot 2026-08-31 003200.png';

// Sōmē AI ECO System
import some1 from '../../Images/Projects/Sōmē AI ECO System _ Designing Project/Screenshot 2026-08-30 234307.png';
import some2 from '../../Images/Projects/Sōmē AI ECO System _ Designing Project/Screenshot 2026-08-30 234324.png';
import some3 from '../../Images/Projects/Sōmē AI ECO System _ Designing Project/Screenshot 2026-08-30 234344.png';
import some4 from '../../Images/Projects/Sōmē AI ECO System _ Designing Project/Screenshot 2026-08-30 234400.png';
import some5 from '../../Images/Projects/Sōmē AI ECO System _ Designing Project/Screenshot 2026-08-30 234437.png';

// Inventory Management System Updated Image
import invImage from '../../Images/Projects/Inventory Management System/images.jpeg';

// Fort Library Digitalizing Project Images
import fortLib1 from '../../Images/Projects/Fort Library Digitalizing Project/1782062883064.jpeg';
import fortLib2 from '../../Images/Projects/Fort Library Digitalizing Project/1782062884895.jpeg';
import fortLib3 from '../../Images/Projects/Fort Library Digitalizing Project/1782062886153.jpeg';
import fortLib4 from '../../Images/Projects/Fort Library Digitalizing Project/1782062887776.jpeg';

// Wizardly Math Images
import wizardMath1 from '../../Images/Projects/Wizardly Math/Screenshot 2026-08-31 010605.png';
import wizardMath2 from '../../Images/Projects/Wizardly Math/Screenshot 2026-08-31 010629.png';
import wizardMath3 from '../../Images/Projects/Wizardly Math/Screenshot 2026-08-31 010641.png';

export const fullProjectsData = [
  {
    id: "nestle-insight",
    title: "Nestlé Insight – Demand Signal & Territory Implementation Platform",
    subtitle: "Enterprise Mobile & Web Demand-Signal Solution for FMCG Retail Chains",
    category: "Full Stack",
    status: "Completed",
    isTopProject: true,
    year: "2026",
    role: "Project Lead, Developer, Business Analyst & QA Support",
    teamMembers: ["Kanish Ashwinth Gangatharan", "Amien Sainudeen", "Savinu Guruge", "Dr. Tharanga Peiris (Academic Supervisor)"],
    coverImage: nestle1,
    gallery: [nestle1, nestle2, nestle3, nestle4, nestle5],
    tech: ["Flutter", "React", "NestJS", "PostgreSQL", "MySQL", "Figma", "Jira", "GitHub"],
    liveLink: "https://nestle-insight-admin-web.vercel.app/",
    githubLinks: [
      { label: "Admin Web Repo", url: "https://github.com/chanupadulnuwan/NestleInsight-AdminWeb" },
      { label: "Backend NestJS Repo", url: "https://github.com/chanupadulnuwan/NestleInsight-backend" },
      { label: "Mobile App Flutter Repo", url: "https://github.com/chanupadulnuwan/NestleInsight-mobile" }
    ],
    shortDesc: "Demand-signal mobile & web platform built for Nestlé retail operations. Converts shop-level sales and inventory data into forecasting-ready demand signals.",
    story: [
      "As part of our Level 5 Commercial Computing module at Staffordshire University (APIIT Sri Lanka), our team developed Nestlé Insight — a comprehensive mobile and web-based demand-signal platform engineered to bring visibility into traditional retail supply chains.",
      "In traditional retail environments, many small shop owners operate without POS systems, making it difficult for FMCG brands to capture real sales and demand signals accurately. This gap leads to poor inventory forecasting, stockouts, and inefficient distribution.",
      "To address this challenge, we developed a dual-app architecture: a cross-platform Flutter Mobile App for sales representatives, shop owners, and distributors to manage orders, route planning, deliveries, outlet registration, and field data collection; and a React Web Portal for admins, warehouse managers, and demand planners.",
      "A key highlight of our platform was the Demand Forecast Export Generator, which transforms operational shop-level data into forecasting-ready datasets (sales, inventory, orders, master data)—helping turn raw retail activity into actionable commercial demand signals.",
      "Serving as the Project Coordinator and Developer, I managed Agile sprints in Jira, contributed to full-stack architecture in NestJS and React, designed database schemas, and guided team presentations. This project fundamentally strengthened my software engineering, leadership, and commercial business analysis skills."
    ],
    features: [
      "Field Data & Outlet Management: Shop registration, route planning, and real-time order processing.",
      "Demand Forecast Export Generator: Transforms raw shop operational data into structured demand forecasting files.",
      "Multi-Role Access Control: Custom interfaces tailored for Admins, Planners, Field Reps, and Distributors.",
      "Dual Mobile & Web Architecture: Cross-platform Flutter app connected to NestJS microservices and MySQL/PostgreSQL databases."
    ]
  },
  {
    id: "bhathis-world",
    title: "Bhathi’s World – Content Creator Web Platform",
    subtitle: "Magical-Themed Creator Portfolio Website for Bhathiya Maneth",
    category: "Web App",
    status: "Ongoing",
    isTopProject: true,
    year: "2026",
    role: "UI/UX Designer & Web Developer",
    teamMembers: ["Chanupa Dulnuwan (Solo Developer for Bhathiya Maneth)"],
    coverImage: bhathi1,
    gallery: [bhathi1, bhathi2, bhathi3, bhathi4, bhathi5, bhathi6],
    tech: ["React.js", "JavaScript", "HTML5 & CSS3", "Figma", "Vercel"],
    githubLinks: [{ label: "GitHub Repository", url: "https://github.com/chanupadulnuwan/-bhathis-world" }],
    liveLink: "https://www.bhathisworld.com/",
    shortDesc: "Custom portfolio web platform designed and built for social media content creator Bhathiya Maneth, inspired by a magical aesthetic.",
    story: [
      "In 2026, I was commissioned to design and build Bhathi’s World — an official portfolio website for social media content creator Bhathiya Maneth.",
      "To match his personal brand and video style, I crafted a UI design in Figma centered around a dark, magical atmosphere—incorporating glowing elements, dark glass cards, and immersive typography.",
      "Built with React.js and deployed on Vercel, the site showcases his media content, brand collaborations, personal story, and contact channels with high performance across all screen sizes.",
      "This project is currently ongoing as we continually add new interactive video galleries and audience engagement features."
    ],
    features: [
      "Magical Theme UI: Unique dark aesthetic designed in Figma tailored to the creator's vibe.",
      "React Component Architecture: Fast, single-page navigation with smooth transitions.",
      "Media & Project Showcase: Dedicated sections for YouTube/Instagram video highlights and brand deals.",
      "Custom Domain Deployment: Hosted live on Vercel at bhathisworld.com."
    ]
  },
  {
    id: "paypatch-mobile",
    title: "PayPatch – Cross-Platform Mobile Application",
    subtitle: "Flutter Mobile App for On-the-Go Expense Tracking & Bill Splitting",
    category: "Mobile App",
    status: "Completed",
    isTopProject: true,
    year: "2026",
    role: "Mobile App Developer & UI Designer",
    teamMembers: ["Chanupa Dulnuwan (Solo Developer)"],
    coverImage: paypatchMob1,
    gallery: [paypatchMob1, paypatchMob2, paypatchMob3],
    tech: ["Flutter", "Dart", "Firebase", "State Management", "REST API", "UI/UX"],
    githubLinks: [{ label: "GitHub Flutter Repo", url: "https://github.com/chanupadulnuwan/paypatch-flutter" }],
    shortDesc: "Mobile expense tracking app built in Flutter with real-time balance calculations, group splitting, and push notifications.",
    story: [
      "To complement the PayPatch web platform, I developed the PayPatch Mobile App using Flutter and Dart, giving users instant access to group financial tracking right from their smartphones.",
      "The mobile app emphasizes quick entry and clean visual cues. Users can snap receipts, select group members, view live individual balances, and mark debts as settled with a single tap.",
      "I focused on offline-first state management, smooth screen transitions, and lightweight API calls to ensure responsive performance across both Android and iOS devices.",
      "This project honed my expertise in cross-platform mobile UI engineering, state management patterns, and building production-ready mobile apps."
    ],
    features: [
      "Cross-Platform Native Speed: Built with Flutter for seamless Android & iOS deployment.",
      "Instant Receipt Logging: Quickly record expenses on the move with member tagging.",
      "Real-Time Sync: Synchronization with cloud backend services.",
      "Clean Dark/Light UI: Modern mobile interface designed for readability and speed."
    ]
  },
  {
    id: "fort-library-digitalization",
    title: "Fort Library Digitalization Project – Galle Fort Library",
    subtitle: "Preserving Sri Lanka’s Oldest Public Library Through Digital Cataloging",
    category: "Full Stack",
    status: "Ongoing",
    isTopProject: false,
    year: "2026",
    role: "Permanent Project Member, System Data Engineer & Digitizer",
    teamMembers: ["Gagana Tharupathi (Inviting Collaborator)", "Galle Fort Library Staff & Club Members", "University of Ruhuna Student Volunteers"],
    coverImage: fortLib1,
    gallery: [fortLib1, fortLib2, fortLib3, fortLib4],
    tech: ["Digital Cataloging Systems", "Database Management", "Data Structuring", "Historical Preservation", "Software Tools"],
    shortDesc: "Historic digitalization project for Galle Fort Library—Sri Lanka's oldest public library. Digitized over 4,000 rare historical books to date.",
    story: [
      "Proud and honored to contribute to the digitalization project of the Galle Fort Library, widely recognized as Sri Lanka’s oldest public library.",
      "Located inside the historic UNESCO World Heritage Galle Fort, this library holds a priceless collection of rare historical books and manuscripts. Being part of this initiative is deeply meaningful because it is not just about data entry — it is about preserving knowledge, history, and cultural heritage for future generations through technology.",
      "The initiative began through the librarian, staff, and library club members who reached out to the University of Ruhuna for technical support. After joining as a volunteer student contributor in July 2026 (invited by my friend Gagana Tharupathi), I was appointed as a permanent project member.",
      "To date, our team has successfully digitized and cataloged over 4,000 rare books, with approximately 2,000 remaining. I am immensely grateful to be part of preserving our nation's heritage through technology."
    ],
    features: [
      "Digital Archival System: Structuring metadata, ISBNs, authors, and conditions for historical rare books.",
      "Over 4,000 Books Cataloged: Active ongoing digitalization progress toward complete 6,000+ volume preservation.",
      "Institutional Collaboration: Joint project between Galle Fort Library and University of Ruhuna volunteers.",
      "Permanent Project Appointment: Hired as a permanent project member to maintain database integrity."
    ]
  },
  {
    id: "wizardly-math",
    title: "Wizardly Math – Educational Mobile Application",
    subtitle: "Native Android Math Game Designed for Children's Educational Learning",
    category: "Mobile App",
    status: "Completed",
    isTopProject: false,
    year: "2024",
    role: "Android Developer & UI Designer",
    teamMembers: ["Chanupa Dulnuwan (Solo Developer)"],
    coverImage: wizardMath1,
    gallery: [wizardMath1, wizardMath2, wizardMath3],
    tech: ["Android Studio", "Java", "Android SDK", "Mobile UI Design", "Game Logic"],
    shortDesc: "Educational Android mobile math game created in 2024 using Java and Android Studio, designed to help kids learn math through play.",
    story: [
      "Wizardly Math is an educational mobile application I designed and developed back in 2024 during my early mobile development studies at Horizon Campus.",
      "Built natively using Android Studio, Java, and Android SDK, the application provides an interactive, fun gaming environment for children to practice basic arithmetic, numbers, and math puzzles.",
      "I crafted colorful UI components, custom game logic loops, score tracking, and immediate visual feedback to make math learning engaging and accessible for kids.",
      "This project was a foundational step in my mobile application development journey, helping me master Java programming, activity lifecycles, and native Android UI layouts."
    ],
    features: [
      "Native Java & Android SDK: Engineered natively in Android Studio for smooth performance.",
      "Kid-Friendly UI Design: Bright, interactive visual themes tailored for young learners.",
      "Interactive Arithmetic Puzzles: Dynamic math question generators with instant score feedback.",
      "Offline Playability: Works seamlessly offline without requiring an internet connection."
    ]
  },
  {
    id: "some-ai-ecosystem",
    title: "Sōmē AI ECO System – Designathon 2026 Runner Up",
    subtitle: "Emotionally Intelligent & Context-Aware Digital Life Companion",
    category: "UI/UX Design",
    status: "Completed",
    isTopProject: false,
    year: "2026",
    role: "Lead UI/UX Designer & Prototyper",
    teamMembers: ["Sihas Senevirathne (Team Leader)", "Yelani Samarathunga (Voice & Product Dubbing)"],
    coverImage: some1,
    gallery: [some1, some2, some3, some4, some5],
    tech: ["Figma", "UI/UX Design", "Emotional Prototyping", "iOS Design System", "SF Pro Rounded"],
    figmaLink: "https://www.figma.com/design/kHDTmbYBveTgbq99zpUHAy/APIIT-Designathon---05-Targaryen?node-id=2008-771&p=f&t=ITyewTr2bfXvzYF2-0",
    videoIframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7464584910456983552?compact=1" height="400" width="100%" frameborder="0" allowfullscreen="" title="Sōmē AI Showcase"></iframe>`,
    shortDesc: "Award-winning UI/UX prototype created during Altrium Designathon 2026 (Runners Up), introducing a calm, context-aware AI companion interface.",
    story: [
      "After securing 2nd Place (Runners-Up) at Designathon 2026—organized by APIIT Sri Lanka and Altrium—I wanted to present a deeper look into the design process behind Sōmē, from initial Figma wireframes to the final interactive prototype.",
      "Our competition domain focused on AI-powered digital life ecosystems. Today, users experience severe cognitive overload because study, work, entertainment, finance, and personal routines are fragmented across dozens of noisy apps.",
      "To solve this distraction epidemic, our team conceptualized Sōmē — an emotionally intelligent ecosystem that adapts based on user mood, environment, workload, and time of day. Instead of demanding attention through pushy notifications, Sōmē gently adjusts layout, ambient colors, and interaction density to help users stay calm, focused, and balanced.",
      "We adopted an iOS-inspired minimal interface featuring SF Pro Rounded typography, soft glassmorphism, dynamic color system, and subtle micro-animations. Working alongside team leader Sihas Senevirathne, we shaped Sōmē into a meaningful vision for the future of human-centered AI interfaces."
    ],
    features: [
      "Emotion-Adaptive Color System: Dynamic visual interface that adjusts hue and contrast according to user mood.",
      "Unified Life Dashboard: Seamlessly weaves study, work, health, and entertainment without context switching.",
      "Calm Interaction Design: Eliminates notification noise in favor of subtle ambient indicators.",
      "iOS SF Pro Rounded Aesthetic: High-fidelity prototype crafted in Figma with precise micro-interactions."
    ]
  },
  {
    id: "paypatch-web",
    title: "PayPatch – Expenses Sharing Web Platform",
    subtitle: "Full-Stack Laravel Web Application for Shared Expense Management",
    category: "Web App",
    status: "Completed",
    isTopProject: false,
    year: "2026",
    role: "Full Stack Developer",
    teamMembers: ["Chanupa Dulnuwan (Solo Developer)"],
    coverImage: paypatchWeb1,
    gallery: [paypatchWeb1, paypatchWeb2, paypatchWeb3, paypatchWeb4],
    tech: ["Laravel (PHP)", "MySQL", "REST APIs", "JavaScript", "HTML5 & CSS3", "Bootstrap/Tailwind"],
    githubLinks: [{ label: "GitHub Laravel Repo", url: "https://github.com/chanupadulnuwan/paypatch-laravel" }],
    liveLink: "https://sea-turtle-app-4spaa.ondigitalocean.app/",
    shortDesc: "Web application engineered with Laravel allowing roommates, friends, and families to track shared expenses, calculate balances, and split bills.",
    story: [
      "Managing shared household or group trip expenses often leads to confusion and awkward payment tracking. I engineered PayPatch Web as a comprehensive web solution to make group financial management effortless.",
      "Built with Laravel (PHP) and MySQL, the application allows users to form groups, add itemized expenses, assign custom split ratios, calculate net owe/owed balances, and generate clear settlement reports.",
      "I designed the relational database architecture to handle complex split logic and transactions cleanly, while crafting a modern web dashboard with intuitive navigation.",
      "Developing PayPatch Web provided deep practical experience in MVC application structure, database normalization, relational queries, session management, and cloud deployment on DigitalOcean."
    ],
    features: [
      "Group Expense Management: Create custom groups for roommates, trips, or events.",
      "Smart Split Calculations: Equal, percentage, or itemized expense splitting.",
      "Balance Settlement Engine: Instant calculation of who owes whom to minimize transactions.",
      "Hosted Deployment: Live backend and frontend deployed on DigitalOcean App Platform."
    ]
  },
  {
    id: "inventory-management-system",
    title: "Desktop Inventory Management System",
    subtitle: "C# WinForms & .NET 8 Enterprise Desktop Application",
    category: "Desktop App",
    status: "Completed",
    isTopProject: false,
    year: "2024",
    role: "Desktop Software Engineer & Database Architect",
    teamMembers: ["Gayantha Akash", "Hemsadi Perera", "Amien Sainudeen"],
    coverImage: invImage,
    gallery: [invImage, uiMockup, nestleExtra1],
    tech: ["C#", ".NET 8", "WinForms", "MySQL", "OOP Architecture", "MVC Pattern"],
    githubLinks: [{ label: "GitHub C# Repo", url: "https://github.com/chanupadulnuwan/inventory_management_system" }],
    videoIframe: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7463624105397805056?compact=1" height="400" width="100%" frameborder="0" allowfullscreen="" title="Inventory System Showcase"></iframe>`,
    shortDesc: "First-year university capstone desktop application built with C# WinForms, .NET 8, and MySQL automating business inventory workflows.",
    story: [
      "Looking back at one of the first major software engineering projects I completed during my 1st year at Staffordshire University (APIIT) with teammates Gayantha Akash, Hemsadi Perera, and Amien Sainudeen.",
      "C# and Object-Oriented Programming (OOP) principles were completely new to us at the time. What began as a basic academic CRUD project evolved into the core foundation where we learned real software development.",
      "We built a desktop application using C# WinForms, .NET 8, and MySQL. We structured the solution using an MVC-inspired pattern separating Views, Models, and Controllers to maintain clean code separation.",
      "Features included user role authentication, product and supplier tracking, purchase order processing, sales analytics dashboards, and parameterized SQL queries for database security. It remains a memorable milestone in my developer journey!"
    ],
    features: [
      "Role-Based Access Control: Secure login for Admins, Stock Managers, and Cashiers.",
      "Inventory & Purchase Tracking: Stock level alerts, supplier management, and order logs.",
      "Real-Time Data Views: DataGridView integration for quick searching, sorting, and reporting.",
      "Parameterized MySQL Queries: Secure SQL operations preventing SQL injection vulnerabilities."
    ]
  },
  {
    id: "phoenix-hub",
    title: "Phoenix Hub – Game Store Web App",
    subtitle: "Interactive Game Catalog & Storefront Built with Vanilla JavaScript",
    category: "Web App",
    status: "Completed",
    isTopProject: false,
    year: "2024",
    role: "Frontend Developer",
    teamMembers: ["Chanupa Dulnuwan (Solo Developer)"],
    coverImage: phoenix1,
    gallery: [phoenix1, phoenix2, phoenix3, phoenix4, phoenix5],
    tech: ["HTML5", "CSS3", "JavaScript (Vanilla ES6)", "GitHub Pages"],
    githubLinks: [{ label: "GitHub Repository", url: "https://github.com/chanupadulnuwan/phoenixhub" }],
    liveLink: "https://chanupadulnuwan.github.io/phoenixhub/",
    shortDesc: "Interactive gaming store web application built using HTML5, CSS3, and JavaScript, featuring game catalog filtering and cart mechanics.",
    story: [
      "Phoenix Hub was one of my earliest frontend projects as a Computer Science student. I wanted to design a sleek, dark-themed digital game store interface.",
      "Built with HTML5, CSS3, and Vanilla JavaScript, the project features dynamic game catalog filtering, cart management, search functionality, and interactive game details.",
      "This project gave me strong foundational mastery over pure JavaScript DOM manipulation, CSS grid/flexbox layouts, responsive design principles, and publishing via GitHub Pages."
    ],
    features: [
      "Dynamic Game Catalog: Filter games by genre, popularity, and search queries.",
      "Interactive Cart System: Add items, update quantities, and calculate total price in real time.",
      "Pure Vanilla Web Tech: Built without external frameworks to master HTML, CSS, and JS fundamentals.",
      "GitHub Pages Deployment: Deployed live and accessible online."
    ]
  }
];
