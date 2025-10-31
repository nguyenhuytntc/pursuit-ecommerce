import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import icons from "@assets/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);

function NavbarItem({ title = "", path = "", subMenu = [], setShowDropDown }) {
    const [showSubMenu, setShowSubMenu] = useState(false);
    return (
        <li className={cx("navbar__item")}>
            <Link
                className={cx("navbar__link")}
                to={path}
                onClick={() => setShowDropDown(false)}
            >
                {title}
            </Link>
            <img
                onClick={() => setShowSubMenu(!showSubMenu)}
                className={cx(
                    "navbar__item--icon",
                    showSubMenu ? "rotate" : ""
                )}
                src={icons.arrowDown}
                alt=""
            />

            <ul className={cx("navbar__dropdown", showSubMenu ? "show" : "")}>
                {subMenu.map((item, index) => (
                    <li key={index}>
                        <Link
                            className={cx("sub__link")}
                            to={item.path}
                            onClick={() => setShowDropDown(false)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default NavbarItem;
