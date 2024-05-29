import { Mail, Phone } from "lucide-react";
import TechnologiesLogo from "components/technologies-logo";
import ContactForm from "components/contact/contact-form";
import ContactItem from "components/contact/contact-item";
import GithubIcon from "components/icons/github-icon";
import LinkedinIcon from "components/icons/linkedin-icon";

export default function Contact() {
 const serviceKey = process.env.EMAIL_JS_SERVICE;
 const templateKey = process.env.EMAIL_JS_TEMPLATE;
 const userKey = process.env.EMAIL_JS_USER;

 return (
  <div className="w-full h-full flex flex-col md:flex-row">
   <div className="w-full flex flex-col gap-8">
    <h1 className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
     Contact Me
    </h1>
    <div className="flex flex-col gap-4 text-lg">
     <p>
      I am always open to discussing web development work or partnership
      opportunities. Feel free to reach out to me through any of the following
      contact options:
     </p>
     <ul className="flex flex-col gap-2">
      <ContactItem
       icon={<Phone />}
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
        <div className="w-6 h-6">
         <LinkedinIcon />
        </div>
       }
       text="linkedin.com/in/jakub-bartoszek"
       href="https://www.linkedin.com/in/jakub-bartoszek"
      />
      <ContactItem
       icon={
        <div className="w-6 h-6">
         <GithubIcon />
        </div>
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
