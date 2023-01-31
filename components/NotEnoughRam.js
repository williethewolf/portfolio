import Draggable from 'react-draggable'
import React, {useState,useEffect, useRef} from 'react';

import Image from "next/image"
import errortriagle from "../public/images/w95/Warningtriangle.png"

import errorSound from "../public/audio/Windows_95_-_Error_Sound_Effect.mp3"

export default function LanguageWindow({RAMWindowVis, setRAMWindowVis, width}) {

    const WindowElementRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    
    useEffect(() => {
      function handleResize() {
        if (WindowElementRef.current != null){
        setWindowWidth(Math.trunc(WindowElementRef.current.getBoundingClientRect().width));
        setWindowHeight(Math.trunc(WindowElementRef.current.getBoundingClientRect().height));
      }
      }
      window.addEventListener('load', handleResize)
      window.addEventListener("resize", handleResize)
      
      handleResize()
      return () => {
        window.removeEventListener('load', handleResize)
        window.removeEventListener("resize", handleResize)
        
      }
    }, [setRAMWindowVis,width]);

    useEffect(() => {
      if (RAMWindowVis)
      new Audio(errorSound).play()
    },[RAMWindowVis])

  return (
    <>
    { RAMWindowVis ? (
    <Draggable
      cancel='.cancel'
      bounds="parent" 
      grid={[10, 10]
      }>
    <div className=" md:w-96 absolute sm:left-[25%] lg:left-[45%] top-[80%] lg:top-[20%] border-solid p-1 border-gray-300 bg-gray-300 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,3)] min-width:0 min-height:0 z-40 flex flex-col" ref={WindowElementRef}>
        <section>
        <div className="w-full bg-blue-800 text-white text-center flex justify-between"> 
          <div className='pl-3'>Warning: Not enough RAM</div> 
          <div className="text-black flex justify-end"> 
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() =>{setRAMWindowVis(false)}}>x </button>
          </div>
        </div>
        </section>
        <section className="bg-gray-300 p-1 w-full justify-center">
        <div className="flex py-6  mx-2">
          <div>
            <Image
            src={errortriagle}
            />
          </div>
          <div className="px-2 flex">
            <p className='flex-wrap'>Windows 95 has not found enough memory to perform the action requested.</p>
          </div>    
        </div>
        <div className="flex space-x-4 justify-center p-3">
            <p className='bg-gray-300 px-1 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] '>
            <button className="border border-slate-800 border-dashed my-1 px-2 w95StartMenuEle cancel" onClick={() => setRAMWindowVis(false)}>OK</button>
            </p>
            <p className='bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] py-1'>
              <a href="https://downloadmoreram.com/" target="_blank" className="w95StartMenuEle cancel">Download more RAM</a>
            </p>
            </div>
        </section>
    </div>
    </Draggable>
    ):null}
    </>
  )
}