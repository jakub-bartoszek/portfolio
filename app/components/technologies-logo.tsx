import Image from "next/image";
import { prefix } from "prefix";

const TechnologiesLogo = () => {
 return (
  <div className="w-full aspect-square flex relative">
   <div
    className="absolute left-[50%] top-[15%] w-[35%] aspect-square rounded-full bg-white shadow-[0_0_50px_0px_#ffffff50] hover:scale-105 hover:shadow-[0_0_50px_0px_#ffffff] transition duration-500"
    aria-label="Typescript Logo"
   >
    <Image
     alt="Typescript"
     src={`${prefix}/images/typescript.png`}
     layout="fill"
    />
   </div>
   <div
    className="absolute left-[40%] top-[45%] w-[45%] aspect-square rounded-full bg-[#9b9bed] shadow-[0_0_50px_0px_#9b9bed70] hover:scale-105 hover:shadow-[0_0_50px_0px_#9b9bed] transition duration-500"
    aria-label="React JS Logo"
   >
    <Image
     alt="React JS"
     src={`${prefix}/images/reactjs.png`}
     layout="fill"
    />
   </div>
   <div
    className="absolute group left-[15%] top-[20%] w-[45%] aspect-square rounded-full bg-[#5136ed] shadow-[0_0_50px_0px_#5136ed70] hover:scale-105 hover:shadow-[0_0_50px_0px_#5136ed] transition duration-500"
    aria-label="Next JS Logo"
   >
    <Image
     className="group-hover:drop-shadow-[0_0px_5px_#ffffff] transition duration-500"
     alt="Next JS"
     src={`${prefix}/images/nextjs.png`}
     layout="fill"
    />
   </div>
  </div>
 );
};

export default TechnologiesLogo;
