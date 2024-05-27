import TechnologiesLogo from "components/technologies-logo";

export default function Home() {
 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col justify-center">
    <span className="font-bold text-5xl md:text-7xl">
     Hello!
     <br />I am <span className="text-[#9B9BED]">Jakub</span>
     <br />
     <span className="text-[#5136ed]">Web Developer</span>
    </span>
   </div>
   <div className="w-full h-full flex items-center justify-center">
    <TechnologiesLogo />
   </div>
  </div>
 );
}
