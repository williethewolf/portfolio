import Techstack from "../components/techstack";
import StartMenu from "../components/StartMenubar";
import BrowserWindow from "../components/BrowserWindow";
import React, {useState, useEffect, useRef} from 'react';
import AboutCards from "../components/AboutCards";

//webbrowser "sites" imports
import IMDB from "../public/images/webmockups/IMDB.png"
import WWWEB from "../public/images/webmockups/WWWEB.png"
import YTREEL from "../public/images/webmockups/YTREEL.png"


export default function AboutMe() {
    //to calculate the width of the element and pass it later as props
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const sectionElementRef = useRef(null);
    //put ref in div ref={elementRef}

    //browser windows controls
    const [browserState, setBrowserState] = useState("inactive")
    const [browserVis, setBrowserVis] = useState(null)
    const [websites, setWebsites] = useState([{selector:IMDB,url:"https://www.imdb.me/williamwolffe", name:"IMDB"}, 
                                              {selector:WWWEB,url:"https://www.williamwolffe.com", name:"WW Website"},
                                              {selector:YTREEL,url:"https://www.youtube.com/watch?v=xisUtskB8WI", name:"Reel"}
                                            ]);
    const [selectedWebsite, setSelectedWebsite] = useState(websites[0])

    const handleWebsiteChange = (event) => {
        console.log(JSON.parse(event.target.options[event.target.selectedIndex].value))
        setSelectedWebsite(JSON.parse(event.target.options[event.target.selectedIndex].value));
        console.log("the selected website " + selectedWebsite)
      }
      useEffect(() => {
        handleWebsiteChange
      }, [selectedWebsite]);  
    //language Window controls
    const [langWindowVis, setLangWindowVis] = useState(false)
    const [langSelected, setSelectedLang] = useState("EN")
    
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


    // const handleBrowserState = (state) => {
    //     setBrowserState(`${state}`)
    // }

    // const handleBrowserVis = (vis) => {
    //     //console.log("update visibility")
    //     setBrowserVis(vis)
    // }


    useEffect(() => {
    function updateVis(){
        if (browserState == "open"){
            setBrowserVis(true)
            
        }
        else if(browserState == "inactive"){
            setBrowserVis(false)
        }
        else{
            setBrowserVis(false)
        }
    }
    updateVis()
    }, [browserState]);

   
    
    
    return (
    <div className="w-full">
        <section className="w-full win95 relative" id="desktop"  ref={sectionElementRef} >
            <BrowserWindow width={width} height={height} browserVis={browserVis} setBrowserState={setBrowserState} websites={websites} setWebsites={setWebsites} selectedWebsite={selectedWebsite} setSelectedWebsite={setSelectedWebsite} handleWebsiteChange={handleWebsiteChange}/>
            <div className=" mx-5 md:mb-14 md:mx-30 xl:mx-60 "><Techstack /></div>
            <StartMenu width={width} height={height} langWindowVis={langWindowVis} setLangWindowVis={setLangWindowVis} langSelected={langSelected} browserState={browserState} setBrowserState={setBrowserState} websites={websites} setWebsites={setWebsites} selectedWebsite={selectedWebsite} setSelectedWebsite={setSelectedWebsite} handleWebsiteChange={handleWebsiteChange}/>
            
        </section>
        
        <section className="grid md:text-5xl bg-slate-100 ">
        
            <div>
                
            </div>
            <div className="">
            <AboutCards/>            

            </div>
        </section>
    </div>
    )}