import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

import { useState } from 'react'

import profilePic from "../public/images/woprofile.jpg"
import altProfilePic from "../public/images/wotempprofile2.jpg"
import profileBg from "../public/images/profilebg.png"
import Terminal from '../pages/terminal'
import Navbar from './navBar'

const name = 'Willie 8A'
export const siteTitle = 'Willie 8A - Hackerman | Software Engineer'


export default function Layout({ children, home }) {
    const [isHovering, setIsHovering] = useState(false)

    const ProfileImage = () => {
        
    
        return (
            <Image
              priority
              src={isHovering ? altProfilePic : profilePic}
              height={344}
              width={344}
              alt="Willie Ochoa"
              placeholder="blur"
              className={utilStyles.borderCircle}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
        )
    }

    return (
    <div className="">
        <Head>
            <link rel="icon" href="/favicon.ico"/>
            <meta
                name="description"
                content="This is the porfolio site for Willie Ochoa, a Full Stack Software engineer"
            />
            <meta
                //
                // OpenGraph stuff to show the image of the wbsite on the preview links
                //
                name="og:image"
                content={`https://user-images.githubusercontent.com/74451917/213058037-869510e4-1793-4cc8-8519-e51aef5e6de5.png`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="sumary_large_image" />
            <link href="/dist/output.css" rel="stylesheet"></link>
        </Head>

        <header className={styles.header}>
            {home ? (
                <>
                    <div className='w-full text-center bg-center' style={{
      backgroundImage: `url(${profileBg.src})`,
      backgroundSize: 'cover'
    }}>
                        
                    <div className='my-5 md:my-20'>
                        <div className=''><ProfileImage isHovering={isHovering} setIsHovering={setIsHovering} width={108} height={108} /></div>
                    </div>
                    <h1 className=" text-white text-6xl ochoa_logo mb-6 md:text-9xl stroked_text"><ReactTypingEffect text={name} speed = {100}  eraseDelay = {9999999999} eraseSpeed= {50} cursor={" "}/></h1>
                    </div>
                    <Terminal/>
                    <div className='w-full'><Navbar/></div>
                    
                </>
            ) : (
                <>
                <Link href="/">
                    <a>
                    <ProfileImage isHovering={isHovering} setIsHovering={setIsHovering} width={108} height={108} />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={`terminal_text ${utilStyles.colorInherit}`}>{name}</a>
                    </Link>
                </h2>
                </>
            )
        }
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
      )}
        <footer>
            <div>
                <div className='grid grid-cols-3 justify-items-center'>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>  
        </footer>
    </div>
    )
}