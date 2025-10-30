import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import icons from "@assets/icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <header className={cx("header")}>
            <div className="container">
                <div className={cx("header__top-row")}>
                    <h1 className={cx("header__logo")}>Pursuit</h1>
                    <div className={cx("header__search")}>
                        <input
                            type="text"
                            className={cx("search__input")}
                            placeholder="Search for anything"
                        />
                        <button className={cx("search__button")}>
                            <img src={icons.search} alt="" />
                        </button>
                    </div>
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
                    <ul className={cx("navbar__list")}>
                        <li className={cx("navbar__item")}>
                            <Link to="/">Home</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/category">Category</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/brand">Brand</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/products">Products</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/about">About</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/shop">Shop</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                        <li className={cx("navbar__item")}>
                            <Link to="/pages">Pages</Link>
                            <img src={icons.arrowDown} alt="" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
