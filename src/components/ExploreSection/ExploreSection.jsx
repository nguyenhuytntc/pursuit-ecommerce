import classNames from "classnames/bind";
import styles from "./ExploreSection.module.scss";
import exploreImg from "@assets/images/explore";

const cx = classNames.bind(styles);

const dataExploreSection = [
    {
        name: "Men Fashion",
        img: exploreImg.menFashion,
    },
    {
        name: "Women Fashion",
        img: exploreImg.womanFashion,
    },
    {
        name: "Kids Fashion",
        img: exploreImg.menFashion,
    },
    {
        name: "Baby Fashion",
        img: exploreImg.babyFashion,
    },
    {
        name: "Mobile Device",
        img: exploreImg.mobileDevice,
    },
    {
        name: "Computer Device",
        img: exploreImg.computer,
    },
    {
        name: "Beauty Products",
        img: exploreImg.beauty,
    },
    {
        name: "Men Fashion",
        img: exploreImg.menFashion,
    },
    {
        name: "Furniture",
        img: exploreImg.furniture,
    },
    {
        name: "Smart Watch",
        img: exploreImg.watch,
    },
    {
        name: "Modern Shoes",
        img: exploreImg.shoes,
    },
    {
        name: "Beautiful Jewelry",
        img: exploreImg.jewelry,
    },
    {
        name: "Home Products",
        img: exploreImg.homeProducts,
    },
];

function ExploreSection() {
    return (
        <div className={cx("explore")}>
            <div className={cx("container")}>
                <h3 className={cx("explore__heading")}>
                    Explore, find exactly what you need
                </h3>
                <div className={cx("explore__list")}>
                    {dataExploreSection.map((item, index) => (
                        <div key={index} className={cx("explore__item")}>
                            <div className={cx("explore__img-wrap")}>
                                <img
                                    className={cx("explore__img")}
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                            <h3 className={cx("explore__title")}>
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExploreSection;
