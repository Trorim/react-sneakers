
import './app.scss';

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className='header__left'>
          <img width={40} 
               height={40}
               className='header__logo' 
               src="/img/logo.png" 
               alt="logo" />
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
      <div className='content'>
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
            <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='card__price-block'>
              <div className='card-block'>
                <span className='card__price'>Цена:</span>
                <b className='card__rub'>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
              </button>
            </div>
          </div>
          <div className="card">
          <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
          <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='card__price-block'>
            <div className='card-block'>
              <span className='card__price'>Цена:</span>
              <b className='card__rub'>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
          <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='card__price-block'>
            <div className='card-block'>
              <span className='card__price'>Цена:</span>
              <b className='card__rub'>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
            </button>
          </div>
        </div>
        <div className="card">
          <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
          <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='card__price-block'>
            <div className='card-block'>
              <span className='card__price'>Цена:</span>
              <b className='card__rub'>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
            </button>
          </div>
        </div><div className="card">
          <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
          <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className='card__price-block'>
            <div className='card-block'>
              <span className='card__price'>Цена:</span>
              <b className='card__rub'>12 999 руб.</b>
            </div>
            <button className='button'>
              <img width={32} height={32} src="./img/plus.svg" alt="add to card" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App;
