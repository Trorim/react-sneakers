import { useState } from 'react';

import style from './Card.module.scss';

function Card( {title, price, imgUrl, onPlus, onFavorite} ) {
    const [isAdded, setAdded] = useState(false);

    function onClickPlus() {
        onPlus({title, price, imgUrl});
        setAdded(!isAdded);
    }

    return (
        <div className={style.card}>
            <button className={style.favorit}
                    onClick={onFavorite}>
                <img width={32} height={32} src="./img/heart-unliked.svg" alt="unliked" />
            </button>
            <div>
                <img width={133}
                     height={112}
                     src={imgUrl} alt="sneaker" />
                <p className={style.card__descr}>{title}</p>
            </div>
            <div className={style.price}>
                <div>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img width={32} 
                     height={32} 
                     className={style.plus}
                     onClick={onClickPlus}
                     src={(isAdded) ? "./img/btn-checked.svg" : "./img/plus.svg"} 
                     alt="add to card" />
            </div>
        </div>
    )
}

export default Card