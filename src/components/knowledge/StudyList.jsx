import iconCheck from '../../assets/img/check.png'

export default function StudyList({ title, items }){
    return(
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl uppercase font-bold text-cyan-900 dark:text-cyan-50">{ title }</h1>
            <h3 className="font-semibold text-cyan-700 dark:text-cyan-500">What i learned about { title }</h3>
            {
                items.map((item, i) => {
                    return (
                        <div key={ i } className="flex flex-row gap-2">
                            <img src={ iconCheck } className="w-[24px] h-[24px]"/>
                            <p className="text-sm text-slate-600 dark:text-slate-300">{ item }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}