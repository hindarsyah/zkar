export default function Tooltip({ dataTip, children }){
    return(
        <div className="tooltip tooltip-bottom cursor-pointer hover:drop-shadow-lg hover:shadow-slate-400 rounded hover:scale-105 w-[40px] sm:w-[45px]" data-tip={dataTip}>
            { children }
        </div>
    )
}