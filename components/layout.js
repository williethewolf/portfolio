import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ReactTypingEffect from 'react-typing-effect';

import profilePic from "../public/images/wotempprofile2.jpg"
import profileBg from "../public/images/profilebg.png"
import Terminal from '../pages/terminal'
import Navbar from './navBar'

const name = 'Willie 8A'
export const siteTitle = 'Willie 8A - Hackerman'

const ProfileImage = () => (
    <Image
      priority
      src= {profilePic}
      height={344}
      width={344}
      alt="Willie Ochoa"
      placeholder="blur"
      className={utilStyles.borderCircle}
    />
  )

  const BackgroundImage = () => (
    <Image
    src={profileBg}
    layout="fill"
    placeholder="blur"
    objectFit='contain'
    objectPosition='center'
    />
  )

export default function Layout({ children, home }) {
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
                // WHAT IS THIS?
                //
                name="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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
                        <div className=''><ProfileImage/></div>
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
                        <ProfileImage width={108} height={108}/>
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
                <a>??? Back to home</a>
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