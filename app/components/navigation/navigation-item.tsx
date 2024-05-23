"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
 title: string;
 href: string;
}

export const NavigationItem = ({ title, href }: NavigationItemProps) => {
 const pathname = usePathname();

 return (
  <div className="group relative flex justify-center">
   <div />
   <div
    className={cn(
     "absolute bottom-0 h-[3px] w-0 bg-white group-hover:w-full transition-all",
     pathname === href && "w-full"
    )}
   />
   <Link href={href}>{title}</Link>
  </div>
 );
};
