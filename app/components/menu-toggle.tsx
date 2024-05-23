import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "./navigation/navigation-item";

export const MobileToggle = () => {
 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button
     variant="ghost"
     size="icon"
     className="md:hidden mr-2"
    >
     <Menu />
    </Button>
   </SheetTrigger>
   <SheetContent
    side="left"
    className="flex flex-col items-center p-4 bg-[#111423]"
   >
    <div className="font-bold text-2xl whitespace-nowrap">Jakub Bartoszek</div>
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
   </SheetContent>
  </Sheet>
 );
};
