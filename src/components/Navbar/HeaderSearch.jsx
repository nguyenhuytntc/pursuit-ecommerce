import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import icons from "@assets/icons";

const cx = classNames.bind(styles);

function HeaderSearch({ desktop = true }) {
    return (
        <div
            className={cx(
                "header__search",
                desktop ? "search__desktop" : "search__mobile"
            )}
        >
            <input
                type="text"
                className={cx("search__input")}
                placeholder="Search for anything"
            />
            <button className={cx("search__button")}>
                <img src={icons.search} alt="" />
            </button>
        </div>
    );
}

export default HeaderSearch;
