import profile from '../assets/img/profile.jpg'
import MediaSocial from '../components/profile/MediaSocial'

export default function Profile(){
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row gap-24 md:gap-36 lg:gap-52">
                <img src={profile} className="max-w-[250px] sm:max-w-sm md:max-w-xs lg:max-w-sm rounded-full shadow-2xl" />
                <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-extrabold absolute top-[320px] sm:top-[450px] md:top-auto bottom-auto md:left-auto text-cyan-950 drop-shadow-[-12px_3px_0px_rgba(255,255,255,1)]">Hi.</h1>
                <div className="mt-4">
                    <h2 className="flex flex-wrap flex-col sm:flex-row gap-4 text-4xl text-cyan-600 dark:text-cyan-50">
                        <span>I&apos;am </span>
                        <span className="uppercase bg-cyan-700 text-cyan-50 font-bold rounded-full px-3 text-center w-[80%] whitespace-nowrap text-lg sm:text-2xl md:text-lg animate-bounce">Andy Eka Mulya</span>
                    </h2>
                    <p className="py-6 text-cyan-600 dark:text-cyan-50 md:text-sm">I&apos;am a <span className="uppercase font-bold text-cyan-800 dark:text-cyan-500 md:text-sm lg:text-lg">Junior Front-End Developer</span></p>
                    
                    <div className="flex gap-5 justify-end">
                        <MediaSocial />
                    </div>
                </div>
            </div>
        </div>
    )
}