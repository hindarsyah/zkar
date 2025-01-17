export default function ProgressIndicator({ value }){
    return (
        <div>
            <h3 className="text-md text-right font-semibold text-cyan-900 dark:text-cyan-50">{ value }<span className="text-cyan-700 dark:text-cyan-500">%</span></h3>
            <progress className="progress progress-info w-full dark:bg-slate-500" value={ value } max="100" />
        </div>
    )
}