import Image from 'next/image'

//Bg imports
import aboutBg from "../public/images/color_bg.svg"
import greyBg from "../public/images/grey_bg.svg"
import AboutBlurb from "./AboutBlurb"

import HackermanPic from "../public/images/Hackerman.png"
import Makerpic from "../public/images/Maker.png"
import Tinkererpic from "../public/images/Tinkerer.png"

//Video Imports

export default function AboutCards({width}){
    return(
        <>
<div className='w-full text-center bg-center' style={{
      backgroundImage: `url(${aboutBg.src})`,
      backgroundSize: 'cover'
    }}>
        <div className="" style={{
      backgroundImage: `url(${greyBg.src})`,
      backgroundSize: 'cover'}}> 
        <h1 className="text-5xl md:text-8xl"><p className="p-1">About me</p></h1>
        </div>
        <AboutBlurb width={width} />
    <div className="max-w-9xl mx-auto py-10">

        <div className="flex justify-center gap-20 flex-wrap">
            <div className="rounded-lg shadow-lg bg-white max-w-sm my-10">
                <a href="#!">
                <Image
                src={Makerpic}
                placeholder="blur"
                objectFit='contain'
                className="rounded-t-lg"
                objectPosition='center'
                />
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-2xl font-medium mb-2">Maker</h5>
                <div className="text-gray-700 text-base mb-4">
                <p>My background as an artist and filmmaker are extensions of who I truly am:</p>
                <br />
                <p className="text-xl font-bold"> I'm a maker.</p>
                 <br />
                 <p>As such, I rejoice by bringing ideas to fruition. From a spark of inspiration all the way to a finished piece.</p>
                 <br />
                 <p>Films, Ads, sculptures, 3D printing, casting and practical SFX, games and boardgames. All my life I have created that which I wanted to see.</p>
                </div>
                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                <Image
                src={HackermanPic}
                placeholder="blur"
                objectFit='contain'
                className="rounded-t-lg"
                objectPosition='center'
                />
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-2xl font-medium mb-2">Hackerman</h5>
                <div className="text-gray-700 text-base mb-4">
                    <p>A tinkerer? A maker? Software engineering was the only logical reduction of my pursues.</p>
                    <br />
                    <p>A place to create, with almost limitless capabilities. A place to tinker, and improve, where features can be added, and removed.</p>
                    <br />
                    <p>After a stint developing indie videogames and creating content for the esports industry, I came to the realization:</p>
                    <br />
                    <p className="text-3xl font-bold">I am Hackerman</p>
                </div>
                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white max-w-sm my-10">
                <a href="#!">
                <Image
                src={Tinkererpic}
                placeholder="blur"
                objectFit='contain'
                className="rounded-t-lg"
                objectPosition='center'
                />
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-2xl font-medium mb-2">Tinkerer</h5>
                <div className="text-gray-700 text-base mb-4">
                    <p> Coming from a long lineage of engineers, I'm genetically conditioned to remain curious and to tinker.</p>
                    <br />
                    <p className="text-xl font-bold">I am a Tinkerer</p>
                    <br />
                    <p>Can it be improved? Simplified? Maybe it's not quite working but... just a little adjustment and we can get it there? You be sure I'll try</p>
                    <br />
                    
                    <p>If it can be modded; If I can find out what's making it work... and what doesn't;
                    I won't rest until I know how I can make it work for me.</p>
                </div>
                {/* <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}