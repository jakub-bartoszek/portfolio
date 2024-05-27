import { prefix } from "prefix";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnologiesLogo from "components/technologies-logo";

export default function Contact() {
 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col justify-center gap-16">
    <span className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
     Contact Me
    </span>
    <div className="flex flex-col gap-4 text-2xl">
     <p className="text-lg md:text-xl">
      I am always open to discussing web development work or partnership
      opportunities. Feel free to reach out to me through any of the following
      contact options:
     </p>
     <ul className="text-lg md:text-xl mt-4">
      <li className="flex items-center gap-4">
       <Phone className="h-6 w-6" />
       <span className="text-[#9B9BED]">+48 530 936 096</span>
      </li>
      <li className="flex items-center gap-4">
       <Mail />
       <Link
        className="text-[#9B9BED]"
        href="mailto:jakub.bartoszek.dev@gmail.com"
       >
        jakub.bartoszek.dev@gmail.com
       </Link>
      </li>
      <li className="flex items-center gap-4">
       <Image
        src={`${prefix}icons/linkedin.svg`}
        alt="Linkedin"
        width={24}
        height={24}
       />
       <Link
        className="text-[#9B9BED]"
        href="https://www.linkedin.com/in/jakub-bartoszek"
        target="_blank"
        rel="noopener noreferrer"
       >
        linkedin.com/in/jakub-bartoszek
       </Link>
      </li>
      <li className="flex items-center gap-4">
       <Image
        src={`${prefix}icons/github.svg`}
        alt="Github"
        width={24}
        height={24}
       />
       <Link
        className="text-[#9B9BED]"
        href="https://www.github.com/jakub-bartoszek"
        target="_blank"
        rel="noopener noreferrer"
       >
        linkedin.com/in/jakub-bartoszek
       </Link>
      </li>
     </ul>
     <p className="text-lg md:text-xl mt-4">
      Alternatively, you can fill out the form below to send me a direct
      message:
     </p>
     <form className="text-lg flex flex-col gap-4 mt-4">
      <input
       type="text"
       placeholder="Your Name"
       className="p-2 rounded border border-gray-300"
      />
      <input
       type="email"
       placeholder="Your Email"
       className="p-2 rounded border border-gray-300"
      />
      <textarea
       placeholder="Your Message"
       className="p-2 rounded border border-gray-300 min-h-12 h-32"
      />
      <button
       type="submit"
       className="p-4 rounded bg-[#6753da] text-white font-bold hover:bg-[#5136ed] transition-colors"
      >
       Send Message
      </button>
     </form>
    </div>
   </div>
   <div className="w-full flex items-center justify-center">
    <TechnologiesLogo />
   </div>
  </div>
 );
}
