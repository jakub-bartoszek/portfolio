import { MobileToggle } from "../menu-toggle";
import { NavigationItem } from "./navigation-item";

export const Navigation = () => {
 return (
  <header className="w-full flex justify-between px-6 py-4">
   <div className="font-bold text-2xl flex items-center">
    <MobileToggle />
    Jakub Bartoszek
   </div>
   <div className="hidden md:flex gap-12 items-center">
    <NavigationItem
     title="Home"
     href="/home"
    />
    <NavigationItem
     title="About"
     href="/about"
    />
    <NavigationItem
     title="Skills"
     href="/skills"
    />
    <NavigationItem
     title="Projects"
     href="/projects"
    />
    <NavigationItem
     title="Contact"
     href="/contact"
    />
   </div>
  </header>
 );
};
