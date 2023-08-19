function Header() {
    return (
        <header className='header'>
            <div className='header__left'>
                <a href="#">
                    <img width={40} 
                        height={40}
                        className='header__logo' 
                        src="/img/logo.png" 
                        alt="logo" />
                </a>
                <div className='header__info'>
                    <h3 className='title'>REACT SNEAKERS</h3>
                    <p className='descr'>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='header__right'>
                <li className='header__card'>
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