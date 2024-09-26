
import { Link } from "react-router-dom";

const NavMenu = () => {

    return (
        <nav>
            <ul className="menu-list">

                <Link to={'./catalog/'}>
                    <li className="menu-item"><span className="material-symbols-outlined menu-item-icon">
                        list</span>
                        Catalog
                    </li>
                </Link>
                <Link to={'./newdog'} >
                    <li className="menu-item">
                        <span className="material-symbols-outlined menu-item-icon">
                            add</span> New Dog
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavMenu;