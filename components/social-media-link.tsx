import Image from "next/image";

interface SocialMediaLinkProps {
 href: string;
 src: string;
 name: string;
}

const SocialMediaLink = ({ href, src, name }: SocialMediaLinkProps) => {
 return (
  <a
   className="flex items-center gap-2 hover:drop-shadow-[0_0_5px_#fff] transition duration-500"
   href={href}
   target="_blank"
  >
   <Image
    width="24"
    height="24"
    src={src}
    alt={name}
   />
   {name}
  </a>
 );
};

export default SocialMediaLink;
