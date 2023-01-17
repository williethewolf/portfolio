import Techstack from "../components/techstack";
import StartMenu from "../components/StartMenubar";
import BrowserWindow from "../components/BrowserWindow";
import React, {useState, useEffect, useRef} from 'react';
import AboutBlurb from "../components/AboutBlurb";


export default function AboutMe() {
    //to calculate the width of the element and pass it later as props
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const sectionElementRef = useRef(null);
    //put ref in div ref={elementRef}

    const [browserState, setBrowserState] = useState("inactive")
    const [browserVis, setBrowserVis] = useState(null)
    
    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setWidth(Math.trunc(sectionElementRef.current.getBoundingClientRect().width));
            setHeight(Math.trunc(sectionElementRef.current.getBoundingClientRect().height));
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [sectionElementRef]);


    const handleBrowserState = (state) => {
        setBrowserState(`${state}`)
    }

    const handleBrowserVis = (vis) => {
        console.log("update visibility")
        setBrowserVis(vis)
    }

    // useEffect(() =>{
    //     handleBrowserState()
    // },[])

    useEffect(() => {
    function updateVis(){
        if (browserState == "open"){
            setBrowserVis(true)
            //setBrowserState("closed")
            
        }
        else if(browserState == "inactive"){
            setBrowserVis(false)
            //setBrowserState("open")
        }
        else{
            setBrowserVis(false)
            //setBrowserState("open")
        }
    }
    updateVis()
    }, [browserState]);

   
    
    
    return (
    <div className="w-full">
        <section className="w-full win95" id="desktop"  ref={sectionElementRef}>
            <BrowserWindow url="https://www.google.com"  width ={width} height= {height} browserVis={browserVis} handleBrowserState={handleBrowserState}/>
            <div className=" mx-5 md:mb-14 md:mx-30 xl:mx-60 "><Techstack /></div>
            <button  onClick={handleBrowserVis}>press here</button>
            <StartMenu browserStatus={browserState} handleBrowserState={handleBrowserState} handleBrowserVis={handleBrowserVis}/>
            
        </section>
        
        <section className="grid md:text-5xl bg-slate-100 ">
        
            <div>
                
            </div>
            <div className="">
            <AboutBlurb/>            

            </div>
        </section>
    </div>
    )}