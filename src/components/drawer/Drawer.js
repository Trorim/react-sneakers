import { useContext, useState } from "react";
import btn from "../../btn.module.scss";
import style from "./Drawer.module.scss";
import Info from "../info/Info";
import AppContext from "../../context";
import axios from "axios";
import { useCart } from "../../hooks/useCart";

function Drawer({ onClose, onRemoveItem, opened }) {
    const { setCartItems } = useContext(AppContext);
    const { cartItems, price } = useCart();
    const [isOrderComplited, setIsOrderComplited] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                "https://64e5b24809e64530d17edcdc.mockapi.io/orders",
                { items: cartItems }
            );
            setOrderId(data.id);
            setIsOrderComplited(true);
            setCartItems([]);

            (async function () {
                for await (let item of cartItems) {
                    axios.delete(
                        "https://64e35d56bac46e480e78a936.mockapi.io/cart/" +
                            item.id
                    );
                }
            })();
        } catch (error) {
            console.log("Error order");
        }
        setIsLoading(false);
    };

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") onClose();
    });

    return (
        <div
            className={`${style.overlay} ${
                opened ? style.overlay__visibility : ""
            }`}
            onClick={(e) => e.currentTarget === e.target && onClose()}
        >
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
                            <button
                                disabled={isLoading}
                                className={btn.btn}
                                onClick={onClickOrder}
                            >
                                <p>Оформить заказ</p>
                                <img
                                    className={btn.btn__arrow}
                                    src="./img/arrow.svg"
                                    alt="arrow"
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={
                            isOrderComplited
                                ? "Заказ оформлен!"
                                : "Корзина пустая"
                        }
                        descr={
                            isOrderComplited
                                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                        }
                        image={
                            isOrderComplited
                                ? "./img/order.png"
                                : "./img/cart.png"
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;
