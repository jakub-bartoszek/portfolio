import Link from "next/link";

interface FooterLinkProps {
 href: string;
 icon: React.ReactNode;
 name: string;
}

const FooterLink = ({ href, icon, name }: FooterLinkProps) => {
 return (
  <Link
   className="flex items-center gap-2 hover:drop-shadow-[0_0_5px_#fff] transition duration-500"
   href={href}
   target="_blank"
  >
   <div className="w-4 h-4 flex justify-center items-center">
    {icon}
   </div>
   <span>{name}</span>
  </Link>
 );
};

export default FooterLink;
