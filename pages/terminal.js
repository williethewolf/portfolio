import ReactTypingEffect from 'react-typing-effect'

export default function Terminal() {
    return (
        <section className="w-full">
            <div  className="bg-neutral-900 py-5 px-5 h-52 md:h-62 md:px-8 md:py-8">
            <h2 className="terminal_text text-2xl md:text-4xl md:text-3xl text-white lg:grid grid-cols-4 gap-6"><div className='inline-block'>{">"}willieOchoa@8A:~/portfolio$</div> <ReactTypingEffect  className="col-span-3 pl-5"text={[
                "npx create-next-app willie-ochoa-personal-portfolio",
                'echo "$(<$willie_ochoa_interesting facts.txt)',
                "I'm passionate about AI and VR",
                "I made my first game using BASIC on an old laptop at age=10",
                "I'm a software engineer and I take it very seriously",
                "I've been very absorved by Stable Diffusion prompting",
                "I made a very innovative VR game for Google Carboard and relased it on the play store",
                "I've worked with some of the top Dota2 teams (EG & OG)",
                "I used to make movies and have a passion for the media (and I still do!)",
                "Jurassic Park would have been a success if they didn't skim on paying Dennis Nedry",
                ]} speed = {38} eraseSpeed= {20} cursor={"█"}/></h2>
            </div>
        </section>
    )}