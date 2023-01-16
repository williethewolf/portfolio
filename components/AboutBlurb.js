//Bg imports
import aboutBg from "../public/images/color_bg.svg"
import greyBg from "../public/images/grey_bg.svg"

//Video Imports

export default function AboutBlurb(){
    return(
        <>
<div className='w-full text-center bg-center' style={{
      backgroundImage: `url(${aboutBg.src})`,
      backgroundSize: 'cover'
    }}>
        {/* <h1 className="text-5xl md:text-7xl md:mr-20 flex flex-row-reverse"><p className="bg-white p-1">About me</p></h1> */}
        <div className="" style={{
      backgroundImage: `url(${greyBg.src})`,
      backgroundSize: 'cover'}}> 
        <h1 className="text-5xl md:text-8xl"><p className="p-1">About me</p></h1>
        </div>
    <div className="max-w-9xl mx-auto py-10">

        <div className="flex justify-center gap-20 flex-wrap">
            <div className="rounded-lg shadow-lg bg-white max-w-sm my-10">
                <a href="#!">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Maker</h5>
                <p className="text-gray-700 text-base mb-4">
                Through the power of creation, I bring ideas to fruition. From a spark of inspiration all the way to a finished work. Any kind of content you can think of, I can make it happen. I want to see your vision become its best reality. Hablamos Español.
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Hackerman</h5>
                <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white max-w-sm my-10">
                <a href="#!">
                <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt=""/>
                </a>
                <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Tinkerer</h5>
                <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}