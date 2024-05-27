import SocialMediaLink from "components/social-media-link";
import { prefix } from "prefix";

export const Footer = () => {
 return (
  <footer className="flex justify-center md:justify-start gap-16 p-6">
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
  </footer>
 );
};