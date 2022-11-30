import LanguagesWeb from "./Webmocks/languagesweb"
import Draggable from 'react-draggable'
import React, {useState, useEffect, useRef} from 'react';

export default function BrowserWindow({url, visible, height, width}) {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const elementRef = useRef(null);
    
    useEffect(() => {
      function handleResize() {
        setWindowWidth(Math.trunc(elementRef.current.getBoundingClientRect().width));
        setWindowHeight(Math.trunc(elementRef.current.getBoundingClientRect().height));
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize);
    }, []);

   console.log(width)
  return (
    <Draggable
    bounds={{ left: 0, right: width-windowWidth, top:0, bottom: height-windowHeight-50}} grid={[10, 10]}>
    <div className="absolute border-solid p-2 border-gray-300 bg-gray-300 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,3)] w-6/6 md:w-2/3 h-3/5 z-20  flex flex-col" ref={elementRef}>
        <section>
        <div className="w-full bg-blue-800 text-white text-center flex justify-between"> <div>NotScape Navigator</div> <div className="text-black flex justify-end"> <button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)]">-</button><button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)]">❐</button><button className="bg-gray-300 px-2 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,1)]">x</button></div> </div>
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
        <div className="col-span-7"><select className="w-full border border-solid border-1 my-2">
          <option value="1">htutuputamadre://www.miconio.com/</option>
          </select></div>
        <div className="place-self-end">Notscape</div>
        </section>
        <section className="h-full bg-white">
          <LanguagesWeb/>
        </section>
        <iframe className="w-full h-full" src={url} target='_top' sandbox='' >
        </iframe>
    </div>
    </Draggable>
  )
}