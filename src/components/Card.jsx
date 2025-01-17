import Modal from './Modal'

export default function Card({ title, icon, id, func, items }){
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-md shadow-cyan-800 hover:shadow-xl hover:shadow-cyan-800 transition-all">
            <div className="card-body">
                <img src={ icon } className="w-[70px] h-[70px]"/>
                <h2 className="card-title text-cyan-800 dark:text-cyan-50 text-2xl">{ title }</h2>
                <div className="card-actions justify-end">
                    <Modal id={ id } func={ func } title={ title } items={ items } />
                </div>
            </div>
        </div>
    )
}