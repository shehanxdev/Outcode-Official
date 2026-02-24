/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

interface DataType {
    toggleSubMenu2?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    closeInfoBar?: () => void;
}

const MainMenuV2 = ({ toggleSubMenu2, closeInfoBar }: DataType) => {
    return (
        <>
            <ul className="simple-menu-list">
                <li><Link to="/" onClick={closeInfoBar}>Home</Link></li>
                <li><Link to="/about-us" onClick={closeInfoBar}>About</Link></li>
                <li>
                    <Link to="#">Services</Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link to="/services" onClick={closeInfoBar}>All Services</Link></li>
                        <li><Link to="/service-details/1" onClick={closeInfoBar}>Web Development</Link></li>
                    </ul>
                </li>
                <li><Link to="/portfolio" onClick={closeInfoBar}>Portfolio</Link></li>
                <li>
                    <Link to="#">Pages</Link>
                    <i className="fas fa-plus" onClick={toggleSubMenu2} />
                    <ul className="sub-menu">
                        <li><Link to="/team" onClick={closeInfoBar}>Our Team</Link></li>
                        <li><Link to="/blog" onClick={closeInfoBar}>Blog</Link></li>
                        <li><Link to="/faq" onClick={closeInfoBar}>FAQ</Link></li>
                    </ul>
                </li>
                <li><Link to="/contact" onClick={closeInfoBar}>Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenuV2;