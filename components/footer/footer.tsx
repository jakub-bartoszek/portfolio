import FooterLink from "components/footer/footer-link";
import FacebookIcon from "components/icons/facebook-icon";
import GithubIcon from "components/icons/github-icon";
import LinkedinIcon from "components/icons/linkedin-icon";

export const Footer = () => {
 return (
  <footer className="w-full">
   <div className="flex w-full justify-between p-6 md:pr-0 md:w-1/2">
    <FooterLink
     href="https://github.com/jakub-bartoszek"
     icon={<GithubIcon />}
     name="Github"
    />
    <FooterLink
     href="https://www.linkedin.com/in/jbartoszek-dev/"
     icon={<LinkedinIcon />}
     name="Linkedin"
    />
    <FooterLink
     href="https://www.facebook.com/profile.php?id=61554246347111"
     icon={<FacebookIcon />}
     name="Facebook"
    />
   </div>
  </footer>
 );
};
