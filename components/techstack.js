import Image from "next/image"

import scArrow from "../public/images/w95/shortcutarrow.svg"

import js from "../public/images/techstack_icons/javascript.svg"
import py from "../public/images/techstack_icons/python.svg"
import jsn from "../public/images/techstack_icons/json.svg"

import ex from "../public/images/techstack_icons/express-js-icon.svg"
import dj from "../public/images/techstack_icons/django-icon.svg"
import no from "../public/images/techstack_icons/nodejs-icon.svg"

import mg from "../public/images/techstack_icons/mongodb-icon.svg"
import mgo from "../public/images/techstack_icons/7552965.png"
import pg from "../public/images/techstack_icons/postgresql.svg"

import re from "../public/images/techstack_icons/react.svg"
import nx from "../public/images/techstack_icons/nextjs-icon.svg"

import tw from "../public/images/techstack_icons/tailwindcss-icon.svg" 
import mt from "../public/images/techstack_icons/materializecss.svg" 
import bo from "../public/images/techstack_icons/bootstrap.svg" 

//FUTURE IMPLEMENTATIONS
//PiP Browser (iframe) ->Netscape
//Links/shortcuts requiring double click
export default function Techstack(){
    return(
        <container className="">
            <h2 className="text-4xl md:text-7xl py-10">Tech Stack</h2> 
            <div className="flex flex-wrap justify-center">
                   
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15 -left-1 md:left-5 bottom-7 md:bottom-9">
                    <Image
                        src= {scArrow}
                        width="60%"
                        height="60%"
                        alt="Shortcut arrow"
                    />
                    </div>
                    <Image
                        src= {js}
                        width="200%"
                        height="200%"
                        alt="JavaScript"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">JavaScript</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.python.org">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {py}
                        width="200%"
                        height="200%"
                        alt="Python"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Python</p>

                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.json.org">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {jsn}
                        width="200%"
                        height="200%"
                        alt="JSON"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">JSON</p>
                </div>
            </div>
            {/* <h2 className="text-4xl md:text-7xl my-10">Backend frameworks</h2>  */}
            <div className="flex flex-wrap md:flex-nowrap justify-center">
                   
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://nodejs.org">    
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <div className="z-8">
                    <Image
                        src= {no}
                        width="200%"
                        height="200%"
                        alt="Node.js"
                    />
                    </div>
                    </a>
                    <p className="text-2xl md:text-4xl">Node.js</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="htpps://expressjs.com">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {ex}
                        width="200%"
                        height="200%"
                        alt="Express.js"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Express.js</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.djangoproject.com">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <div className="z-7 relative">
                    <Image
                        src= {dj}
                        width="200%"
                        height="200%"
                        alt="Django"
                    />
                    </div>
                    </a>
                    <p className="text-2xl md:text-4xl">Django</p>
                </div>
                 <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.mongodb.com">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {mg}
                        width="200%"
                        height="200%"
                        alt="MongoDB"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">MongoDB</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://mongoosejs.com">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {mgo}
                        width="200%"
                        height="200%"
                        alt="Mongoose"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Mongoose</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-9">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {pg}
                        width="200%"
                        height="200%"
                        alt="PostgreSQL"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">PostgreSQL</p>
                </div>
            </div>
            {/* <h2 className="text-4xl md:text-7xl my-10">React</h2>  */}
            <div className="flex flex-wrap flex-wrap md:flex-nowrap justify-center">
                   
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-16">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {re}
                        width="200%"
                        height="200%"
                        alt="MongoDB"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">React</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-16">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {nx}
                        width="200%"
                        height="200%"
                        alt="Mongoose"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Next.js</p>
                </div>
                   
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-16">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {tw}
                        width="200%"
                        height="200%"
                        alt="Tailwind CSS"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Tailwind CSS</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-16">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {mt}
                        width="200%"
                        height="200%"
                        alt="Materialize CSS"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Materialize</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center relative shortcut">
                    <a target="_blank" href="https://www.javascript.com/">
                    <div className="absolute bg-white z-10 w-8 md:w-15 h-8 md:h-15  -left-1 md:left-5 bottom-7 md:bottom-16">
                        <Image
                            src= {scArrow}
                            width="60%"
                            height="60%"
                            alt="Shortcut arrow"
                        />
                    </div>
                    <Image
                        src= {bo}
                        width="200%"
                        height="200%"
                        alt="Boostrap"
                    />
                    </a>
                    <p className="text-2xl md:text-4xl">Boostrap</p>
                </div>
            </div>

        </container>
    )
}