import Title from '../components/Title'
import aboutPhoto from '../assets/img/about_me.png'
import StudyTime from '../components/about/StudyTime'

export default function About(){
    return (
        <div>        
            <Title title={"About"}/>

            <div className="flex flex-col lg:flex-row items-center gap-5 m-5 md:m-10 lg:px-24 lg:h-screen">     
                <div className="flex flex-col items-center">
                    <img src={ aboutPhoto } className="w-72"/>
                    <label className="text-slate-600 dark:text-slate-50 text-sm">Illustration by <a href="https://icons8.com/illustrations/author/ODexzOcCgAMh">Finn Reville</a> from <a href="https://icons8.com/illustrations">Ouch!</a></label>
                </div>
                <div className="m-5">
                    <h1 className="mb-2 text-2xl text-cyan-700 dark:text-cyan-500 font-bold uppercase"><span className="text-cyan-900 dark:text-cyan-50">I&apos;am </span>Erin</h1>
                    <h3 className="font-bold text-1xl text-xl text-cyan-950 dark:text-cyan-50">Student who interested in <span className="text-cyan-700 dark:text-cyan-500">Web Development</span> and <span className="text-cyan-700 dark:text-cyan-500">Flutter Development</span> based in <span className="text-cyan-700 dark:text-cyan-500">Indonesia</span></h3>
                    <p className="text text-slate-600 dark:text-slate-300 mt-3">I learn about how to makes website and mobile app from sratch. Start in learn basic HTML, CSS, Javascript and Dart.</p>
                    <div className="divider divider-vertical"/>
                    
                    <div className="flex flex-col lg:flex-row gap-5 mb-6 w-full">
                        <StudyTime time={1} desc={"Years Of Study Programming"}/>
                        <StudyTime time={6} desc={"Month Of Study Flutter"}/>
                        <StudyTime time={3} desc={"Month Of Study Web"}/>
                    </div>
                </div>

            </div>

        </div>
    )
}
