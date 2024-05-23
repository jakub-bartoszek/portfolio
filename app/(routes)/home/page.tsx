import Image from "next/image";

export default function Home() {
 return (
  <div className="w-full h-full flex flex-col">
   <div className="w-full h-full flex flex-col md:flex-row">
    <div className="w-full flex flex-col">
     <div className="h-full flex items-center justify-start">
      <span className="font-bold text-5xl md:text-7xl">
       Hello!
       <br />I am <span className="text-[#9B9BED]">Jakub</span>
       <br />
       <span className="text-[#5136ed]">Web Developer</span>
      </span>
     </div>
    </div>
    <div className="w-full h-full flex items-center justify-center">
     <div className="relative w-full h-full">
      <Image
       alt="technologies"
       src="/images/technologies-logo.png"
       layout="fill"
       objectFit="contain"
      />
     </div>
    </div>
   </div>
   <div className="flex justify-start gap-16 mt-4 md:mt-8">
    <span>Github</span>
    <span>LinkedIn</span>
    <span>Facebook</span>
   </div>
  </div>
 );
}
