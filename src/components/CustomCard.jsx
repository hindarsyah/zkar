/* eslint-disable react/prop-types */
import Circle from "./Circle"

export default function CustomCard({ title, tags, color, shadowColor, label, icon }){
    return (
        <div className={"card w-auto sm:w-72 bg-base-100 shadow-md border-8 border-white dark:border-slate-800 overflow-clip hover:shadow-xl hover:sm:scale-105 transition-all " + shadowColor}>
            <div className="card-body flex flex-col justify-between">
                <Circle color={ color }/>

                {/* icon */}
                <div className="flex justify-center m-10 mb-16 z-10">
                    <div className="w-[64px] h-[64px]">
                        <img src={ icon }/>
                    </div>
                </div>
                <h1 className="card-title mt-5 text-sm z-10 dark:text-cyan-50">{ title }</h1>
                <div className="flex flex-row flex-wrap gap-2">
                    {
                        (tags) && tags.map((tag, i) => <p key={i} className="text-xs text-slate-500 z-10 font-semibold uppercase">{ tag }</p>)
                    }
                </div>
                
                <div className="flex justify-center">
                    <label className={"text-center mt-7 w-24 py-1 rounded-full text-white uppercase text-sm font-semibold " + color}>{ label }</label>
                </div>
            </div>
        </div>
    )
}