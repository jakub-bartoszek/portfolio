import { GiBrain, GiHook } from "react-icons/gi";
import { BiGroup } from "react-icons/bi";
import { DiCreativecommons, DiScrum } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { TbBrandMysql } from "react-icons/tb";
import { CiGrid41, CiGrid42 } from "react-icons/ci";
import { GitGraph, GitPullRequest, TriangleAlert } from "lucide-react";
import { BsDatabase, BsFiletypeScss, BsHourglassSplit } from "react-icons/bs";
import {
 FaReact,
 FaNodeJs,
 FaJsSquare,
 FaCss3Alt,
 FaHtml5,
 FaSignal,
 FaMarkdown,
 FaTrello
} from "react-icons/fa";
import {
 SiNextdotjs,
 SiTypescript,
 SiRedux,
 SiTailwindcss,
 SiNpm,
 SiLodash,
 SiReactrouter,
 SiExpress,
 SiCypress,
 SiJest,
 SiAdobephotoshop,
 SiAdobeillustrator,
 SiAdobeindesign,
 SiStyledcomponents,
 SiBem,
 SiReduxsaga,
 SiAngular
} from "react-icons/si";

interface SkillIcons {
 [key: string]: React.ReactNode;
}

const skillIcons: SkillIcons = {
 // Frontend Technologies
 "React.js": <FaReact className="w-full h-full" />,
 "Next.js": <SiNextdotjs className="w-full h-full" />,
 Angular: <SiAngular className="w-full h-full" />,
 "React Hooks": <GiHook className="w-full h-full" />,
 "JavaScript ESNext": <FaJsSquare className="w-full h-full" />,
 TypeScript: <SiTypescript className="w-full h-full" />,
 "React Router": <SiReactrouter className="w-full h-full" />,
 "Styled components": <SiStyledcomponents className="w-full h-full" />,
 "Tailwind CSS": <SiTailwindcss className="w-full h-full" />,
 SASS: <BsFiletypeScss className="w-full h-full" />,
 "CSS BEM convention": <SiBem className="w-full h-full" />,
 "CSS Grid": <CiGrid41 className="w-full h-full" />,
 "CSS Flexbox": <CiGrid42 className="w-full h-full" />,
 "Debounce/Throttle": <SiLodash className="w-full h-full" />,

 // State Management
 Redux: <SiRedux className="w-full h-full" />,
 Saga: <SiReduxsaga className="w-full h-full" />,
 Signal: <FaSignal className="w-full h-full" />,

 // Backend Technologies
 "Express.js": <SiExpress className="w-full h-full" />,
 "Node.js": <FaNodeJs className="w-full h-full" />,

 // Data Management
 "Working with APIs (fetch, axios)": <AiFillApi className="w-full h-full" />,
 "Promises, Async/Await": <BsHourglassSplit className="w-full h-full" />,
 "Error handling": <TriangleAlert className="w-full h-full" />,
 "Database management": <BsDatabase className="w-full h-full" />,
 MySQL: <TbBrandMysql className="w-full h-full" />,
 "Tanstack Query": <FaReact className="w-full h-full" />,
 Immutability: <SiLodash className="w-full h-full" />,

 // Testing & Quality Assurance
 Cypress: <SiCypress className="w-full h-full" />,
 Jest: <SiJest className="w-full h-full" />,

 // Version Control & Project Management
 Git: <GitGraph className="w-full h-full" />,
 "GitHub Pull Requests & Review": <GitPullRequest className="w-full h-full" />,
 Trello: <FaTrello className="w-full h-full" />,
 Scrum: <DiScrum className="w-full h-full" />,
 NPM: <SiNpm className="w-full h-full" />,
 Markdown: <FaMarkdown className="w-full h-full" />,

 // Design Tools
 "Adobe Photoshop": <SiAdobephotoshop className="w-full h-full" />,
 "Adobe Illustrator": <SiAdobeillustrator className="w-full h-full" />,
 "Adobe InDesign": <SiAdobeindesign className="w-full h-full" />,

 // Soft Skills
 Teamwork: <BiGroup className="w-full h-full" />,
 Independence: <BiGroup className="w-full h-full" />,
 Creativity: <GiBrain className="w-full h-full" />,
 "Semantic & accessible HTML": <FaHtml5 className="w-full h-full" />,
 "Responsive Web Design": <FaCss3Alt className="w-full h-full" />
};

export const SkillTile = ({ skill }: { skill: string }) => {
 return (
  <div className="p-4 bg-[#5136ed]/10 hover:bg-[#5136ed]/20 rounded flex flex-col gap-2 items-center transition">
   <div className="text-[#5136ed] h-10 w-10 flex justify-center items-center">
    {skillIcons[skill]}
   </div>
   <h2 className="font-bold text-2xl">{skill}</h2>
  </div>
 );
};
