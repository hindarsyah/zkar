import InfoContact from '../components/contact/InfoContact'
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import iconEmail from '../assets/img/email.png'
import iconWa from '../assets/img/whatsapp.png'
import iconMaps from '../assets/img/maps.png'

export default function Contact(){
    return (
        <div className="p-10 px-10">
            <Title title={"Contact"}/>
            <div className="flex flex-col md:flex-row gap-28 justify-center md:justify-start items-center px-5 mt-10 min-h-screen">
                <div className="md:w-[50%] shadow-[5px_8px_5px_rgba(8,145,178,0.7)] px-7 py-14 rounded-lg">
                    <h1 className="mb-5 text-2xl uppercase font-semibold dark:text-cyan-50">Let&apos;s discuss your project</h1>
                    <InfoContact icon={iconWa} title={"Whatsapp"} contact={""}/>
                    <InfoContact icon={iconEmail} title={"Email"} contact={"xxxx@gmail.com"}/>
                    <InfoContact icon={iconMaps} title={"Official Address"} contact={"Jakarta"}/>
                </div>    
                <div className="md:w-[50%]">
                    <h1 className="mb-5 text-2xl lg:text-3xl uppercase font-semibold dark:text-cyan-50">I&apos;am always open to discussing product <span className="font-bold text-cyan-700 dark:text-cyan-500">design work</span> or <span className="font-bold text-cyan-700 dark:text-cyan-500">partnership.</span></h1>
                    <form>
                        <TextInput placeHolder={"Name"}/>
                        <TextInput placeHolder={"Email"}/>
                        <TextInput placeHolder={"Subject"}/>
                        <TextArea placeHolder={"Message"}/>
                        <button className="btn btn-info text-white mt-4">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
