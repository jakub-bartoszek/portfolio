import FooterLink from "components/footer/footer-link";
import { prefix } from "prefix";

export const Footer = () => {
 return (
  <footer className="w-full">
   <div className="flex w-full justify-around p-6 md:pr-0 md:w-1/2 md:justify-between">
    <FooterLink
     href="https://github.com/jakub-bartoszek"
     src={`${prefix}icons/github.svg`}
     name="Github"
    />
    <FooterLink
     href="https://www.linkedin.com/in/jbartoszek-dev/"
     src={`${prefix}icons/linkedin.svg`}
     name="Linkedin"
    />
    <FooterLink
     href="https://www.facebook.com/profile.php?id=61554246347111"
     src={`${prefix}icons/facebook.svg`}
     name="Facebook"
    />
   </div>
  </footer>
 );
};
