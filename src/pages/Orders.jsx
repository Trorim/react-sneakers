import "../index.scss";
import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../components/skeleton/Skeleton";

function Orders() {
    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "https://64e5b24809e64530d17edcdc.mockapi.io/orders"
                );
                setOrder(
                    data.reduce((prev, obj) => [...prev, ...obj.items], [])
                );
                setIsLoading(true);
            } catch (error) {
                console.log("Error orders");
            }
        })();
    }, []);

    return (
        <>
            <div className="content">
                <div className="content__header">
                    <h1>Мои покупки</h1>
                </div>
                <div className="sneakers">
                    {isLoading
                        ? order.map((obj, i) => (
                              <Card key={i} isLoading={isLoading} {...obj} />
                          ))
                        : [...Array(4)].map((item, i) => <Skeleton key={i} />)}
                </div>
            </div>
        </>
    );
}

export default Orders;
