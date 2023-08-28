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

    const isItemAdded = (imgUrl) => {
        return cartItems.some((obj) => obj.imgUrl === imgUrl);
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                setCartOpened,
                setCartItems,
                onAddFavorite,
                onAddtoCart,
            }}
        >
            <div className="wrapper">
                <Drawer
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onClose={() => setCartOpened(false)}
                    onRemoveItem={(id) => onRemoveItem(id)}
                    opened={cartOpened}
                />

                <Header />

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
                                isLoading={isLoading}
                                onAddFavorite={(obj) => onAddFavorite(obj)}
                                onAddtoCart={onAddtoCart}
                            />
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <Orders
                                isLoading={isLoading}
                                nAddFavorite={(obj) => onAddFavorite(obj)}
                                onAddtoCart={onAddtoCart}
                            />
                        }
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
