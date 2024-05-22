import { Navigation } from "@/components/navigation/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
 return (
  <div className="flex flex-col h-full max-w-[1400px] w-[1400px]">
   <Navigation />
   <main className="h-full">{children}</main>
  </div>
 );
};

export default MainLayout;
