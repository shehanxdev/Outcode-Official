/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/services">All Services</Link></li>
                        <li><Link to="/service-details/1">Web Development</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/team">Our Team</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;