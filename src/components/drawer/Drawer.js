import btn from '../../btn.module.scss';
import style from './Drawer.module.scss';

function Drawer({ onClose, items}) {
    return (
        <div className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.drawer__header}>
                    <h2 className='drawer__title'>Корзина</h2>
                    <button className='button'
                            onClick={onClose}>
                        <img className='remove__btn' width={32} height={32} src="../../img/btn-delete.svg" alt="delete to card" />
                    </button>
                </div>
                <div className={style.cart__list}>
                    {items.map(item => {
                        <div className={style.cart__item}>
                            <img width={70} height={70} src={item.imgUrl} alt="sneaker" />
                            <div className={style.cart__descr}>
                                <p>{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>
                            <button className='button'>
                                <img className='remove__btn' width={32} height={32} src="./img/btn-delete.svg" alt="delete to card" />
                            </button>
                        </div>
                    })}
                </div>
                <div className={style.order}>
                    <div className='price__list'>
                        <div className={style.price__item}>
                            <p>Итого:</p>
                            <div></div>
                            <b>21 498 руб.</b>
                        </div>
                        <div className={style.price__item}>
                            <p>Налог 5%:</p>
                            <div></div>
                            <b>1074 руб.</b>
                        </div>
                    </div>
                    <button className={btn.btn}>
                        <p>Оформить заказ</p>
                        <img className={btn.btn__arrow} src="./img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Drawer