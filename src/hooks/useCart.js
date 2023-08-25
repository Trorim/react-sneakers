import { useContext } from "react";
import AppContext from "../context";

export const useCart = () => {
    const { cartItems } = useContext(AppContext);
    const price = cartItems.reduce((sum, cur) => sum + +cur.price, 0);

    return { cartItems, price };
};
