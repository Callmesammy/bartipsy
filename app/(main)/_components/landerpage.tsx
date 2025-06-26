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
gsap.registerPlugin(ScrollTrigger, SplitText)
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
                    pin: true
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
            opacity: 0,
            ease: "expo.out", 
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

        gsap.timeline({
            scrollTrigger: {
                trigger: ".split", 
                scrub: true,
                start: "top center", 
                end: "bottom, bottom",
            }
        }).to(".split", {yPercent: "100%", duration: 1.18, stagger: 0.5, ease: "expo.out"}, 0)
    },[])
    return ( 


        <div  className="w-full scrolling   h-[200vh] flex z-15 flex-col overflow-hidden ">
 <div className=" w-full flex flex-col absolute z-10">
            <Image src="/images/ckcR.png" width={230} height={120} alt="images" className="object-fill  absolute top-32 translate-x-5 right-0  topping"/>
            <Image src="/images/ckcL.png" width={230} height={120} alt="images" className="object-fill  left-0 absolute top-10 -translate-x-5 topsis "/>
            </div>

            <div className=" z-20 flex pt-5 justify-center  font-bold md:text-9xl text-5xl">
                <h1 className="texting absolute"> Sope Puur</h1></div>
              
                <div  ref={mainRef} className="h-full   w-full  items-center justify-center  ">
                <video ref={videoRef} src="/videos/input.mp4" playsInline  />                
                
                </div>

                {/** foot text */}
                <div className="  flex flex-col justify-center  space-y-2 font-bold  left-12 absolute bottom-10">
                <h1 className=" text-xs lines  md:text-lg  "> Cool, Crisp. Classic </h1>
                <h1 className={`${gravitas.className} md:text-xl text-yellow-300 lines`}> Sip the Spirity <br/> of Summer </h1>

                
                </div>

                <div className=" flex justify-center absolute bottom-10 right-0  font-bold text-xl px-3 flex-col">
                <h1 className={` text-sm  lines z-25  md:text-lg `}>  Every cocktail on our menu is a <br/> blend of premium ingredients, <br/> creativw flair, and timeless recipes <br/> -designed to delight your senses </h1>

</div>


<div className=" absolute  top-[140%] px-10 justify-between flex w-full">
<div className=" pt-7 flex split flex-col justify-center  md:text-lg   space-y-2 font-bold  left-12">
                <h1 className=" text-sm   md:text-lg "> Most popular cocktailsc </h1>
                <span className={`${gravitas.className}  md:text-lg  split w-full space-y-8 text-sm text-yellow-300 lines`}> 
                    {addition.map((doct, keys)=>(
                        <div key={keys} className="flex flex-col gap-2 ">
                                <span className=" flex gap-2 split  md:text-lg ">{doct.label} <span className="text-white text-sm justify-end items-end text-end"> -  {doct.amount}</span> </span>
                                <h1 className="text-white  split md:text-lg text-sm">{doct.url}</h1>

                        </div>
                    ))}
                </span>
                
                </div>

                <div className=" pt-7 flex flex-col  space-y-2 font-bold  justify-end text-sm ">
                <h1 className=" text- lines  md:text-lg  "> Most popular cocktailsc </h1>
                <span className={`${gravitas.className} text-sm w-full space-y-8 text-yellow-300 lines`}> 
                    {documents.map((doct, keys)=>(
                        <div key={keys} className="flex flex-col gap-2 ">
                                <span className=" text-sm flex gap-2  md:text-lg ">{doct.label} <span className="text-white justify-end items-end text-end text-sm"> -  {doct.amount}</span> </span>
                                <h1 className="text-white text-sm  md:text-lg ">{doct.url}</h1>

                        </div>
                    ))}
                </span>
                
                </div>

</div>


              
<div className="flex z-  h-[1000vh]  absolute  justify-center items-center ">
      <Image src="/images/noise.png" fill alt="images" className="object-contain blur"/>
            {/** Leaves */}
           

         <div>

           
 
         </div>
           
           
        </div>
        </div>

     );
}
 
export default Landing;