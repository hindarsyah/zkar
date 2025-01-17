import Accordion from '../Accordion'

const LabelCertificate = ({ label1, label2 }) => <p className="text-md text-slate-500 dark:text-slate-300"><span className="text-cyan-700 dark:text-cyan-500 font-semibold">{ label1 }</span> { label2 }</p>

const items = [
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Memulai Pemrograman Dengan Dart"} label2={"- Dicoding Indonesia"} />
    },
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Belajar Prinsip Pemrograman SOLID"} label2={"- Dicoding Indonesia"} />
    },
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Belajar Membuat Aplikasi Flutter untuk Pemula"} label2={"- Dicoding Indonesia"} />
    },
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Belajar Dasar Pemrograman Web"} label2={"- Dicoding Indonesia"} />
    },
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Belajar Dasar Pemrograman JavaScript"} label2={"- Dicoding Indonesia"} />
    },
    {
        title: "2022 - 2025",
        desc: <LabelCertificate label1={"Belajar Membuat Aplikasi Back-End untuk Pemula"} label2={"- Dicoding Indonesia"} />
    },
]

export default function AccordionCertificate(){
    return (
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 dark:text-cyan-50 border-l-2 border-cyan-500 pl-2 mb-4" >Certificate</h1>
            <Accordion idAccordion={"my_accordion_certificate"} items={items}/>
        </div>
    )
}