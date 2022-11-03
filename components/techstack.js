import Image from "next/image"

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


export default function Techstack(){
    return(
        <container className="">
            <h2 className="text-4xl md:text-7xl py-10">Tech Stack</h2> 
            <div className="flex flex-wrap justify-center">
                   
                <div className="w-1/2 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {js}
                        width="200%"
                        height="200%"
                        alt="JavaScript"
                    />
                    <p className="text-2xl md:text-4xl">JavaScript</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {py}
                        width="200%"
                        height="200%"
                        alt="Python"
                    />
                    <p className="text-2xl md:text-4xl">Python</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {jsn}
                        width="200%"
                        height="200%"
                        alt="JSON"
                    />
                    <p className="text-2xl md:text-4xl">JSON</p>
                </div>
            </div>
            {/* <h2 className="text-4xl md:text-7xl my-10">Backend frameworks</h2>  */}
            <div className="flex flex-wrap md:flex-nowrap justify-center">
                   
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {no}
                        width="200%"
                        height="200%"
                        alt="Node.js"
                    />
                    <p className="text-2xl md:text-4xl">Node.js</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {ex}
                        width="200%"
                        height="200%"
                        alt="Express.js"
                    />
                    <p className="text-2xl md:text-4xl">Express.js</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {dj}
                        width="200%"
                        height="200%"
                        alt="Django"
                    />
                    <p className="text-2xl md:text-4xl">Django</p>
                </div>
                 <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {mg}
                        width="200%"
                        height="200%"
                        alt="MongoDB"
                    />
                    <p className="text-2xl md:text-4xl">MongoDB</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {mgo}
                        width="200%"
                        height="200%"
                        alt="Mongoose"
                    />
                    <p className="text-2xl md:text-4xl">Mongoose</p>
                </div>
                <div className="w-1/3 md:w-1/6 m-3 grid justify-items-center">
                    <Image
                        src= {pg}
                        width="200%"
                        height="200%"
                        alt="PostgreSQL"
                    />
                    <p className="text-2xl md:text-4xl">PostgreSQL</p>
                </div>
            </div>
            {/* <h2 className="text-4xl md:text-7xl my-10">React</h2>  */}
            <div className="flex flex-wrap flex-wrap md:flex-nowrap justify-center">
                   
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {re}
                        width="200%"
                        height="200%"
                        alt="MongoDB"
                    />
                    <p className="text-2xl md:text-4xl">React</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {nx}
                        width="200%"
                        height="200%"
                        alt="Mongoose"
                    />
                    <p className="text-2xl md:text-4xl">Next.js</p>
                </div>
                   
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {tw}
                        width="200%"
                        height="200%"
                        alt="Tailwind CSS"
                    />
                    <p className="text-2xl md:text-4xl">Tailwind CSS</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {mt}
                        width="200%"
                        height="200%"
                        alt="Materialize CSS"
                    />
                    <p className="text-2xl md:text-4xl">Materialize CSS</p>
                </div>
                <div className="w-1/3 md:w-1/5 m-3 grid justify-items-center">
                    <Image
                        src= {bo}
                        width="200%"
                        height="200%"
                        alt="Boostrap"
                    />
                    <p className="text-2xl md:text-4xl">Boostrap</p>
                </div>
            </div>

        </container>
    )
}