import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import IDE from './IDE'
import Projects from './projects'
import AboutMe from './aboutme'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      </Head>
      <section className='bg-slate-800' id="IDE">
        <IDE/>
      </section>
      <section id="about">
        <AboutMe/>
      </section>
      <section 
      className='bg-gradient-to-br from-purple-600 to-fuchsia-400' 
      id="projects">
        <Projects/>
      </section>
    </Layout>
  )
}
