import style from './Card.module.scss';

function Card(props) {
    return (
        <div className={style.card}>
            <div className={style.favorit}>
                <img width={32} height={32} src="./img/heart-unliked.svg" alt="unliked" />
            </div>
            <div>
                <img width={133}
                     height={112}
                     src={props.imgUrl} alt="sneaker" />
                <p className={style.card__descr}>{props.title}</p>
            </div>
            <div className={style.price}>
                <div>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className='button'>
                    <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
                </button>
            </div>
        </div>
    )
}

export default Card