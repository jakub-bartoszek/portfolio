import TechnologiesLogo from "components/technologies-logo";
import Link from "next/link";

export default function About() {
 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col justify-center gap-16">
    <span className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
     About me
    </span>
    <div className="flex flex-col gap-4 text-2xl">
     <p className="text-lg md:text-xl">
      I am
      <span className="text-[#9B9BED]">&nbsp;Jakub Bartoszek</span>, a young web
      developer with a focus on frontend development, although I consider myself
      a full-stack developer. I have been using JavaScript for 3 years now,
      specializing in React. Recently, I have been programming in Next.js. I am
      consistent with programming and continuously strive to improve my skills
      by learning new technologies and libraries. I have completed several
      interesting projects, which you can see on my
      <Link
       className="text-[#9B9BED]"
       href="https://github.com/jakub-bartoszek"
      >
       &nbsp;GitHub&nbsp;
      </Link>
      or in
      <Link
       className="text-[#9B9BED]"
       href="/projects"
      >
       &nbsp;Projects section
      </Link>
      .
     </p>
     <p className="text-lg md:text-xl mt-4">
      I finished IT technician school and hold the
      <span className="text-[#c3a0ff]">&nbsp;INF.02&nbsp;</span>
      and
      <span className="text-[#c3a0ff]">&nbsp;INF.03&nbsp;</span>
      qualifications. I fell in love with programming since my first lesson with
      JavaScript and have been dedicated to it ever since. I also completed the
      <Link
       className="text-[#9B9BED]"
       href={"https://youcode.pl/"}
      >
       &nbsp;YouCode&nbsp;
      </Link>
      course and participated in a 4-week group project to deliver a web browser
      application with my team. While I often work alone, I am very comfortable
      working with others, enjoying the sharing of ideas and learning new things
      from my peers.
     </p>
     <p className="text-lg md:text-xl mt-4">
      When I am not programming, I spend time playing guitar, going to the gym,
      making music, creating graphic designs, and working on my car. I also
      enjoy spending time outdoors and love going for walks.
     </p>
    </div>
   </div>
   <div className="w-full flex items-center justify-center">
    <TechnologiesLogo />
   </div>
  </div>
 );
}
