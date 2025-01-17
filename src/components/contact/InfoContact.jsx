export default function InfoContact({ icon, title, contact }){
    return (
        <div className="flex gap-2 mt-2 hover:scale-105 transition-all">
            <img src={icon} className="w-[45px] h-[45px]"/>
            <div>
                <h1 className="uppercase font-semibold text-cyan-900 dark:text-cyan-500">{title}</h1>
                <span className="text-sm text-slate-500 dark:text-slate-300">{contact}</span>
            </div>

        </div>
    )
}