import LanguagesWeb from "./Webmocks/languagesweb"
import Draggable from 'react-draggable'
import React, {useState, useEffect, useRef} from 'react';

import Image from "next/image"
import IMDB from "../public/images/webmockups/IMDB.png"
import WWWEB from "../public/images/webmockups/WWWEB.png"
import YTREEL from "../public/images/webmockups/YTREEL.png"

export default function BrowserWindow({url, browserVis, handleBrowserState, height, width}) {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [currentWebsite, setCurrentWebsite] = useState(IMDB)
    const elementRef = useRef(null);
    
    useEffect(() => {
      function handleResize() {
        if (elementRef.current != null){
        setWindowWidth(Math.trunc(elementRef.current.getBoundingClientRect().width));
        setWindowHeight(Math.trunc(elementRef.current.getBoundingClientRect().height));
      }
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize);
    }, []);


      function handleWebsiteChange(e) {
        if (e.target.value == "IMDB")
        setCurrentWebsite(IMDB)
        if (e.target.value == "WWWEB")
        setCurrentWebsite(WWWEB)
        if (e.target.value == "YTREEL")
        setCurrentWebsite(YTREEL)
      }
    useEffect(() => {
      handleWebsiteChange
    }, []);

  //  console.log(width)
  return (
    <>
    { browserVis ? (
    <Draggable
    bounds={{ left: 0, right: width-windowWidth, top:0, bottom: height-windowHeight-50}} grid={[10, 10]}>
    <div className="absolute border-solid p-2 border-gray-300 bg-gray-300 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,3)] w-6/6 md:w-2/3 h-3/5 z-20  flex flex-col" ref={elementRef}>
        <section>
        <div className="w-full bg-blue-800 text-white text-center flex justify-between"> 
          <div>NotScape Navigator</div> 
          <div className="text-black flex justify-end"> 
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)]" onClick={() =>{handleBrowserState("inactive")}}>-</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] disabled:opacity-50 disabled">❐</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)]" onClick={() =>{handleBrowserState("closed")}}>x </button>
          </div>
        </div>
        </section>
        <section className="flex flex-wrap bg-gray-300 p-1">
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center"><button className=""><p>🢦</p><p>Back</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center"><button className=""><p>➪</p><p>Forward</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center"><button className=""><p>↺</p><p>Reload</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center"><button className=""><p>🔍</p><p>Search</p></button></div>
        {/* <button className="p-2">Guide</button>
        <button className="p-2">Print</button>
        <button className="p-2">Security</button> */}
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center"><button className="p-2"><p>🛑</p><p>Stop</p></button></div>


        </section>
        <section className="grid grid-cols-8">
        <div className="col-span-7">
          <select className="w-full border border-solid border-1 my-2 w95StartMenuEle" onChange={handleWebsiteChange}>
            <option className="w95StartMenuEle" value="IMDB">https://www.imdb.me/williamwolffe</option>
            <option className="w95StartMenuEle" value="YTREEL">https://youtu.be/xisUtskB8WI</option>
            <option className="w95StartMenuEle" value="WWWEB">https://www.williamwolffe.com</option>
          </select>
        </div>
        <div className="place-self-end">Notscape</div>
        </section>
        <section className="h-full bg-white overflow-auto w95StartMenuEle">
          {/* <LanguagesWeb/> */}
          <a href="https://www.imdb.me/williamwolffe" target="_blank">
          <Image
            src={currentWebsite}
            alt="IMDB.com"
          />
          </a>
        </section>
        {/* <iframe className="w-full h-full" src={url} target='_top' sandbox='' loading='lazy' referrerpolicy>
        </iframe> */}
    </div>
    </Draggable>
    ):null}
    </>
  )
}