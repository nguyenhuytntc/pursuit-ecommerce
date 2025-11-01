import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import HeaderSlider from "@components/HeroSlider";
import ExploreSection from "@components/ExploreSection";
import Feature from "@components/Feature";

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div>
            <HeaderSlider />
            <ExploreSection />
            <Feature
                title="Our popular products"
                desc="Browse our most popular products and make your day more beautiful and glorious."
            />
        </div>
    );
}

export default HomePage;
