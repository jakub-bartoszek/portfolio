export default function Home() {
 return (
  <div className="w-full h-full flex">
   <div className="w-full h-full flex flex-col">
    <div className="h-full flex items-center justify-center">
     <span className="font-bold text-6xl">
      Hi!
      <br />
      I&apos;am <span className="text-[#9B9BED]">Jakub</span> <br />
      <span className="text-[#5136ed]">Web Developer</span>
     </span>
    </div>
    <div className="p-8 flex justify-evenly">
     <span>Github</span>
     <span>LinkedIn</span>
     <span>Facebook</span>
    </div>
   </div>
   <div className="w-full h-full flex items-center justify-center">
    Right side
   </div>
  </div>
 );
}
