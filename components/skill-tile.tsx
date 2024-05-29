import { GitGraph, GitPullRequest, TriangleAlert } from "lucide-react";
import { BiGroup } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { DiScrum } from "react-icons/di";
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
import { GiHook } from "react-icons/gi";
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
 SiAdobedreamweaver
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

interface SkillIcons {
 [key: string]: React.ReactNode;
}

const skillIcons: SkillIcons = {
 "React.js": <FaReact className="w-full h-full" />,
 "Next.js": <SiNextdotjs className="w-full h-full" />,
 "React Hooks": <GiHook className="w-full h-full" />,
 "JavaScript ESNext": <FaJsSquare className="w-full h-full" />,
 TypeScript: <SiTypescript className="w-full h-full" />,
 "React Router": <SiReactrouter className="w-full h-full" />,
 "Styled components": <FaCss3Alt className="w-full h-full" />,
 "Tailwind CSS": <SiTailwindcss className="w-full h-full" />,
 SASS: <FaCss3Alt className="w-full h-full" />,
 "CSS BEM convention": <FaCss3Alt className="w-full h-full" />,
 "CSS Grid": <FaCss3Alt className="w-full h-full" />,
 "CSS Flexbox": <FaCss3Alt className="w-full h-full" />,

 "Redux-Saga": <SiRedux className="w-full h-full" />,
 "Redux (Toolkit)": <SiRedux className="w-full h-full" />,
 Signal: <FaSignal className="w-full h-full" />,

 "Express.js": <SiExpress className="w-full h-full" />,
 "Node.js": <FaNodeJs className="w-full h-full" />,

 "Working with API (fetch, axios)": <FaJsSquare className="w-full h-full" />,
 "Promises, Async/Await": <FaJsSquare className="w-full h-full" />,
 "Error handling": <TriangleAlert className="w-full h-full" />,
 "Database management": <BsDatabase className="w-full h-full" />,
 MySQL: <TbBrandMysql className="w-full h-full" />,
 "Tanstack Query": <FaReact className="w-full h-full" />,
 Immutability: <FaNodeJs className="w-full h-full" />,

 Cypress: <SiCypress className="w-full h-full" />,
 Jest: <SiJest className="w-full h-full" />,
 "Debounce/Throttle": <SiLodash className="w-full h-full" />,

 Git: <GitGraph className="w-full h-full" />,
 "GitHub Pull Requests & Review": <GitPullRequest className="w-full h-full" />,
 Trello: <FaTrello className="w-full h-full" />,
 Scrum: <DiScrum className="w-full h-full" />,
 NPM: <SiNpm className="w-full h-full" />,

 "Adobe Photoshop": <SiAdobephotoshop className="w-full h-full" />,
 "Adobe Illustrator": <SiAdobeillustrator className="w-full h-full" />,
 "Adobe InDesign": <SiAdobedreamweaver className="w-full h-full" />,
 
 Teamwork: <BiGroup className="w-full h-full" />,
 Markdown: <FaMarkdown className="w-full h-full" />,
 "Semantic & accessible HTML": <FaHtml5 className="w-full h-full" />,
 "Responsive Web Design": <FaCss3Alt className="w-full h-full" />,
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
