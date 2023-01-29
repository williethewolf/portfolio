import Draggable from 'react-draggable'
import React, {useState, useEffect, useRef} from 'react';

import Image from "next/image"

export default function LanguageWindow({langWindowVis, setLangWindowVis, setlangWindowState, setRAMWindowVis, width}) {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const [translatedText, setTranslatedText] = useState("");

    const WindowElementRef = useRef(null);
    const inputRef = useRef(null)
    
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
    }, [setLangWindowVis,width]);

    const translateText = (lang) => {
      if (lang === "spanish") {
          setTranslatedText("Soy un desarrollador de software con facilidad para aprender nuevos idiomas.");
      } else if (lang === "italian") {
          setTranslatedText("Sono uno sviluppatore di software con facilità nell'imparare nuove lingue.");
      } else if (lang === "french") {
          setTranslatedText("Je suis un développeur de logiciels avec facilité à apprendre de nouvelles langues.");
      }
  }

  return (
    <>
    { langWindowVis ? (
    <Draggable
      cancel='.cancel'
      bounds="parent" 
      grid={[10, 10]
      }>
    <div className="absolute sm:left-[25%] lg:left-[45%] top-[80%] lg:top-[20%] border-solid p-1 border-gray-300 bg-gray-300 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,3)] min-width:0 min-height:0 z-20 flex flex-col" ref={WindowElementRef}>
        <section>
        <div className="w-full bg-blue-800 text-white text-center flex justify-between"> 
          <div className='pl-3'>Babel Translator '95</div> 
          <div className="text-black flex justify-end"> 
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() =>{setlangWindowState("inactive")}}>-</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={()=>{setRAMWindowVis(true)}}>❐</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() =>{setlangWindowState("closed")}}>x </button>
          </div>
        </div>
        </section>
        <section className="flex flex-wrap bg-gray-300 p-1 w-full justify-center">
        <div className="flex py-6">
            <div className="px-3 flex">
            <textarea className="w-1/2 h-40 border" style={{resize: "none"}} type="text" defaultValue={"I am a software developer with ease to learn new languages"} readOnly ref={inputRef}/>
            <div className="flex items-center">⇄</div>
            <textarea className="w-1/2 h-40 border" style={{resize: "none"}} type="text" value={translatedText} onChange={e => setTranslatedText(e.target.value)} readOnly/>
            </div>
            <div className="flex flex-col justify-end p-3">
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() => translateText("spanish")}>Spanish</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() => translateText("italian")}>Italian</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] cancel" onClick={() => translateText("french")}>French</button>
            </div>
        </div>
        </section>
        {/* <iframe className="w-full h-full" src={url} target='_top' sandbox='' loading='lazy' referrerpolicy>
        </iframe> */}
    </div>
    </Draggable>
    ):null}
    </>
  )
}