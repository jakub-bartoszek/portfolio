import Link from "next/link";

interface ContactItemProps {
 icon: React.ReactNode;
 text: string;
 href?: string;
}

const ContactItem = ({ icon, text, href }: ContactItemProps) => {
 return (
  <li className="flex items-center gap-4">
   {icon}
   {href ? (
    <Link
     className="text-[#9B9BED]"
     href={href}
    >
     {text}
    </Link>
   ) : (
    <span className="text-[#9B9BED]">{text}</span>
   )}
  </li>
 );
};

export default ContactItem;
