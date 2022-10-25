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
      </Head>
       {/*accordion-collapse collapse show*/}
      <section className='bg-slate-800' id="IDE">
        <IDE/>
      </section>
      <section id="about">
        <AboutMe/>
      </section>
      <section className='bg-gradient-to-br from-purple-300 to-fuchsia-500' id="projects">
        <Projects/>
      </section>
    </Layout>
  )
}
