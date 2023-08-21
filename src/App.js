
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';
import Card from './components/card/Card';

import './app.scss';
import { useEffect, useState } from 'react';

// const arr = [
//     {imgUrl: './img/sneakers-1.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999'},
//     {imgUrl: './img/sneakers-2.jpg', title: 'Мужские Кроссовки Nike Air Max 270', price: '13 999'},
//     {imgUrl: './img/sneakers-3.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499'},
//     {imgUrl: './img/sneakers-4.jpg', title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999'},
//     {imgUrl: './img/sneakers-5.jpg', title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199'},
//     {imgUrl: './img/sneakers-6.jpg', title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299'},
//     {imgUrl: './img/sneakers-7.jpg', title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799'},
//     {imgUrl: './img/sneakers-8.jpg', title: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499'},
//     {imgUrl: './img/sneakers-9.jpg', title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '13 999'},
//     {imgUrl: './img/sneakers-10.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499'},
//     {imgUrl: './img/sneakers-11.jpg', title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999'},
//     {imgUrl: './img/sneakers-12.jpg', title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '11 299'},
// ]

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch('https://64e35d56bac46e480e78a936.mockapi.io/items')
        .then(res => res.json())
        .then(res => setItems(res))
    }, [])

    const onAddtoCart = (obj) => {
        if (cartItems.includes(obj)) return
        setCartItems(prev => [...prev, obj]);
    }

    console.log(cartItems);

    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems}
                                   onClose={() => setCartOpened(false)}/>}
            <Header onClickCart = {() => setCartOpened(true)}/>
            <div className='content'>
                <div className="content__header">
                    <h1>Все кроссовки</h1>
                    <div className="search__block">
                        <img src="./img/search.svg" 
                            alt="search"
                            className='seacrh__icon' />
                        <input className='search' 
                            type="text" 
                            name="search"
                            placeholder='Поиск...'/>
                    </div>
                </div>
                <div className="sneakers">
                    {items.map((obj, i) => (
                        <Card imgUrl={obj.imgUrl} 
                              title={obj.title} 
                              price={obj.price}
                              onFavorite={() => console.log('favorite')}
                              onPlus={() => onAddtoCart(obj)}
                              key={i}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App;
