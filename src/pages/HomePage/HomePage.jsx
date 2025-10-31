import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import HeaderSlider from "@components/HeroSlider";

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div>
            <HeaderSlider />
        </div>
    );
}

export default HomePage;
