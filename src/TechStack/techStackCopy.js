import {
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiAwsamplify,
  SiJest,
  SiTestinglibrary,
  SiFigma,
  SiStorybook,
} from "react-icons/si";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";

export const frontEnd = {
  title: "Frontend Focused",
  tagline:
    "Building clean, responsive, and accessible interfaces with modern JavaScript frameworks like React, Angular, and Vue.",
  description:
    "With 8 years of experience in front-end development, I specialize in crafting intuitive, scalable, and performant web interfaces. My expertise spans component-based architectures, state management, and design system integration across various frameworks.",
  expansion:
    "I’ve led the frontend implementation on complex applications using tools like TypeScript, Tailwind CSS, and Storybook, ensuring consistent UI/UX across responsive breakpoints. I’m equally comfortable optimizing performance and ensuring accessibility compliance.",
  icons: [FaReact, FaAngular, FaVuejs, SiTailwindcss, SiTypescript],
};

export const backEnd = {
  title: "Backend Development Focused",
  tagline: "Designing and building scalable APIs with Node.js and Express.",
  description:
    "I build backend systems focused on simplicity, performance, and scalability. Using Node.js and Express, combined with JavaScript and TypeScript, I develop RESTful APIs that connect frontend applications to data and services efficiently and securely.",
  icons: [SiNodedotjs, SiExpress, SiJavascript, SiTypescript],
};

export const dataBase = {
  title: "Databases & Persistence",
  tagline: "Managing and modeling data with both relational and NoSQL systems.",
  description:
    "I work with NoSQL databases like MongoDB and DynamoDB to structure and manage application data. I also have a strong understanding of relational database concepts, including writing SQL queries, designing table relationships, and modeling normalized data.",
  icons: [SiMongodb, SiMysql, SiPostgresql, SiAwsamplify],
};

export const testing = {
  title: "Testing & Tooling",
  tagline:
    "Delivering reliable software through automated testing and thoughtful developer tools.",
  description:
    "I specialize in writing thorough and effective tests to ensure software reliability. For unit testing, I use Jest, Mocha, and Chai to validate functionality at the smallest level. For end-to-end automation, I leverage Playwright and Selenium to simulate real user interactions and validate entire application flows.",
  expansion:
    "Beyond testing, I use Figma to design clean UI mockups and Storybook to document and organize frontend components. These tools help maintain a high level of consistency and efficiency across projects, creating better developer and user experiences.",
  icons: [SiJest, SiTestinglibrary, SiFigma, SiStorybook],
};
