import { useState } from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>

            {/* <span class="material-symbols-outlined menu-button" onClick={toggleMenu}>
                menu
            </span> */}
            {/* <ul className={isOpen ? "nav-menu open" : "nav-menu"}> */}
            <ul className="menu-list">
                {/* <li className="menu-item">Home</li> */}
                <Link to={'./catalog/'}>
                    <li className="menu-item"><span className="material-symbols-outlined menu-item-icon">
                        list
                    </span>Catalog</li>
                </Link>
                <li className="menu-item">New Dog</li>
            </ul>
        </nav>

    )
}

export default NavMenu;