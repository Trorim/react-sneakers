import { Link } from "react-router-dom";

import style from "./Header.module.scss";
import { useContext } from "react";
import AppContext from "../../context";
import { useCart } from "../../hooks/useCart";

function Header() {
    const { setCartOpened } = useContext(AppContext);
    const { cartItems, price } = useCart();

    return (
        <header className={style.header}>
            <Link to="/">
                <div className={style.header__left}>
                    <div>
                        <img
                            width={40}
                            height={40}
                            style={{ marginRight: "15px" }}
                            src="/img/logo.png"
                            alt="logo"
                        />
                    </div>
                    <div className={style.header__info}>
                        <h3 className="title">REACT SNEAKERS</h3>
                        <p className="descr">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={style.header__right}>
                <li className={style.cart} onClick={() => setCartOpened(true)}>
                    <img
                        width={20}
                        height={20}
                        src="/img/card.svg"
                        alt="card"
                        style={{ marginRight: "10px" }}
                    />
                    <span className="descr">{`${price} руб.`}</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img
                            width={20}
                            height={20}
                            src="/img/favorite.svg"
                            alt="favorite"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img
                            width={20}
                            height={20}
                            src="/img/user.svg"
                            alt="user"
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
