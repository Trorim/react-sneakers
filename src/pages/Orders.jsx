import "../index.scss";
import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Orders({ isLoading }) {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(
                "https://64e5b24809e64530d17edcdc.mockapi.io/orders"
            );
            setOrder(data);
        })();
    }, []);

    return (
        <>
            <div className="content">
                <div className="content__header">
                    <h1>Мои покупки</h1>
                </div>
                <div className="sneakers">
                    {(isLoading ? [] : [...Array(4)]).map((obj, i) => (
                        <Card isLoading={isLoading} key={i} {...obj} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Orders;
