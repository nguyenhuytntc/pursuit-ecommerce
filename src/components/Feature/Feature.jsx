import classNames from "classnames/bind";
import styles from "./Feature.module.scss";
import icons from "@assets/icons";

const cx = classNames.bind(styles);

function Feature({ title = "", desc = "", data = [] }) {
    return (
        <div className={cx("feature")}>
            <div className="container">
                <h3 className={cx("feature__title")}>{title}</h3>
                <div className={cx("feature__row")}>
                    <p className={cx("feature__desc")}>{desc}</p>
                    <button className={cx("btn-outline")}>Browse All</button>
                </div>
                <div className={cx("feature__list")}>
                    <div className={cx("feature__card")}>
                        <img
                            className={cx("feature__img")}
                            src={"https://picsum.photos/300/400"}
                            alt=""
                        />
                        <div className={cx("card__row")}>
                            <p className={cx("card__cate")}>Men-Cloths</p>
                            <img
                                className={cx("card__icon--heart")}
                                src={icons.redHeart}
                                alt=""
                            />
                        </div>
                        <h4 className={cx("card__name")}>
                            Mid Century Modern T-Shirt
                        </h4>
                        <div className={cx("card__row")}>
                            <p className={cx("card__rate")}>
                                <img
                                    className={cx("card__icon--star")}
                                    src={icons.star}
                                    alt=""
                                />
                                5.0 (18)
                            </p>
                            <span className={cx("card__price")}>$110</span>
                        </div>
                        <button className={cx("btn-primary", "card__button")}>
                            Ad to Cart
                        </button>
                    </div>
                    <div className={cx("feature__card")}>
                        <img
                            className={cx("feature__img")}
                            src={"https://picsum.photos/300/400"}
                            alt=""
                        />
                        <div className={cx("card__row")}>
                            <p className={cx("card__cate")}>Men-Cloths</p>
                            <img
                                className={cx("card__icon--heart")}
                                src={icons.redHeart}
                                alt=""
                            />
                        </div>
                        <h4 className={cx("card__name")}>
                            Mid Century Modern T-Shirt
                        </h4>
                        <div className={cx("card__row")}>
                            <p className={cx("card__rate")}>
                                <img
                                    className={cx("card__icon--star")}
                                    src={icons.star}
                                    alt=""
                                />
                                5.0 (18)
                            </p>
                            <span className={cx("card__price")}>$110</span>
                        </div>
                        <button className={cx("btn-primary", "card__button")}>
                            Ad to Cart
                        </button>
                    </div>
                    <div className={cx("feature__card")}>
                        <img
                            className={cx("feature__img")}
                            src={"https://picsum.photos/300/400"}
                            alt=""
                        />
                        <div className={cx("card__row")}>
                            <p className={cx("card__cate")}>Men-Cloths</p>
                            <img
                                className={cx("card__icon--heart")}
                                src={icons.redHeart}
                                alt=""
                            />
                        </div>
                        <h4 className={cx("card__name")}>
                            Mid Century Modern T-Shirt
                        </h4>
                        <div className={cx("card__row")}>
                            <p className={cx("card__rate")}>
                                <img
                                    className={cx("card__icon--star")}
                                    src={icons.star}
                                    alt=""
                                />
                                5.0 (18)
                            </p>
                            <span className={cx("card__price")}>$110</span>
                        </div>
                        <button className={cx("btn-primary", "card__button")}>
                            Ad to Cart
                        </button>
                    </div>
                    <div className={cx("feature__card")}>
                        <img
                            className={cx("feature__img")}
                            src={"https://picsum.photos/300/400"}
                            alt=""
                        />
                        <div className={cx("card__row")}>
                            <p className={cx("card__cate")}>Men-Cloths</p>
                            <img
                                className={cx("card__icon--heart")}
                                src={icons.redHeart}
                                alt=""
                            />
                        </div>
                        <h4 className={cx("card__name")}>
                            Mid Century Modern T-Shirt
                        </h4>
                        <div className={cx("card__row")}>
                            <p className={cx("card__rate")}>
                                <img
                                    className={cx("card__icon--star")}
                                    src={icons.star}
                                    alt=""
                                />
                                5.0 (18)
                            </p>
                            <span className={cx("card__price")}>$110</span>
                        </div>
                        <button className={cx("btn-primary", "card__button")}>
                            Ad to Cart
                        </button>
                    </div>
                    <div className={cx("feature__card")}>
                        <img
                            className={cx("feature__img")}
                            src={"https://picsum.photos/300/400"}
                            alt=""
                        />
                        <div className={cx("card__row")}>
                            <p className={cx("card__cate")}>Men-Cloths</p>
                            <img
                                className={cx("card__icon--heart")}
                                src={icons.redHeart}
                                alt=""
                            />
                        </div>
                        <h4 className={cx("card__name")}>
                            Mid Century Modern T-Shirt
                        </h4>
                        <div className={cx("card__row")}>
                            <p className={cx("card__rate")}>
                                <img
                                    className={cx("card__icon--star")}
                                    src={icons.star}
                                    alt=""
                                />
                                5.0 (18)
                            </p>
                            <span className={cx("card__price")}>$110</span>
                        </div>
                        <button className={cx("btn-primary", "card__button")}>
                            Ad to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
