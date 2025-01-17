import Accordion from '../Accordion'
import ProgressIndicator from './ProgressIndicator'

const items = [
    {
        title: "Html",
        desc: <ProgressIndicator value={80} />
    },
    {
        title: "Css",
        desc: <ProgressIndicator value={70} />
    },
    {
        title: "Javascript",
        desc: <ProgressIndicator value={70} />
    },
    {
        title: "React Js",
        desc: <ProgressIndicator value={70} />
    },
    {
        title: "Dart",
        desc: <ProgressIndicator value={75} />
    },
    {
        title: "Flutter",
        desc: <ProgressIndicator value={70} />
    }
]

export default function AccordionInterest(){
    return (
        <div>
            <h1 className="text-lg uppercase font-bold text-cyan-950 dark:text-cyan-50 border-l-2 border-cyan-500 pl-2 mb-4">Interest</h1>
            <Accordion idAccordion={"my_accordion_interest"} items={items}/>
        </div>
    )
}