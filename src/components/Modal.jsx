import StudyList from "./knowledge/StudyList";

export default function Modal({ id, func, title, items }){
    return(
        <div>
            <button className="btn bg-transparent text-cyan-700 dark:text-cyan-500 border-0 hover:underline" onClick={ func }>Learn More</button>
            <dialog id={ id } className="modal">
                <form method="dialog" className="modal-box">
                    <StudyList title={ title } items={ items }/>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}