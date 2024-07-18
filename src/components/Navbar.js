import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <div >
            <nav className="bg-blue-950 px-2 py-3 flex">
                <div className="text-white flex-1 text-xl ">
                    <h1>Logo</h1>
                </div>
                <div className={`md:hidden`}>
                    <button className={`text-white mr-4 `} onClick={handleChange}>
                        {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
                <ul className={`md:flex-1  ${isOpen?'block':'hidden'} md:flex md:justify-between`}>
                    <li>
                        <Link to={`/`} className="text-white hover:text-blue-400">Home</Link>
                    </li>
                    <li>
                        <Link to={`/addtask`} className="text-white hover:text-blue-400">Projects</Link>
                    </li>
                    <li>
                        <Link to={`#`} className="text-white hover:text-blue-400">Contact</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;