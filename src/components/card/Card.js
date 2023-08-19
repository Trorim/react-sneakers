function Card() {
    return (
        <div className="card">
            <div className="favorit">
              <img width={32} height={32} src="./img/heart-unliked.svg" alt="unliked" />
            </div>
            <div className="card__info">
              <img className='card__img' src="./img/blazer.jpg" alt="sneaker" />
              <p className='card__descr'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            </div>
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
    )
}

export default Card