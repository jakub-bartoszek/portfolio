import { SkillTile } from "components/skill-tile";
import { GiSkills } from "react-icons/gi";
import { skills } from "skills";

export default function Skills() {
 return (
  <div className="flex flex-col h-full items-center justify-center gap-8">
   <h1 className="font-bold text-5xl md:text-7xl text-[#9b9bed]">My skills</h1>
   <div className="w-24 h-24 text-[#5136ed]/50">
    <GiSkills className="h-24 w-24" />
   </div>
   <div className="flex flex-col w-full gap-16">
    {skills.map((section, index) => (
     <div
      key={index}
      className="w-full flex flex-col gap-4 items-center"
     >
      <h2 className="font-bold text-3xl md:text-4xl text-[#9b9bed]">
       {section.section}
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
       {section.skills.map((skill, skillIndex) => (
        <SkillTile
         key={skillIndex}
         skill={skill}
        />
       ))}
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
