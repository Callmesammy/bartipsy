"use client"

import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import { headMater } from ".";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";


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
        <div className="sticky z-9999 w-full h-22  items-center flex px-10 justify-between pt-3">
            <div  className="w-full flex gap-1 items-center cursor-pointer h-full">
              <Link onClick={()=>clicking("/")} href={"/"} className="w-full gap-2 flex items-center">
              <Image src="/images/logo.png" alt="logo" width={35} height={25}/>
                <h1 className={`text-sm ${gravitas.className}`}>Opions</h1>
                
              </Link>  
            </div>
                            {/** heading components  */}
<div className="flex gap-4 w-full justify-end">
        {
            headMater.map((doc, keys)=>{

              const isActive =  pathName === doc.url || pathName.startsWith(`${doc.url}`)
                return(
                    <Link href={doc.url} key={keys} className={cn("flex border border-black rounded-full text-muted-foreground hover:text-white cursor-pointer p-2 hover:border-muted-foreground ", isActive && " border-muted-foreground text-white border rounded-full ")}>
                            <h1>{doc.label}</h1>
                    </Link>
                )
            })
        }
</div>
        </div>
     );
}
 
export default HeaderTips;