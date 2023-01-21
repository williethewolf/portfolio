import React, {useState, useEffect,} from 'react';
import Clock from "../components/clock";
import w95Logo from "../public/images/w95/w95logo.svg"
import Image from "next/image";


export default function StartMenu ({browserState, setBrowserState, langSelected, setLangWindow, websites, selectedWebsite, setSelectedWebsite, handleWebsiteChange}){
    const [showStartMenu, setShowStartMenu] = useState(false)
    
    //StartMenu submenus
    const [showLangMenu, setShowLangMenu] = useState(false)
    const [showFilmMenu, setShowFilmMenu] = useState(false)

  
    const IMDBStartMenuButton = () => {
            return (
                <li className="w95StartMenuEle w-100 px-4 py-2">
            <button onClick={() => {
                browserState === "inactive" ?
                setBrowserState("open") && setSelectedWebsite(websites[0]) 
                : selectedWebsite === websites[0] ?
                    setBrowserState("inactive") : setSelectedWebsite(websites[0]);
            }}>
                <span>IMDB</span>
            </button>
        </li>
            )
                
    }
    const YTREELtartMenuButton = () => {
        return (
            <li className="w95StartMenuEle w-100 px-4 py-2">
        <button onClick={() => {
            browserState === "inactive" ?
            setBrowserState("open") && setSelectedWebsite(websites[1]) 
            : selectedWebsite === websites[1] ?
                setBrowserState("inactive") : setSelectedWebsite(websites[1]);
        }}>
            <span>Reel</span>
        </button>
    </li>
        )
    }
    const WWWEBStartMenuButton = () => {
        return (
            <li className="w95StartMenuEle w-100 px-4 py-2">
        <button onClick={() => {
            browserState === "inactive" ?
            setBrowserState("open") && setSelectedWebsite(websites[2]) 
            : selectedWebsite === websites[2] ?
                setBrowserState("inactive") : setSelectedWebsite(websites[2]);
        }}>
            <span>WW Web</span>
        </button>
    </li>
        )
    }

    const Browsertaskbarbutton = () => {
        if (browserState == "inactive"){
            return (
                <button onClick={() =>{setBrowserState("open")}}>
                    <span className="text-lg lg:text-xl flex taskbarItem p-1 lg:p-1 w95StartMenuEle">Notscape Navigator</span>
                </button>
                )
        }
        else if ( browserState== "open"){
            return (<button onClick={() =>{setBrowserState("inactive")}}>
            <span className="taskbarItem selected p-2 w95StartMenuEle">Notscape Navigator</span>
        </button>
            )
        }
        else return null
    }

    const Languagestaskbarbutton = () => {
        if (languagesWindowState == "inactive"){
            return (
                <button onClick={() =>{setBrowserState("open")}}>
                    <span className="text-lg lg:text-xl flex taskbarItem p-1 lg:p-1">language</span>
                </button>
                )
        }
        else if ( languagesWindowState== "open"){
            return (<button onClick={() =>{setBrowserState("inactive")}}>
            <span className="taskbarItem selected p-2">language</span>
        </button>
            )
        }
        else return null
    }

    // const disableLinks={
    //     pointer-events: 'none';
    // }

    return (
        <div className=" bg-gray-300 flex justify-between relative text-xl">
                <div> 
                <button onClick={() => {setShowStartMenu(!showStartMenu)}} className="w95StartButton p-1">
                    <div className="text-lg lg:text-xl border border-dashed border-gray-400 ">
                        <Image
                        src= {w95Logo}
                        width="15%"
                        height="15%"
                        alt="w95logo"
                        /> 
                        &nbsp;Start
                    </div>
                </button>
                {Browsertaskbarbutton()}
                {/* enable later when implemented */}
                {/* {Languagestaskbarbutton()} */}
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
                                    <div className="w-full"><span className="pr-4">Spoken Languages</span><span className="absolute right-0">➤</span></div>
                                    { showLangMenu ? (
                            <ul className=" bg-gray-300 w95StartSubMenu  top-0">
                                <li className="w95StartMenuEle w-100 px-4 py-2">English</li>
                                <li className="w95StartMenuEle px-4 py-2">Spanish</li>
                                <li className="w95StartMenuEle px-4 py-2">Italian</li>
                                <li className="w95StartMenuEle px-4 py-2">French</li>

                            </ul>
                                    ) : null}
                            </li>
                            <li className="pl-4 py-2 w95StartMenuEle"
                             onMouseEnter={() => setShowFilmMenu(true)}
                             onMouseLeave={() => setShowFilmMenu(false)}>
                                <div className="w-full"><span className="w-full">Film Background&nbsp;&nbsp;&nbsp;<span className="absolute right-0">➤</span></span></div>
                                    { showFilmMenu ? (
                            
                            <ul className=" bg-gray-300 w95StartSubMenu top-14">
                                {IMDBStartMenuButton()}
                                {YTREELtartMenuButton()}
                                {WWWEBStartMenuButton()}

                            </ul>
                                ) : null}
                            </li>
                            <div 
                            // className='hidden'
                            >
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#" className="opacity-50 cursor-not-allowed" style={{pointerEvents: 'none'}}>Other Projects	<span className="absolute right-0">➤</span></a></li>
                            <li className="px-4 py-2 w95StartMenuEle"><a href="#" className="opacity-50 cursor-not-allowed" style={{pointerEvents: 'none'}}>Games 	<span className="absolute right-0">➤</span></a></li>
                            <hr />
                            <li className="px-4 py-2 w95StartMenuEle"><a href="http://williamwolffe.com/pitch/" target="_blank">Pitch Decks</a></li>
                            <li className="px-4 py-2 w95StartMenuEle"><a href="https://stackoverflow.com/search?q=How+to+program+good" target="_blank">Emergencies Only</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                ) : null}
                <div className="border-2 border-gray-400">
                <span className="px-1 lg:px-3 inline-block align-middle text-sm lg:text-xl">{langSelected}</span><Clock/>
                </div>
            </div>
    )

}