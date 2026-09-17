// ============================================================================
// All portfolio content lives here. Edit this file to update the site.
// Anywhere you see "REPLACE_ME" is a placeholder you should swap out.
// ============================================================================
import profilePhoto from "../images/shahmeer.png";
import zaheen from "../images/za.png";
import fg from "../images/fg.jpeg";
export const personal = {
  name: "Shah Mansoor",
  title: "Frontend Engineer",
  location: "Islamabad, Pakistan",
  tagline:
    "I build fast, accessible, and beautifully animated web interfaces — currently shipping product at Fits Digital.",
  intro:
    "I'm a frontend engineer who recently moved to Islamabad and turned a one-month internship at Fits Digital into a full-time role. I care about clean component architecture, motion that actually helps usability, and pixel-perfect UI — right now I'm building Zaheen.com.",
  // Replace with your own image, e.g. import photo from "../assets/images/profile.jpg"
  photo: profilePhoto,
  resumeUrl: "REPLACE_ME_RESUME_PDF_PATH",
  email: "shahmansoor0316@gmail.com",
  phone: "03209683539",
  socials: {
    github: "https://github.com/shahmansoor1111",
    linkedin: "https://www.linkedin.com/in/shah-mansoor-a9292625b/",
  },
};

export const navLinks = [
  { id: "about", label: "About", file: "about.tsx" },
  { id: "skills", label: "Skills", file: "skills.json" },
  { id: "experience", label: "Experience", file: "experience.log" },
  { id: "education", label: "Education", file: "education.md" },
  { id: "projects", label: "Projects", file: "projects.tsx" },
  { id: "certifications", label: "Certifications", file: "certs.yaml" },
  { id: "achievements", label: "Achievements", file: "achievements.js" },
  { id: "contact", label: "Contact", file: "contact.tsx" },
];

export const aboutStats = [
  { label: "Years learning to code", value: "2+" },
  { label: "Full-time role landed from", value: "1 mo intern" },
  { label: "Current project", value: "Zaheen.com" },
  { label: "Based in", value: "Islamabad" },
];

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Sass", level: 90 },
  ],
  frameworks: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 75 },
    { name: "Redux / Zustand", level: 70 },
    { name: "Tailwind CSS", level: 88 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Figma to Code", level: 88 },
    { name: "REST / API Integration", level: 80 },
    { name: "Webpack / Vite", level: 72 },
  ],
};

export const experience = [
  {
    id: "exp-1",
    role: "Frontend Engineer",
    company: "Fits Digital",
    location: "Islamabad, Pakistan",
    period: "Present",
    status: "current",
    points: [
      "Promoted to a full-time Frontend Engineer role after a 1-month internship, based on delivery and code quality.",
      "Currently building Zaheen.com, working across component architecture, UI implementation, and performance.",
      "Collaborate directly with designers and backend engineers to ship production-ready features.",
      "Own responsive, accessible UI implementation from Figma handoff to deployment.",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Engineering Intern",
    company: "Fits Digital",
    location: "Islamabad, Pakistan",
    period: "1 Month",
    status: "past",
    points: [
      "Completed an intensive 1-month internship focused on real production frontend work.",
      "Picked up the team's codebase, tooling, and workflow quickly enough to earn a full-time offer.",
      "Contributed UI components and bug fixes under senior engineer review.",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "BS Computer Science",
    institute: "FG Degree College for men Peshawar Cantt",
    period: "2022-2026",
    description:
      "Bachelor's degree covering programming fundamentals, data structures & algorithms, databases, and software engineering practices.",
  },
  {
    id: "edu-2",
    degree: "Web & App Development Course",
    institute: "Saylani Mass IT Training (SMIT)",
    period: "1 Year",
    description:
      "A one-year, industry-focused training program covering modern web development — from fundamentals to building real-world, production-style projects.",
  },
];

export const projects = [
  {
    id: "proj-1",
    name: "Zaheen",
    description:
      "Ongoing production project at Fits Digital. Building and maintaining frontend features with a focus on clean UI, performance, and responsiveness.",
    tags: ["React", "JavaScript", "REST API", "Responsive UI"],
    image: zaheen,
    liveUrl: "https://z.zaheen.com.pk/",
    status: "In Progress",
  },
  {
    id: "proj-2",
    name: "FG Degree College For Men Peshawar",
    description: "Developed a modern, responsive website for FG Degree College For Men Peshawar to improve its online presence. The platform provides easy access to academic information, admissions details, and college announcements.",
    tags: ["React", "Tailwind CSS"],
    image: fg,
    liveUrl: "https://my-college-project-1is9.vercel.app/",
    status: "Completed",
  },
  {
    id: "proj-3",
    name: "REPLACE_ME_PROJECT_NAME",
    description: "REPLACE_ME_PROJECT_DESCRIPTION",
    tags: ["JavaScript", "HTML/CSS"],
    image: "REPLACE_ME_PROJECT_IMAGE_2",
    liveUrl: "REPLACE_ME_PROJECT_LIVE_LINK_3",
    status: "Completed",
  },
];

export const certifications = [
  {
    id: "cert-1",
    name: "Web & App Development",
    issuer: "Saylani Mass IT Training (SMIT)",
    date: "1 Year Program",
    
  },
  {
    id: "cert-2",
    name: "BS Computer Science",
    issuer: "University Of Peshawar",
    date: "2022-2026",
   
  },
  {
    id: "cert-3",
    name: "I joined Fits Digital in 2026 as a Frontend Developer, working with React.js on the Zaheen project.",
    issuer: "Fits Digital Islamabad",
    date: "I joined Fits Digital in 2026, and I’m still working here",
    
  },
];

export const services = [
  {
    id: "srv-1",
    title: "Frontend Development",
    description: "Building fast, responsive, production-ready web interfaces with React.",
  },
  {
    id: "srv-2",
    title: "UI Implementation",
    description: "Turning Figma designs into pixel-accurate, accessible code.",
  },
  {
    id: "srv-3",
    title: "Performance & Polish",
    description: "Micro-interactions, animation, and performance tuning that make products feel premium.",
  },
];

export const achievements = [
  {
    id: "ach-1",
    title: "Internship → Full-time Offer",
    description:
      "Converted a 1-month internship at Fits Digital into a full-time Frontend Engineer position.",
  },
  {
    id: "ach-2",
    title: "BS Computer Science Graduate",
    description: "Completed a full Bachelor's degree in Computer Science.",
  },
  {
    id: "ach-3",
    title: "SMIT Graduate",
    description: "Completed a rigorous 1-year, industry-focused development program at SMIT.",
  },
  {
    id: "ach-4",
    title: "Relocated & Ramped Up",
    description: "Moved to Islamabad and quickly integrated into a professional engineering team.",
  },
];
