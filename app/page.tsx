export default function Home() {
 return (
  <div className="h-full w-full flex flex-col max-w-[1400px]">
   <div className="w-full flex justify-center">
    <div className="w-full flex justify-between py-4 px-6">
     <div className="font-bold text-2xl">Jakub Bartoszek</div>
     <div className="flex gap-12 items-center">
      <a className="font-semibold">Home</a>
      <a>About</a>
      <a>Skills</a>
      <a>Projects</a>
      <a>Contact</a>
     </div>
    </div>
   </div>
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
    <div className="w-full h-full"></div>
   </div>
  </div>
 );
}
