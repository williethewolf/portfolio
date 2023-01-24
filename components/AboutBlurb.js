import { useState, useEffect } from "react";

export default function AboutBlurb({width}){
    
    const [isHidden, setIsHidden] = useState(false);

    useEffect( ()=>{
        width < 500 ?
        setIsHidden(true):
        setIsHidden(false)
        },[width])
    
    return(
        <>
<div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 w-3/4 m-auto mt-10 text-lg text-justify">
    <p>
        As a software developer with a background in film, media content, and advertising,
        I bring a unique blend of creativity and technical expertise to the field. 
        My experience in film production, including creating pitch decks and sizzle reels, 
        paired with my passion for software engineering, has allowed me to excel in projects
        that blend entertainment and technology.
    </p>
    <br />
    <div className={`${isHidden ? "hidden" : "block"} transform transition-all duration-1000 ease-in-out`}>
            <p> 
                With hands-on experience in web development using JavaScript and Python, 
                and proficiency in various frameworks and libraries such as React, Django, 
                Express, MongoDB, and PSQL, I am confident in my ability to create and manage 
                projects from start to finish. My early experience in QBasic and HTML, as well 
                as my more recent work with Unity 3D, VR, and AI showcases my adaptability 
                and aptitude for learning new technologies.
            </p>
            <br />
            <p> 
                In addition to my technical skills, I bring strong research abilities, a 
                willingness to take on new challenges, and excellent organizational and computer 
                skills. As a fluent speaker of English and Spanish, and a fast learner of new 
                languages, I am well-suited to work in diverse, international teams.
            </p>
            <br />
            <p>
                My experience managing a retail business for 8 years has also honed my leadership 
                and management skills and a focus on delivering results.
        </p>
        <hr className="my-6 border-gray-300" />
            <p>
                Currently, I am working on and learning about AI projects and training models using 
                python, and I’m eager to apply my skills and knowledge to the right company to help 
                bring innovative and engaging projects to life.
            </p>
    </div>
        {width < 500 ? (
                <div className="text-right">
                    <button className="font-black" onClick={() => {
                        setIsHidden(!isHidden);
                    }}>{isHidden ? "Read More" : "Show Less"}</button>
                </div>
            ) : null}
        </div>
        <div className="text-center">
  <button
    type="button"
    className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
  >
    Visit my Github
  </button>
  </div>
        </>
    )
}