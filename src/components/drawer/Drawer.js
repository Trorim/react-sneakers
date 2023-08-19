function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <div className="drawer__header">
                    <h2 className='drawer__title'>Корзина</h2>
                    <button className='button'>
                        <img className='remove__btn' width={32} height={32} src="./img/btn-delete.svg" alt="delete to card" />
                    </button>
                </div>
                <div className="cart-item">
                    <div className="drawer__card">
                        <img width={70} height={70} src="./img/blazer.jpg" alt="sneaker" />
                        <div className='drawer__card-descr'>
                        <p className='card__price'>Мужские Кроссовки Nike Air Max 270</p>
                        <b className='card__rub'>12 999 руб.</b>
                        </div>
                        <button className='button'>
                        <img className='remove__btn' width={32} height={32} src="./img/btn-delete.svg" alt="delete to card" />
                        </button>
                    </div>
                    <div className="drawer__card">
                        <img width={70} height={70} src="./img/blazer.jpg" alt="sneaker" />
                        <div className='drawer__card-descr'>
                        <span className='card__price'>Мужские Кроссовки Nike Air Max 270</span>
                        <b className='card__rub'>12 999 руб.</b>
                        </div>
                        <button className='button'>
                        <img width={32} height={32} src="./img/btn-delete.svg" alt="delete to card" />
                        </button>
                    </div>
                </div>
                <div className="order">
                    <div className="price__block">
                    <div className='price__item'>
                        <p>Итого:</p>
                        <div></div>
                        <b>21 498 руб.</b>
                    </div>
                    <div className='price__item'>
                        <p>Налог 5%:</p>
                        <div></div>
                        <b>1074 руб.</b>
                    </div>
                    </div>
                    <button className='btn'>
                        <p>Оформить заказ</p>
                        <img className='btn__arrow' src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Drawer