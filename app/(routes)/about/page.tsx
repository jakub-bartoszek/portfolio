import Link from "next/link";
import TechnologiesLogo from "components/technologies-logo";

export default function About() {
 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col gap-8">
    <h1 className="font-bold text-5xl md:text-7xl text-[#9b9bed]">About me</h1>
    <div className="flex flex-col gap-4 text-lg md:text-xl">
     <p>
      I am
      <span className="text-[#9B9BED]">&nbsp;Jakub Bartoszek</span>, a
      full-stack web developer with extensive experience in React and Next.js,
      and a strong focus on TypeScript. Recently, I’ve also expanded my skillset
      to include Angular. Over the years, I’ve developed a deep passion for web
      development, continually refining my skills and exploring new
      technologies. I recently worked on a project for MediaBliss, where I took
      full responsibility for both the frontend and backend of their website. In
      addition to development, I also contributed to graphic design for the
      brand. You can find some of my work on my
      <Link
       className="text-[#9B9BED]"
       href="https://github.com/jakub-bartoszek"
      >
       &nbsp;GitHub&nbsp;
      </Link>
      or in the
      <Link
       className="text-[#9B9BED]"
       href="/projects"
      >
       &nbsp;Projects section
      </Link>
      .
     </p>
     <p>
      I graduated from IT technician school, holding the
      <span className="text-[#c3a0ff]">&nbsp;INF.02&nbsp;</span>
      and
      <span className="text-[#c3a0ff]">&nbsp;INF.03&nbsp;</span>
      qualifications. My passion for programming began with my first lesson in
      JavaScript, and I’ve been fully dedicated to it ever since. Additionally,
      I completed the
      <Link
       className="text-[#9B9BED]"
       href={"https://youcode.pl/"}
      >
       &nbsp;YouCode&nbsp;
      </Link>
      course, where I collaborated with a team on a 4-week web browser
      application project. While I often work independently, I enjoy
      collaborating with others and value learning from my peers.
     </p>
     <p>
      When I am not programming, I spend time playing guitar, going to the gym,
      making music, reading books, creating graphic designs, and working on my
      car. I also enjoy spending time outdoors and love going for walks.
     </p>
    </div>
   </div>

   <div className="w-full flex items-center justify-center">
    <TechnologiesLogo />
   </div>
  </div>
 );
}
