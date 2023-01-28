import {useEffect, useState} from "react"
import Image from "next/image"
import IDElogo from "../public/images/Visual_Studio_Code_1.35_icon.svg"

//Modal imports
import MagicWordModal from "./MagicWordModal";
import restrictedaudio from '../public/audio/magicword.mp3'
import restrictedaudioLoop from '../public/audio/magicword_loop.mp3'

export default function Navbar() {

//Sticky navbar
    const [sticky, setSticky] = useState(false)

    function setStickied(){
        const navbar = document.getElementById('Navigation')
        let navbarPos = navbar.offsetTop
        let navbarStickyPos= navbar.parentElement.offsetTop
        if(window.scrollY >navbarPos){
                setSticky(true)
        }
        if(window.scrollY <=navbarStickyPos){
            setSticky(false)
        }
    }
    if (typeof window !== "undefined") {
    window.addEventListener("scroll",setStickied)
    }

//Modal Display
    const [showModal, setShowModal] = useState(false);

 //Audio playback

 const [audio, setAudio] = useState(null)

    
 useEffect(() => {
 setAudio(new Audio(restrictedaudio))
 // only run once on the first render on the client
 }, [])

 const [audioPlaying, setAudioPlaying] = useState(false)

 useEffect(() => {
     if (audio)
     audioPlaying ? audio.play() : audio.pause(), audio.currentTime = 0;
   },
   [audioPlaying]
 );

 const audioToggle = () => setAudioPlaying(!audioPlaying)

 useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => {
        const newAudio = new Audio(restrictedaudioLoop);
        setAudio(newAudio);
        newAudio.currentTime = 0;
        newAudio.play();
      });
    }
  }, [audio]);


//Fullscreen gimmick
const [isFullscreen, setIsFullscreen] = useState(false);

// Watch for fullscreenchange
function toggleFullscreen() {
    if (isFullscreen) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
          
    document.addEventListener('fullscreenchange', onFullscreenChange);
  
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

    return (
        <>
            {showModal ? (
               
               <MagicWordModal audioToggle={audioToggle} setShowModal={setShowModal}/>
            
        ) : null}

        <nav className={`bg-stone-80 z-30 w-full ${sticky ? "stickyfix" : "" }`} id="Navigation">
                        <div className="flex h-100 text-sm md:text-xl p-1 bg-stone-800">
                            <span className='mx-3 flex hidden md:block md:w-6'>
                            <Image
                                priority
                                src= {IDElogo}
                            
                                alt="Willie Ochoa"
                            />  
                            </span>
                         <div className=" flex justify-between w-full ">
                        <ul className='text-stone-100 mx-3 md:mr-12 flex h-full'>
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2" href="#projects">Projects</a></li>
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2" href="#IDE">Resume</a></li>
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2" href="#about">About</a></li>
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a href="https://www.linkedin.com/in/willie-ochoa/" target="_blank">Contact</a></li>
                            {/* <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2">Blog</a></li> */}
                           
                        </ul>
                        <span className="hidden md:block text-stone-100"> Willie-Ochoa-resume.js</span>
                        <ul className='text-stone-100  flex'>
                            
                            <li className='hidden md:block pl-3'>
                                <button className='hover:bg-stone-600 type="button" data-bs-toggle="collapse" data-bs-target="#IDE" aria-expanded="true" aria-controls="IDE" border px-2'>-</button>
                                <button className="hover:bg-stone-600 border px-2"  onClick={toggleFullscreen}>□</button>
                                <button className="hover:bg-stone-600 border px-2" onClick={() => {setShowModal(true); audioToggle()}}>x</button>
                            </li>
                        </ul>
                        </div> 
                        </div>
                    </nav>
    </>
    )}