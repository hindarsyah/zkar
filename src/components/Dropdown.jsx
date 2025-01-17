import { Link } from "react-router-dom"

export default function DropDown(){
    const navList = [
        {
            title: "Profile",
            link: "/",
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "History",
            link: "/history"
        },
        {
            title: "Knowledge",
            link: "/knowledge"
        },
        {
            title: "Portfolio",
            link: "/portfolio"
        },
        {
            title: "Contact",
            link: "/contact"
        },
    ]

    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-slate-300">
                {
                    navList.map((nav, i) => <li key={i}><Link to={nav.link}>{nav.title}</Link></li>)
                }
            </ul>
        </div>
    )
}