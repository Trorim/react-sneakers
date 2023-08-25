import { useState } from "react";
import btn from "../../btn.module.scss";
import style from "./Drawer.module.scss";

function Drawer({ onClose, cartItems = [], setCartItems, onRemoveItem }) {
    const [isOrderComplited, setIsOrderComplited] = useState(false);

    const price = cartItems.reduce((sum, cur) => sum + +cur.price, 0);

    const pushOrder = () => {
        setIsOrderComplited(!isOrderComplited);
        setCartItems([]);
    };

    return (
        <div className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.drawer__header}>
                    <h2>Корзина</h2>
                    <button className="button" onClick={onClose}>
                        <img
                            className="remove__btn"
                            width={32}
                            height={32}
                            src="../../img/btn-delete.svg"
                            alt="Close cart"
                        />
                    </button>
                </div>
                {cartItems.length > 0 ? (
                    <>
                        <div className={style.cart__list}>
                            {cartItems.map((item) => (
                                <div key={item.id} className={style.cart__item}>
                                    <img
                                        width={70}
                                        height={70}
                                        src={item.imgUrl}
                                        alt="sneaker"
                                    />
                                    <div className={style.cart__descr}>
                                        <p>{item.title}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <button
                                        className="button"
                                        onClick={() => onRemoveItem(item.id)}
                                    >
                                        <img
                                            className="remove__btn"
                                            width={32}
                                            height={32}
                                            src="./img/btn-delete.svg"
                                            alt="delete to card"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={style.order}>
                            <div className="price__list">
                                <div className={style.price__item}>
                                    <p>Итого:</p>
                                    <div></div>
                                    <b>{`${price} руб.`}</b>
                                </div>
                                <div className={style.price__item}>
                                    <p>Налог 5%</p>
                                    <div></div>
                                    <b>{`${Math.round(price * 0.05)} руб.`}</b>
                                </div>
                            </div>
                            <button className={btn.btn}>
                                <p onClick={pushOrder}>Оформить заказ</p>
                                <img
                                    className={btn.btn__arrow}
                                    src="./img/arrow.svg"
                                    alt="arrow"
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className={style.drawer__block}>
                        <img
                            width={120}
                            height={120}
                            src="./img/cart.png"
                            alt="Сart is empty"
                        />
                        <div className={style.drawer__header}>
                            <h2>Корзина пустая</h2>
                        </div>
                        <p>Добавьте товар, чтобы сделать заказ.</p>
                        <button className={btn.btn} onClick={onClose}>
                            <img
                                className={btn.btn__left}
                                src="./img/arrow-left.svg"
                                alt="arrow"
                            />
                            <p>Вернуться назад</p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
