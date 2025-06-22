import { EB_Garamond } from "next/font/google";
import Image from "next/image";


const eb = EB_Garamond({
    weight: "800",
    subsets: ["latin"]
  
  });
const Lander = () => {
    return (  
        <div className="w-full h-[700px] flex items-center justify-center">
            <div className="w-full justify-center  max-w-4xl h-full relative flex rounded-full  z-10">
            <div className="absolute h-[700px] inset-0 bg-[radial-gradient(circle,_rgba(555,555,555,0.4)_0%,_transparent_70%)] overflow-hidden rounded-full blur-2xl">
            <Image src="/images/noise.png" alt="noise" fill className="object-fill z-20"/>

                </div>
                <div className="  overflow-hidden">
             <h1 className={`${eb.className} font-bold text-9xl capitalize italic  `}> SOPE PUUR </h1> 

                </div>

            </div>
            <Image src="/images/noise.png" alt="noise" fill className="object-fill z-20"/>

        </div>
    );
}
 
export default Lander;