
export default function IDE() {
    return (
        <div className="font-mono text-xl w-100 md:w-full p-3 pb-10 md:px-10">
            <h1 className="text-white p-2 md:p-5">RESUME</h1>
            <container className="md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>  
                    <div>
                        <span className="text-purple-500">class </span><span className="text-yellow-400">Resume{' {'}</span>
                        <div>
                            <span className="text-purple-500">constructor</span><span className="text-purple-300">(</span><span className="text-red-400">title<span className="text-sky-300">,</span> skills<span className="text-sky-300">,</span> experience<span className="text-sky-300">,</span> projects<span className="text-sky-300">,</span> education</span><span className="text-purple-300">){'{'}</span>
                            <ul className="indent-10">
                                <li><span className="text-red-500">this</span><span className="text-sky-300">.</span><span className="text-white">title</span> <span className="text-sky-300">=</span> <span className="text-red-400">title</span><span className="text-sky-300">,</span></li>
                                <li><span className="text-red-500">this</span><span className="text-sky-300">.</span><span className="text-white">skills</span> <span className="text-sky-300">=</span> <span className="text-red-400">skills</span><span className="text-sky-300">,</span></li>
                                <li><span className="text-red-500">this</span><span className="text-sky-300">.</span><span className="text-white">experience</span> <span className="text-sky-300">=</span> <span className="text-red-400">experience</span><span className="text-sky-300">,</span></li>
                                <li><span className="text-red-500">this</span><span className="text-sky-300">.</span><span className="text-white">projects</span> <span className="text-sky-300">=</span> <span className="text-red-400">projects</span><span className="text-sky-300">,</span></li>
                                <li><span className="text-red-500">this</span><span className="text-sky-300">.</span><span className="text-white">education</span> <span className="text-sky-300">=</span> <span className="text-red-400">education</span><span className="text-sky-300">,</span></li>
                            </ul>
                            <p className="text-purple-300 indent-10">{'}'}</p>
                        </div>
                        <span className="text-yellow-400"> {'}'}</span>
                    </div>
                </div>
                <div>  
                    <div>
                        <span className="text-purple-500">let</span><span className="text-white"> willieOchoa</span> <span className="text-sky-300">= new</span> <span className="text-yellow-400"> Resume</span>
                        <div>
                            <ul className="indent-10">
                                <li><span className="text-white">willieOchoa</span><span className="text-sky-300">.</span><span className="text-white">title</span> <span className="text-sky-300">=</span> <span className="text-sky-300">"</span><span className="text-lime-300">Full Stack Software Engineer</span><span className="text-sky-300">"</span></li>
                                <li><span className="text-white">willieOchoa</span><span className="text-sky-300">.</span><span className="text-white">skills</span> <span className="text-sky-300">=</span> 
                                <span className="text-yellow-500">[</span>
                                    <div className="indent-44 md:indent-56">
                                    <ul>
                                        <li><span className="text-yellow-500">[</span><span className="text-sky-300">"</span><span className="text-lime-300">JavaScript</span><span className="text-sky-300">"</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">React</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">Next.js</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">Express</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">MongoDB</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">Mongoose</span><span className="text-sky-300">"</span><span className="text-sky-300"></span></li>
                                        <li className="text-yellow-500">]<span className="text-sky-300">,</span></li>
                                    </ul>
                                    <ul>
                                        <li><span className="text-yellow-500">[</span><span className="text-sky-300">"</span><span className="text-lime-300">Python</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">Django</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                        <li><span className="text-sky-300">"</span><span className="text-lime-300">PostgreSQL</span><span className="text-sky-300">"</span><span className="text-sky-300"></span></li>
                                        <li className="text-yellow-500">]</li>
                                    </ul>
                                    <p className="text-yellow-500 indent-52">]</p>
                                    </div>
                                </li>
                                <li><span className="text-white">willieOchoa</span><span className="text-sky-300">.</span><span className="text-white">experience</span> <span className="text-sky-300">=</span> <span className="text-yellow-500">[</span>
                                    <ul className="indent-32 md:indent-52">
                                        <li><a target="_blank" href="https://www.linkedin.com/in/willie-ochoa-675b35246/"><span className="text-yellow-400">Link</span><span className="text-white"> to </span><span className="text-purple-300 underline">Linkedin</span></a><span className="text-sky-300">, </span></li>
                                        <li><a href="#"><span className="text-yellow-400">Link</span><span className="text-white"> to </span><span className="text-purple-300 underline">resume PDF</span></a><span className="text-sky-300"> </span></li>
                                        <li><span className="text-yellow-500">]</span></li>
                                    </ul>
                                </li>
                                <li><span className="text-white">willieOchoa</span><span className="text-sky-300">.</span><span className="text-white">projects</span> <span className="text-sky-300">=</span> <span className="text-yellow-500">[</span>
                                    <ul className="indent-32 md:indent-52">
                                        <li><a target="_blank" href="https://github.com/williethewolf/"><span className="text-yellow-400">{'{'}Link</span><span className="text-white"> to </span><span className="text-purple-300 underline">GitHub</span><span className="text-yellow-400">{'}'}</span></a><span className="text-sky-300">, </span></li>
                                        <li><a href="#projects"><span className="text-yellow-400">Link</span><span className="text-white"> to </span><span className="text-purple-300 underline">Projects Section</span></a><span className="text-sky-300"> </span></li>
                                        <li><span className="text-yellow-500">]</span></li>
                                    </ul>
                                </li>
                                <li><span className="text-white">willieOchoa</span><span className="text-sky-300">.</span><span className="text-white">education</span> <span className="text-sky-300">=</span> <span className="text-yellow-500">[</span>
                                    <ul className="ml-8">
                                    <li><p><span className="text-sky-300">"</span><span className="text-lime-300">General Assembly Software Engineering Immersive Bootcamp</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></p></li>
                                    <li><span className="text-sky-300">"</span><span className="text-lime-300">Master of Fine Arts on Filmmaking</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                    <li><span className="text-sky-300">"</span><span className="text-lime-300">Mass Media Communication Bachelors Degree</span><span className="text-sky-300">"</span><span className="text-sky-300">,</span></li>
                                    <li><span className="text-yellow-500">]</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </container>
           
        </div>
    )
}