import { prefix } from "prefix";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import TechnologiesLogo from "components/technologies-logo";
import ContactForm from "components/contact/contact-form";
import ContactItem from "components/contact/contact-item";

export default function Contact() {
 const serviceKey = process.env.EMAIL_JS_SERVICE;
 const templateKey = process.env.EMAIL_JS_TEMPLATE;
 const userKey = process.env.EMAIL_JS_USER;

 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="flex flex-col gap-8">
    <h1 className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
     Contact Me
    </h1>
    <div className="flex flex-col gap-4 text-lg">
     <p>
      I am always open to discussing web development work or partnership
      opportunities. Feel free to reach out to me through any of the following
      contact options:
     </p>
     <ul>
      <ContactItem
       icon={<Phone className="h-6 w-6" />}
       text="+48 530 936 096"
       href="tel:530-936-096"
      />
      <ContactItem
       icon={<Mail />}
       text="jakub.bartoszek.dev@gmail.com"
       href="mailto:jakub.bartoszek.dev@gmail.com"
      />
      <ContactItem
       icon={
        <Image
         src={`${prefix}icons/linkedin.svg`}
         alt="Linkedin"
         width={24}
         height={24}
        />
       }
       text="linkedin.com/in/jakub-bartoszek"
       href="https://www.linkedin.com/in/jakub-bartoszek"
      />
      <ContactItem
       icon={
        <Image
         src={`${prefix}icons/github.svg`}
         alt="Github"
         width={24}
         height={24}
        />
       }
       text="github.com/jakub-bartoszek"
       href="https://www.github.com/jakub-bartoszek"
      />
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
