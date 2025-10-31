import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import HeaderSlider from "@components/HeroSlider";
import ExploreSection from "@components/ExploreSection";

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div>
            <HeaderSlider />
            <ExploreSection />
        </div>
    );
}

export default HomePage;
