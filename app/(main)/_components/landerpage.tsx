"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Gravitas_One } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { addition, documents } from ".";


const gravitas = Gravitas_One({
    weight: "400",
    subsets: ["latin"]
  
  }); 
gsap.registerPlugin(ScrollTrigger)
const Landing = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const mainRef = useRef<HTMLDivElement>(null)
    const refDev = useRef<number | null>(null)
    
    useGSAP(()=>{

        const video = videoRef.current
        const current = mainRef.current

        if(!video || !current) return; 

        const playRef = {value: 0}

        const accordion =()=>{
            if(video.readyState >= 2){
                video.currentTime = playRef.value
            }
            refDev.current = requestAnimationFrame(accordion)
        }

        const Playme = ()=>{
            const duration = video.duration || 1;
            gsap.to(playRef, {
                value: duration, 
                ease: "none",
                scrollTrigger: {
                    trigger: current,
                     start: "top top", 
                    end: "bottom bottom",
                    scrub: true, 
                    pin: true, 
                    
                }
                
            });
            accordion()
        }
        if(video.readyState >= 2){
            Playme()
        }else{
            video.addEventListener("loadedmetadata", Playme)
        }
        
      const messagess = new SplitText (".texting", {type: "chars, words"})
      gsap.from(messagess.chars, {
        y: "100%", 
        ease: "power1.out", 
        stagger: 0.06
    })
    const lines = new SplitText(".lines", {type: "lines, line"})
        gsap.from(lines.lines, {
            duration: 1.18, 
            y: "100%",
            ease: "power1.out", 
            stagger: 0.05, 
            delay: 1
        })
    gsap.timeline({
        scrollTrigger:{
            trigger: "scrolling", 
            scrub: true,
            start: "top top", 
            end: "bottom bottom"
            
        }

    }).to(".topping", {yPercent: 180}, 0)
    .to(".topsis", {yPercent: -130}, 0)
    },[])
    return ( 
        <div className="w-full scrolling h-[300vh] flex z-15 flex-col overflow-hidden">
            <div className=" z-20 flex  justify-center  font-bold text-9xl">
                <h1 className="texting absolute"> Sope Puur</h1></div>
              
                <div  ref={mainRef} className="  absolute h-[300vh] w-full  items-center justify-center  ">
                <video ref={videoRef} src="/videos/input.mp4" playsInline  />                
                
                </div>

                {/** foot text */}
                <div className="  flex flex-col justify-center  space-y-2 font-bold  left-12 absolute bottom-10">
                <h1 className=" text-xs lines "> Cool, Crisp. Classic </h1>
                <h1 className={`${gravitas.className} text-xl text-yellow-300 lines`}> Sip the Spirity <br/> of Summer </h1>

                
                </div>

                <div className=" flex justify-center absolute bottom-10 right-0  font-bold text-xl px-3 flex-col">
                <h1 className={` text-sm  lines`}>  Every cocktail on our menu is a <br/> blend of premium ingredients, <br/> creativw flair, and timeless recipes <br/> -designed to delight your senses </h1>

</div>

          <div className="flex h-[300vh]  z-20   relative justify-center items-center ">
      <Image src="/images/noise.png" fill alt="images" className="object-contain blur"/>
            {/** Leaves */}
            <div className="">
            <Image src="/images/ckcR.png" width={230} height={120} alt="images" className="object-fill absolute top-32 translate-x-5 right-0  topping"/>
            <Image src="/images/ckcL.png" width={230} height={120} alt="images" className="object-fill left-0 absolute top-10 -translate-x-5 topsis"/>

            </div>

                   {/** foot text */}
         
             <div className="  flex flex-col justify-center   font-bold  left-12 absolute space-y-8">
                <h1 className=" text-lg lines ">Most Popular cocktails </h1>
                {documents.map((doc, keys)=>(
                    <div key={keys} className="w-full flex flex-col ">
                        <span className="flex gap-5 w-full items-center">
                         <h1 className={`${gravitas.className} w-full gap-2.5 text-sm text-yellow-300 lines `}> {doc.label}</h1> - <span className="justify-end items-end flex "> ${doc.amount}</span>
                        </span>
                        {doc.url}

                    </div>
                ))}

                
                </div>

                <div className=" flex justify-center absolute gap-5 right-0  font-bold text-xl px-3 flex-col">
                <h1 className=" text-lg lines ">Most Popular cocktails </h1>
                {addition.map((doc, keys)=>(
                    <div key={keys} className="w-full flex flex-col ">
                        <span className="flex gap-5 w-full items-center">
                         <h1 className={`${gravitas.className} w-full gap-2.5 text-sm text-yellow-300 lines `}> {doc.label}</h1> - <span className="justify-end items-end flex "> ${doc.amount}</span>
                        </span>
                        {doc.url}

                    </div>
                ))}

</div>
          </div>
      
     
          
        </div>
     );
}
 
export default Landing;