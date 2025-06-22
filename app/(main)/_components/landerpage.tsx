"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";


const eb = EB_Garamond({
    weight: "800",
    subsets: ["latin"]
  
  });

gsap.registerPlugin(useGSAP, ScrollTrigger)  
const Lander = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mainDiv = useRef<HTMLDivElement >(null)
    const refL = useRef<number | null>(null)

    

   

    useGSAP(()=>{
        //
const video = videoRef.current; 
    const currentDoc = mainDiv.current
    if(!video || !currentDoc) return

        const playOrder = {value: -0}
        const update =()=>{
         if(video.readyState >= 2){
             video.currentTime = playOrder.value
         }
         refL.current = requestAnimationFrame(update)
        }
        const scrollHere = ()=>{
         const duration = video.duration
         gsap.to(playOrder, {
             value: duration, 
             ease: "none", 
             scrollTrigger: {
                 trigger: currentDoc, 
                 start: "top top", 
                 end: "bottom bottom", 
                 scrub: true, 
                 pin: true
             }
         
         })
         update()
        }
        if(video.readyState >= 2){
         scrollHere()
        }else{
         video.addEventListener("loadedmetadata", scrollHere)
        }

   
       
        const paragraph = new SplitText(".title", {type: "chars, lines"})
        gsap.from(paragraph.chars, {
            y: "100%", 
            duration: 1.8, 
            ease: "expo.out", 
            stagger: 0.06
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: "doct", 
                start: "top top", 
                end: "bottom center", 
                scrub: true
            }
        })
        .to(".dox", {y: "300%", ease: "power1.in"}, 0)
        .to(".doc", {y: "-300%", ease: "power1.out"}, 0)


    },[])
  
    return (  
        <div className=" doct relative w-full h-[300vh] flex items-center justify-center ">

            <div className="w-full justify-center   h-full relative flex rounded-full  z-30">
                    
             <h1 className={`${eb.className} title text-yellow-100 font-bold text-9xl capitalize`}> SOPE PUUR </h1> 
            </div>
               <div ref={mainDiv} className="absolute w-full  h-full justify-center items-center ">
             <video ref={videoRef} src="/videos/output.mp4" muted playsInline className="w-full " />
               </div>
                <div className=" w-4xl bottom-0 bg-gray-300/20 absolute insert-0 z-40 flex h-full px-4 rounded-full blur-3xl"/>               
                 <div className="dox flex w-[250px] h-[290px] -right-9 top-[10px] absolute ">
              <Image src="/images/ckcR.png" alt="noise" fill className="object contain doc z-20 "/></div>

              <div className="doc flex w-[250px] h-[290px] -left-9 top-[20%] absolute ">
              <Image src="/images/ckcL.png" alt="noise" fill className="object contain doc z-20 "/></div>
        </div>
    );
}
 
export default Lander;