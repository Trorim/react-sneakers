import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

import Drawer from "./components/drawer/Drawer";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import Orders from "./pages/Orders";
import AppContext from "./context";

import "./app.scss";

// const arr = [
//     {id: 1 ,imgUrl: './img/sneakers-1.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999'},
//     {id: 2 ,imgUrl: './img/sneakers-2.jpg', title: 'Мужские Кроссовки Nike Air Max 270', price: '13 999'},
//     {id: 3 ,imgUrl: './img/sneakers-3.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499'},
//     {id: 4 ,imgUrl: './img/sneakers-4.jpg', title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999'},
//     {id: 5 ,imgUrl: './img/sneakers-5.jpg', title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199'},
//     {id: 6 ,imgUrl: './img/sneakers-6.jpg', title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299'},
//     {id: 7 ,imgUrl: './img/sneakers-7.jpg', title: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799'},
//     {id: 8 ,imgUrl: './img/sneakers-8.jpg', title: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499'},
//     {id: 9 ,imgUrl: './img/sneakers-9.jpg', title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: '13 999'},
//     {id: 10 ,imgUrl: './img/sneakers-10.jpg', title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499'},
//     {id: 11 ,imgUrl: './img/sneakers-11.jpg', title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999'},
//     {id: 12 ,imgUrl: './img/sneakers-12.jpg', title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: '11 299'},
// ]

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] =
                    await Promise.all([
                        axios.get(
                            "https://64e35d56bac46e480e78a936.mockapi.io/cart"
                        ),
                        axios.get(
                            "https://64e5b24809e64530d17edcdc.mockapi.io/favorites"
                        ),
                        axios.get(
                            "https://64e35d56bac46e480e78a936.mockapi.io/items"
                        ),
                    ]);

                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);

                setIsLoading(true);
            } catch (error) {
                console.log("Error response");
            }
        }

        fetchData();
    }, []);

    const onChangeInput = (e) => {
        setSearchValue(e.target.value);
    };

    const onAddtoCart = async (obj) => {
        try {
            let curItem;
            if (
                cartItems.find((item) => {
                    curItem = item;
                    return item.imgUrl === obj.imgUrl;
                })
            ) {
                setCartItems((prev) =>
                    prev.filter((item) => item.imgUrl !== obj.imgUrl)
                );

                await axios.delete(
                    `https://64e35d56bac46e480e78a936.mockapi.io/cart/${curItem.id}`
                );
            } else {
                await axios
                    .post(
                        "https://64e35d56bac46e480e78a936.mockapi.io/cart",
                        obj
                    )
                    .then((res) => setCartItems((prev) => [...prev, res.data]));
            }
        } catch (error) {
            alert("Error cart");
        }
    };

    const onAddFavorite = (obj) => {
        try {
            let curItem;
            if (
                favorites.find((item) => {
                    curItem = item;
                    return item.imgUrl === obj.imgUrl;
                })
            ) {
                axios.delete(
                    `https://64e5b24809e64530d17edcdc.mockapi.io/favorites/${curItem.id}`
                );
                setFavorites((prev) =>
                    prev.filter((item) => item.imgUrl !== obj.imgUrl)
                );
            } else {
                axios
                    .post(
                        "https://64e5b24809e64530d17edcdc.mockapi.io/favorites",
                        obj
                    )
                    .then((res) => setFavorites((prev) => [...prev, res.data]));
            }
        } catch (error) {
            alert("Не удалось добавить в избранное");
        }
    };

    const onRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        axios.delete(`https://64e35d56bac46e480e78a936.mockapi.io/cart/${id}`);
    };

    return (
        <div className="wrapper">
            {cartOpened && (
                <Drawer
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onClose={() => setCartOpened(false)}
                    onRemoveItem={(id) => onRemoveItem(id)}
                />
            )}
            <Header
                onClickCart={() => setCartOpened(true)}
                cartItems={cartItems}
            />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            searchValue={searchValue}
                            items={items}
                            favorites={favorites}
                            cartItems={cartItems}
                            isLoading={isLoading}
                            setSearchValue={setSearchValue}
                            onChangeInput={onChangeInput}
                            onAddFavorite={(obj) => onAddFavorite(obj)}
                            onAddtoCart={(obj) => onAddtoCart(obj)}
                        />
                    }
                />

                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            isLoading={isLoading}
                            onAddFavorite={(obj) => onAddFavorite(obj)}
                            onAddtoCart={onAddtoCart}
                        />
                    }
                />
                <Route
                    path="/orders"
                    element={<Orders isLoading={isLoading} />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
