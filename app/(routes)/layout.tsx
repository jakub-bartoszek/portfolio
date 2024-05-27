import { Navigation } from "components/navigation/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
 return (
  <div className="flex flex-col max-w-[1400px] w-[1400px] min-h-dvh">
   <Navigation />
   <main className="h-full p-6">{children}</main>
  </div>
 );
};

export default MainLayout;
