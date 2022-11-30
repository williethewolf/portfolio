import React from "react"
import Image from "next/image"
import IDElogo from "../public/images/Visual_Studio_Code_1.35_icon.svg"

//Modal imports
import Draggable from 'react-draggable';
import restrictedGif from "../public/images/restricted.gif"
import restrictedaudio from '../public/audio/magicword.mp3'
import restrictedaudioLoop from '../public/audio/magicword_loop.mp3'

export default function Navbar() {

//Sticky navbar
    const [sticky, setSticky] = React.useState(false)

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
    const [showModal, setShowModal] = React.useState(false);

    
//Audio playback

    const [audio, setAudio] = React.useState(null)
    React.useEffect(() => {
    setAudio(new Audio(restrictedaudio))
    // only run once on the first render on the client
    }, [])

    const [audioPlaying, setAudioPlaying] = React.useState(false)

    React.useEffect(() => {
        if (audio)
        audioPlaying ? audio.play() : audio.pause(), audio.currentTime = 0;
      },
      [audioPlaying]
    );

    const audioToggle = () => setAudioPlaying(!audioPlaying)

    React.useEffect(() => {
        if (audio){
        audio.addEventListener('ended', () => {setAudio(new Audio(restrictedaudioLoop), this.currentTime=0, this.play() )});
        return () => {
          audio.removeEventListener('ended', () => setAudioPlaying(false));
        }
    };
      }, []);
    

//Fullscreen gimmick
const [isFullscreen, setIsFullscreen] = React.useState(false);

// Watch for fullscreenchange
React.useEffect(() => {
  function onFullscreenChange() {
    setIsFullscreen(Boolean(document.fullscreenElement));
  }
        
  document.addEventListener('isFullscreen', onFullscreenChange);

  return () => document.removeEventListener('isFullscreen', onFullscreenChange);
}, []);

    return (
        <>
            {showModal ? (
               
            <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <Draggable
                >
                    <div  className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="bg-stone-300  py-1 flex justify-between">
                            <span className="pl-3">Magic_word.exe</span>
                            <ul className="flex justify-end">
                                <li className="">
                                            <button className='bg-stone-300  px-2 hover:bg-stone-600 px-2'>-</button>
                                            <button className="bg-stone-300  px-2 hover:bg-stone-600 px-2">□</button>
                                            <button className="bg-stone-300  px-2 hover:bg-stone-600 px-2" onClick={() => { audioToggle(); setShowModal(false) }}>x</button>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <Image
                                priority
                                src= {restrictedGif}
                            
                                alt="Restricted"
                            />  
                        </div>
                        {/* Uncomment if considered annoying to give an easier close button */}
                            {/* <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {setShowModal(false); audioToggle() }}
                            >
                                Close
                            </button>               */}
                        </div>
                        </Draggable> 
                </div>
                
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            
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
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2">Contact</a></li>
                            <li className='hover:bg-stone-600 pr-3 md:pr-4 flex'><a className="border md:border-0 border-stone-600 px-2">Blog</a></li>
                           
                        </ul>
                        <span className="hidden md:block text-stone-100"> Willie-Ochoa-resume.js</span>
                        <ul className='text-stone-100  flex'>
                            
                            <li className='hidden md:block pl-3'>
                                <button className='hover:bg-stone-600 type="button" data-bs-toggle="collapse" data-bs-target="#IDE" aria-expanded="true" aria-controls="IDE" border px-2'>-</button>
                                <button className="hover:bg-stone-600 border px-2" onClick={() => {setIsFullscreen(true)}}>□</button>
                                <button className="hover:bg-stone-600 border px-2" onClick={() => {setShowModal(true); audioToggle()}}>x</button>
                            </li>
                        </ul>
                        </div> 
                        </div>
                    </nav>
    </>
    )}