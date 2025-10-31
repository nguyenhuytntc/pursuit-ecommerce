import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import icons from "@assets/icons";
import NavbarItem from "./NavbarItem";
import menuData from "./menuData";
import HeaderSearch from "./HeaderSearch";
import { useState } from "react";

const cx = classNames.bind(styles);

function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <header className={cx("header")}>
            <div className="container">
                <div className={cx("header__top-row")}>
                    <h1 className={cx("header__logo")}>Pursuit</h1>
                    <HeaderSearch desktop={true} />
                    <div className={cx("header__actions")}>
                        <button
                            className={cx(
                                "actions__button",
                                " actions__button--auth"
                            )}
                        >
                            <img
                                className={cx("actions__button--icon")}
                                src={icons.person}
                                alt=""
                            />
                        </button>
                        <button
                            className={cx(
                                "actions__button",
                                "actions__button--like"
                            )}
                        >
                            <img
                                className={cx("actions__button--icon")}
                                src={icons.heart}
                                alt=""
                            />
                            <span>(0)</span>
                        </button>
                        <button
                            className={cx(
                                "actions__button",
                                " actions__button--cart"
                            )}
                        >
                            <img
                                className={cx("actions__button--icon")}
                                src={icons.cart}
                                alt=""
                            />
                            <span>(0)</span>
                        </button>
                    </div>
                </div>
                <nav className={cx("header__navbar")}>
                    <label
                        className={cx("navbar__button--toggle")}
                        htmlFor="navbar-menu"
                    >
                        <img src={icons.menu} alt="" /> Menu
                    </label>
                    <input
                        className={cx("navbar__button--checkbox", "hidden")}
                        type="checkbox"
                        id="navbar-menu"
                        checked={showDropDown}
                        onChange={() => setShowDropDown(!showDropDown)}
                    />{" "}
                    <label
                        htmlFor="navbar-menu"
                        className={cx("navbar__backdrop")}
                    ></label>
                    <ul className={cx("navbar__list")}>
                        <label
                            className={cx("navbar__button--close")}
                            htmlFor="navbar-menu"
                        >
                            &times;
                        </label>
                        {menuData.map((item, index) => (
                            <NavbarItem
                                key={index}
                                setShowDropDown={setShowDropDown}
                                title={item.title}
                                path={item.path}
                                subMenu={item.children}
                            />
                        ))}
                    </ul>
                    <HeaderSearch desktop={false} />
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
