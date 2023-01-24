import {useState, useEffect} from 'react';
import Image from "next/image"
import Draggable from 'react-draggable';
import restrictedGif from "../public/images/restricted.gif"

export default function MagicWordModal({audioToggle, setShowModal}){

    return (
            
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <Draggable
            //aalows for passthrough to button while on mobile using react-draggable
            cancel=".cancel"
            >
                <div  className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="bg-stone-300  py-1 flex justify-between">
                        <span className="pl-3">Magic_word.exe</span>
                        <ul className="flex justify-end">
                            <li className="">
                                        <button className='bg-stone-300 px-2 hover:bg-stone-600 px-2'>-</button>
                                        <button className="bg-stone-300 px-2 hover:bg-stone-600 px-2">□</button>
                                        <button className="bg-stone-300 px-2 hover:bg-stone-600 px-2 cancel" onClick={() => { audioToggle(); setShowModal(false) }}>x</button>
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
    )
}