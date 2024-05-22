"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const MainPage = () => {
 const router = useRouter();

 useEffect(() => {
  router.push("/home");
 });

 return (
  <div className="flex h-full items-center justify-center">
   <Loader2 className="h-16 w-16 animate-spin text-[#9B9BED]" />
  </div>
 );
};

export default MainPage;
