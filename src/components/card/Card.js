import { useContext, useState } from "react";

import Skeleton from "../skeleton/Skeleton";

import style from "./Card.module.scss";
import AppContext from "../../context";

function Card({
    id,
    title,
    price,
    imgUrl,
    onPlus,
    onFavorite,
    favorited = false,
}) {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);

    function onClickPlus() {
        onPlus({ id, title, price, imgUrl });
    }

    function onClickFavorite() {
        onFavorite({ title, imgUrl, price, id });
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={style.card}>
            <button className={style.favorite} onClick={onClickFavorite}>
                {onFavorite && (
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
                )}
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
                {onPlus && (
                    <img
                        width={32}
                        height={32}
                        className={style.plus}
                        onClick={onClickPlus}
                        src={
                            isItemAdded(imgUrl)
                                ? "./img/btn-checked.svg"
                                : "./img/plus.svg"
                        }
                        alt="add to card"
                    />
                )}
            </div>
        </div>
    );
}

export default Card;
