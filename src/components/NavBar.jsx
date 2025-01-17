import { Link } from "react-router-dom";
import DropDown from "./Dropdown";

export default function NavBar(){
    return(
        <>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <DropDown />
                </div>
                <div className="navbar-end">
                    <Link className="cursor-pointer" to={'/'}>
                        <h1 className="font-bold text-lg uppercase text-cyan-500 dark:text-cyan-50 hover:scale-105 drop-shadow-sm transition-all pr-5"><span className="text-cyan-700 dark:text-cyan-500">My</span> Portfolio</h1>
                    </Link>
                </div>
            </div>
        </>
    );
}