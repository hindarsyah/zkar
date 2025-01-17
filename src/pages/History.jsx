import Title from '../components/Title'
import historyPhoto from '../assets/img/history.png'
import AccordionEdu from '../components/histori/AccordionEdu'
import AccordionInterest from '../components/histori/AccordionInterest'
import AccordionCertificate from '../components/histori/AccordionCertificate'

export default function History(){
    return (
        <div>
            <div className="mx-5 my-10">
                <Title title={"History"} />
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col-reverse md:flex-row items-baseline justify-between gap-8 lg:gap-16 md:mx-10">
                        <div>
                            <h1 className="text-2xl uppercase mb-2 font-semibold dark:text-white"><span className="text text-cyan-800 dark:text-cyan-500">Education</span> & <span className="text-cyan-600 dark:text-cyan-400">Interest</span></h1>
                            <p className="text-slate-600 dark:text-slate-300 text-lg">This Section for history of my education and what i interested in</p>
                        </div>
                        <div className="flex flex-col w-full md:w-auto items-center md:items-baseline">
                            <img src={ historyPhoto } />
                            <label className="text-slate-600 dark:text-slate-50 text-sm">Illustration by <a href="https://icons8.com/illustrations/author/kP9rc8JiBCcz">Irene M. Ray</a> from <a href="https://icons8.com/illustrations">Ouch!</a></label>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 mt-10">
                        <AccordionEdu />
                        <AccordionInterest />
                        <AccordionCertificate />
                    </div>
                </div>
            </div>
        </div>
    )
}