import { Weight } from "lucide-react";
import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import Landing from "./_components/landerpage";



export default function Home() {
  return (
    <div className="w-full flex  h-full flex-col">
      {/** LANDING PAGE */}
   <div className="w-full flex h-full">
    <Landing/>
     </div>
     <section className="w-full h-full"> 
      another page
     </section>
    </div>
  );
}
