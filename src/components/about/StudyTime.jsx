export default function StudyTime({ time, desc }){
    return (
        <div className="flex items-center gap-5">
            <h1 className="text-4xl font-extrabold">{ time }+</h1>
            <label className="uppercase text-md font-medium text-cyan-700 dark:text-cyan-500 w-28">{ desc }</label>
        </div>
    )
}