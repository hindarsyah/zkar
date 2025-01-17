import Accordion from '../Accordion'

const LabelEdu = ({ label }) => <p className="text-md text-slate-500 dark:text-slate-300">Student in <span className="font-semibold text-cyan-700 dark:text-cyan-500">{ label }</span></p>

const items = [
    {
        title: "2019-2022",
        desc: <LabelEdu label={"Universitas Bahaudin Mudhary"} />
    },
    {
        title: "2016-2019",
        desc: <LabelEdu label={"SMAN 2 Sumenep"} />
    },
    {
        title: "2013-2016",
        desc: <LabelEdu label={"SMPN 3 Sumenep"} />
    }
]


export default function AccordionEdu(){
    return(
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 dark:text-cyan-50 border-l-2 border-cyan-500 pl-2 mb-4">Education</h1>
            <Accordion idAccordion={"my_accordion_edu"} items={items}/>
        </div>
    )
}