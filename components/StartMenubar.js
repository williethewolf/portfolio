import React from "react";
import Clock from "../components/clock";
import w95Logo from "../public/images/w95/w95logo.svg"
import Image from "next/image";

export default function StartMenu(){
    const [showStartMenu, setShowStartMenu] = React.useState(false)
    const [showBrowser, setShowbrowser] = React.useState(true)

    //To show languages
    const [showLangMenu, setShowLangMenu] = React.useState(false)
    const [langSelected, setSelectedLang] = React.useState("EN")
    const [showLangWindow, setShowLangWindow] = React.useState(false)

    const [showFilmMenu, setShowFilmMenu] = React.useState(false)


    
    return (
        <div className=" bg-gray-300 flex justify-between relative text-xl">
                <div> 
                <button onClick={() => {setShowStartMenu(!showStartMenu)}} className="w95StartButton p-1">
                    <div className="border border-dashed border-gray-400 ">
                        <Image
                        src= {w95Logo}
                        width="15%"
                        height="15%"
                        alt="w95logo"
                        /> 
                        &nbsp;Start
                    </div>
                </button>
                { showBrowser ? (
                    <span className="taskbarItem selected p-2">Notscape Navigator</span>
                ) : null
                }
                </div>
                { showStartMenu ? (
                <div className="w95StartMenu grid grid-cols-5">
                    <div className="hidden md:block bg-gray-400 col-span-1">

                    </div>
                    <div className="col-span-5 md:col-span-4 py-4">
                        <ul>
                            <li className="px-4 py-2 w95StartMenuEle" 
                                onMouseEnter={() => setShowLangMenu(true)}
                                onMouseLeave={() => setShowLangMenu(false)}>
                                    <div className="w-full"><span className="pr-4">Spoken Languages</span>  	<span className="absolute right-0">➤</span></div>
                                    { showLangMenu ? (
                            <ul className=" bg-gray-300 w95StartSubMenu  top-0">
                                <li className="w95StartMenuEle w-100 px-4 py-2">English</li>
                                <li className="w95StartMenuEle px-4 py-2">Spanish</li>
                                <li className="w95StartMenuEle px-4 py-2">Italian</li>
                                <li className="w95StartMenuEle px-4 py-2">French</li>

                            </ul>
                                    ) : null}
                            </li>
                            <li className="px-4 py-2 w95StartMenuEle"
                             onMouseEnter={() => setShowFilmMenu(true)}
                             onMouseLeave={() => setShowFilmMenu(false)}>
                                <div className="w-full"><span href="#">Film Background 	<span className="absolute right-0">➤</span></span></div>
                                    { showFilmMenu ? (
                            
                            <ul className=" bg-gray-300 w95StartSubMenu top-14">
                                <a target="_blank" href="http://imdb.me/williamwolffe"><li className="w95StartMenuEle w-100 px-4 py-2">IMDB</li></a>
                                <li className="w95StartMenuEle px-4 py-2">Reel</li>
                                <li className="w95StartMenuEle px-4 py-2">Website</li>

                            </ul>
                                ) : null}
                            </li>
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#">Other Projects	<span className="absolute right-0">➤</span></a></li>
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#">Games 	<span className="absolute right-0">➤</span></a></li>
                            <hr />
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#">Pitch Decks</a></li>
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#">Emergencies Only</a></li>
                        </ul>
                    </div>
                </div>
                ) : null}
                <div className="border-2 border-gray-400">
                <span className="px-3 inline-block align-middle">{langSelected}</span><Clock/>
                </div>
            </div>
    )

}