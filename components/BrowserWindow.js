import LanguagesWeb from "./Webmocks/languagesweb"
import Draggable from 'react-draggable'
import React, {useState, useEffect, useRef} from 'react';

import Image from "next/image"
import IMDB from "../public/images/webmockups/IMDB.png"
import WWWEB from "../public/images/webmockups/WWWEB.png"
import YTREEL from "../public/images/webmockups/YTREEL.png"

export default function BrowserWindow({browserVis, setBrowserState, height, width, websites, setWebsites, selectedWebsite, setSelectedWebsite, handleWebsiteChange}) {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    // const [websites, setWebsites] = useState([{selector:IMDB,url:"https://www.imdb.me/williamwolffe", name:"IMDB"}, 
    //                                           {selector:WWWEB,url:"https://www.williamwolffe.com", name:"WWWEB"},
    //                                           {selector:YTREEL,url:"https://www.youtube.com/watch?v=xisUtskB8WI", name:"YTREEL"}
    //                                         ]);
    // const [selectedWebsite, setSelectedWebsite] = useState(websites[0])
    const browserElementRef = useRef(null);
    const dropdownElementRef = useRef(null);
    
    useEffect(() => {
      function handleResize() {
        if (browserElementRef.current != null){
        setWindowWidth(Math.trunc(browserElementRef.current.getBoundingClientRect().width));
        setWindowHeight(Math.trunc(browserElementRef.current.getBoundingClientRect().height));
      }
      }
      window.addEventListener('load', handleResize)
      window.addEventListener("resize", handleResize)
      
      handleResize()
      return () => {
        window.removeEventListener('load', handleResize)
        window.removeEventListener("resize", handleResize)
        
      }
    }, [browserVis,width])

    // const handleWebsiteChange = (event) => {
    //   console.log(JSON.parse(event.target.options[event.target.selectedIndex].value))
    //   setSelectedWebsite(JSON.parse(event.target.options[event.target.selectedIndex].value));
    //   console.log("the selected website " + selectedWebsite)
    // }
  
    const selectNext = () => {
      // console.log("pressed select next")
      const currentWebsite = websites.find(website => website === selectedWebsite);
      const currentIndex = websites.indexOf(currentWebsite);
      const nextIndex = currentIndex === websites.length - 1 ? 0 : currentIndex + 1;
      setSelectedWebsite(websites[nextIndex]);
    }

    const selectPrevious = () => {
      // console.log("pressed select previous");
      const currentWebsite = websites.find(website => website === selectedWebsite);
      const currentIndex = websites.indexOf(currentWebsite);
      const prevIndex = currentIndex === 0 ? websites.length - 1 : currentIndex - 1;
      setSelectedWebsite(websites[prevIndex]);
    }

    const mapWebsites = () => {
        return websites.map((website) => (
      <option className="w95StartMenuEle" key={JSON.stringify(website.name)} value={JSON.stringify(website)}>
        {website.url}
      </option>
    ))}

    const bounds = width > 1000?
    { left: -windowWidth*0.29, right: width-windowWidth-(windowWidth*0.31), top:-200, bottom: height-windowHeight-260} :
    { left: 0, right: width-windowWidth, top:-200, bottom: height-windowHeight-920};

    // useEffect(() => {
    //   handleWebsiteChange
    // }, [selectedWebsite]);

  return (
    <>
    { browserVis ? (
    <Draggable
    bounds={bounds} grid={[10, 10]}>
    <div className="absolute lg:left-[20%] bottom-[100px] lg:top-[20%] border-solid p-2 border-gray-300 bg-gray-300 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,3)] w-6/6 xl:w-2/3  lg:h-5/6 xl:h-3/5 z-20 flex flex-col" ref={browserElementRef}>
        <section>
        <div className="w-full bg-blue-800 text-white text-center flex justify-between"> 
          <div>NotScape Navigator</div> 
          <div className="text-black flex justify-end"> 
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] w95StartMenuEle" onClick={() =>{setBrowserState("inactive")}}>-</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] disabled:opacity-50 disabled w95StartMenuEle">❐</button>
            <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)] w95StartMenuEle" onClick={() =>{setBrowserState("closed")}}>x </button>
          </div>
        </div>
        </section>
        <section className="flex flex-wrap bg-gray-300 p-1">
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center w95StartMenuEle"><button className="" onClick={selectPrevious}><p>🢦</p><p>Back</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center w95StartMenuEle"><button className="" onClick={selectNext}><p>➪</p><p>Forward</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center w95StartMenuEle"><button className="disabled:opacity-25" disabled><p>↺</p><p>Reload</p></button></div>
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center w95StartMenuEle"><button className="disabled:opacity-25" disabled><p>🔍</p><p>Search</p></button></div>
        {/* <button className="p-2">Guide</button>
        <button className="p-2">Print</button>
        <button className="p-2">Security</button> */}
        <div className="border border-solid border-2 m-0.5 w-16 shadow shadow-[2px_2px_1px_0px_rgba(0,0,0,1)] grid place-items-center w95StartMenuEle"><button className="p-2 disabled:opacity-25" disabled><p>🛑</p><p>Stop</p></button></div>


        </section>
        <section className="grid grid-cols-8">
        <div className="col-span-7">
          <select className="w-full border border-solid border-1 my-2 w95StartMenuEle" value={JSON.stringify(selectedWebsite)} onChange={handleWebsiteChange} ref={dropdownElementRef}>
            {mapWebsites()}          
          </select>
        </div>
        <div className="place-self-end">Notscape</div>
        </section>
        <section className="h-full bg-white overflow-auto w95StartMenuEle">
          <a href={selectedWebsite.url} target="_blank">
          <Image
            src={selectedWebsite.selector}
            alt={selectedWebsite.url}
          />
          </a>
        </section>
    </div>
    </Draggable>
    ):null}
    </>
  )
}