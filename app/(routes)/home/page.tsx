import SocialMediaLink from "components/social-media-link";
import TechnologiesLogo from "components/technologies-logo";
import { prefix } from "prefix";

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
     <TechnologiesLogo />
    </div>
   </div>
   <div className="flex justify-start gap-16 mt-4 md:mt-8">
    <SocialMediaLink
     href="https://github.com/jakub-bartoszek"
     src={`${prefix}icons/github.svg`}
     name="Github"
    />
    <SocialMediaLink
     href="https://www.linkedin.com/in/jbartoszek-dev/"
     src={`${prefix}icons/linkedin.svg`}
     name="Linkedin"
    />
    <SocialMediaLink
     href="https://www.facebook.com/profile.php?id=61554246347111"
     src={`${prefix}icons/facebook.svg`}
     name="Facebook"
    />
   </div>
  </div>
 );
}
