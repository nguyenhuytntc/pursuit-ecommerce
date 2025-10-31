import classNames from "classnames/bind";
import styles from "./HeroSlider.module.scss";
import images from "@assets/images";
import { useState } from "react";

const cx = classNames.bind(styles);

const dataSlide = [
    {
        heading: "Find the best styles of modern shoes",
        desc: "The most wanted styles is waiting for you. Find the best styles of modern shoes for you .",
        img: images.heroImage,
    },
    {
        heading: "Choose Your Latest Electronics Products",
        desc: "The most wanted styles is waiting for you. Find the best styles of modern shoes for you. Still, the second option holds promised. could make the tagline.",
        img: images.heroImage2,
    },
    {
        heading: "Find Your Best Furniture",
        desc: "The most wanted styles is waiting for you. Find the best styles of modern furniture for you. Still, the second option holds promised. could make the tagline.",
        img: images.heroImage3,
    },
];

function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <div className={cx("slider")}>
            <div className={cx("container")}>
                <div className={cx("slider__track")}>
                    {dataSlide.map((slide, index) => (
                        <div
                            key={index}
                            className={cx(
                                "slider__item",
                                index === activeSlide ? "active" : ""
                            )}
                        >
                            <div className={cx("slider__content")}>
                                <h2 className={cx("slider__heading")}>
                                    {slide.heading}
                                </h2>
                                <p className={cx("slider__desc")}>
                                    {slide.desc}
                                </p>
                                <button className={cx("slider__button")}>
                                    Explore Product
                                </button>
                            </div>
                            <div className={cx("slider__image-wrap")}>
                                <img
                                    src={slide.img}
                                    alt=""
                                    className={cx("slider__image")}
                                />
                            </div>
                        </div>
                    ))}

                    <div className={cx("slider__indicators")}>
                        {dataSlide.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={cx(
                                    "slider__dot",
                                    index === activeSlide ? "active" : ""
                                )}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;
