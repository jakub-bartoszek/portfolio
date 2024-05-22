interface NavigationItemProps {
 title: string;
 href: string;
}

export const NavigationItem = ({ title, href }: NavigationItemProps) => {
 return (
  <a
   href={href}
   className="font-semibold"
  >
   {title}
  </a>
 );
};
