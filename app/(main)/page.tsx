import { Weight } from "lucide-react";
import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import Lander from "./_components/landerpage";



export default function Home() {
  return (
    <div className="w-full flex  px-3">
      {/** LANDING PAGE */}
   <div className="w-full flex">
    <Lander/>
     </div>
    </div>
  );
}
