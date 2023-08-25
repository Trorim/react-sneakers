import { useContext } from "react";
import style from "../drawer/Drawer.module.scss";
import btn from "../../btn.module.scss";
import AppContext from "../../context";

function Info({ title, descr, image }) {
    const { setCartOpened } = useContext(AppContext);

    return (
        <div className={style.drawer__block}>
            <img width={120} height={140} src={image} alt="Сart is empty" />
            <div className={style.drawer__header}>
                <h2>{title}</h2>
            </div>
            <p>{descr}</p>
            <button className={btn.btn} onClick={() => setCartOpened(false)}>
                <img
                    className={btn.btn__left}
                    src="./img/arrow-left.svg"
                    alt="arrow"
                />
                <p>Вернуться назад</p>
            </button>
        </div>
    );
}

export default Info;
