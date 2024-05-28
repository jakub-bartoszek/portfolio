import { prefix } from "prefix";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnologiesLogo from "components/technologies-logo";
import ContactForm from "components/contact-form";

export default function Contact() {
 const serviceKey = process.env.EMAIL_JS_SERVICE;
 const templateKey = process.env.EMAIL_JS_TEMPLATE;
 const userKey = process.env.EMAIL_JS_USER;

 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col justify-around gap-16">
    <div>
     <span className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
      Contact Me
     </span>
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
    </div>
    <ContactForm
     serviceKey={serviceKey}
     templateKey={templateKey}
     userKey={userKey}
    />
   </div>
   <div className="w-full flex items-center justify-center">
    <TechnologiesLogo />
   </div>
  </div>
 );
}
