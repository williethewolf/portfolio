import Techstack from "../components/techstack";
import StartMenu from "../components/StartMenubar";
import BrowserWindow from "../components/BrowserWindow";
import React, {useState, useEffect, useRef} from 'react';


export default function AboutMe() {
    //to calculate the width of the element and pass it later as props
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
    //put ref in div ref={elementRef}
    
    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setWidth(Math.trunc(elementRef.current.getBoundingClientRect().width));
            setHeight(Math.trunc(elementRef.current.getBoundingClientRect().height));
        }

        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    
    return (
    <div className="w-full">
        <section className="w-full win95" id="desktop"  ref={elementRef}>
            <BrowserWindow url="https://www.google.com"  width ={width} height= {height}/>
            <div className=" mx-5 md:mb-14 md:mx-60 "><Techstack /></div>
        <StartMenu />
            
        </section>
        
        <section className="grid md:text-5xl bg-slate-100 pb-16 ">
        <h1 className="text-5xl md:text-7xl m-5 md:mr-20 text-right">About me</h1>
            <div >
                
               </div>
            <div className="flex flex justify-center items-center">
                <img src="https://picsum.photos/2524/600" alt="" className=""/>
            
            </div>
            <div className="mx-5 md:mx-60">
            <p>Lorem fistrum me cago en tus muelas torpedo jarl diodenoo al ataquerl de la pradera. Va usté muy cargadoo me cago en tus muelas diodeno benemeritaar ese hombree no te digo trigo por no llarl ese pedazo de te voy a borrar el cerito caballo blanco caballo negroorl fistro quietooor. Hasta luego Lucas hasta luego Lucas torpedo apetecan hasta luego Lucas hasta luego Lucas amatomaa sexuarl. No te digo trigo por no llamarte Rodrigor torpedo por la gloria de mi madre apetecan de la pradera.</p>
            </div>
        </section>
    </div>
    )}