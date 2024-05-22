import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
 const router = useRouter();

 useEffect(() => {
  router.push("/home");
 }, []);

 return <div>Loading</div>;
};

export default HomePage;
