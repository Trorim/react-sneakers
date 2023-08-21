import style from './Header.module.scss';

function Header(props) {
    return (
        <header className={style.header}>
            <div className={style.header__left}>
                <a href="#">
                    <img width={40} 
                        height={40}
                        style={{marginRight: '15px'}} 
                        src="/img/logo.png" 
                        alt="logo" />
                </a>
                <div className={style.header__info}>
                    <h3 className='title'>REACT SNEAKERS</h3>
                    <p className='descr'>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={style.header__right}>
                <li className={style.cart}
                    onClick={props.onClickCart}>
                    <img width={20} 
                        height={20} 
                        src="/img/card.svg" 
                        alt="card"
                        style={{marginRight: '10px'}} />
                    <span className='descr'>1205 руб.</span>
                </li>
                <li>
                    <img width={20} 
                        height={20} 
                        src="/img/favorite.svg" 
                        alt="favorite" />
                </li>
                <li>
                    <img width={20} 
                        height={20} 
                        src="/img/user.svg" 
                        alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header