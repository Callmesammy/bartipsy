"use client"

import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import { headMater } from ".";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


const gravitas = Gravitas_One({
    weight: "400",
    subsets: ["latin"]
  
  });
const HeaderTips = () => {
    const pathName = usePathname()
    const clicking = (url: string)=>{
        window.location.href=url
    }
    return ( 
        <div className="w-full h-12  items-center flex px-10 justify-between pt-3">
            <div onClick={()=>clicking("/")} className="w-full flex gap-1 items-center cursor-pointer h-full">
                <Image src="/images/logo.png" alt="logo" width={35} height={25}/>
                <h1 className={`text-sm ${gravitas.className}`}>Opions</h1>
                
            </div>
                            {/** heading components  */}
<div className="flex gap-4 w-full justify-end">
        {
            headMater.map((doc, keys)=>{

              const isActive =  pathName === doc.url || pathName.startsWith(`${doc.url}`)
                return(
                    <div key={keys} className={cn("flex w- text-muted-foreground hover:text-white cursor-pointer p-2", isActive && " border-muted-foreground text-white border rounded-full ")}>
                            <h1>{doc.label}</h1>
                    </div>
                )
            })
        }
</div>
        </div>
     );
}
 
export default HeaderTips;