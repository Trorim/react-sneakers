import { useState } from "react";

import Skeleton from "../skeleton/Skeleton";

import style from "./Card.module.scss";

function Card({
    id,
    title,
    price,
    imgUrl,
    onPlus,
    onFavorite,
    favorited = false,
    added = false,
    isLoading,
}) {
    const [isAdded, setAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    function onClickPlus() {
        onPlus({ id, title, price, imgUrl });
        setAdded(!isAdded);
    }

    function onClickFavorite() {
        onFavorite({ title, imgUrl, price, id });
        setIsFavorite(!isFavorite);
    }

    return isLoading ? (
        <div className={style.card}>
            <button className={style.favorite} onClick={onClickFavorite}>
                <img
                    width={32}
                    height={32}
                    src={
                        isFavorite
                            ? "./img/heart-liked.svg"
                            : "./img/heart-unliked.svg"
                    }
                    alt="unliked"
                />
            </button>
            <div>
                <img width={133} height={112} src={imgUrl} alt="sneaker" />
                <p className={style.card__descr}>{title}</p>
            </div>
            <div className={style.price}>
                <div>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    width={32}
                    height={32}
                    className={style.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "./img/btn-checked.svg" : "./img/plus.svg"}
                    alt="add to card"
                />
            </div>
        </div>
    ) : (
        <Skeleton />
    );
}

export default Card;
