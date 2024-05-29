import Image from "next/image";
import Link from "next/link";

interface FooterLinkProps {
 href: string;
 src: string;
 name: string;
}

const FooterLink = ({ href, src, name }: FooterLinkProps) => {
 return (
  <Link
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
  </Link>
 );
};

export default FooterLink;
