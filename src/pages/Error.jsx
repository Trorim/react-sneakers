import { Link } from "react-router-dom";

import "../index.scss";
import btn from "../btn.module.scss";

function Error() {
    return (
        <div className="error">
            <h2>Такой страницы не существует</h2>
            <Link to="/">
                <button style={{ maxWidth: "310px" }} className={btn.btn}>
                    <img
                        className={btn.btn__left}
                        src="./img/arrow-left.svg"
                        alt="arrow"
                    />
                    <p>Вернуться на главную</p>
                </button>
            </Link>
        </div>
    );
}

export default Error;
