import "../index.scss";
import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";
import AppContext from "../context";
import { useContext } from "react";

function Favorites({ onAddFavorite, onAddtoCart, isLoading }) {
    const { favorites } = useContext(AppContext);

    return (
        <>
            <div className="content">
                <div className="content__header">
                    <h1>Избранное</h1>
                </div>
                <div className="sneakers">
                    {isLoading
                        ? favorites.map((obj, i) => (
                              <Card
                                  onFavorite={() => onAddFavorite(obj)}
                                  onPlus={() => onAddtoCart(obj)}
                                  favorited={favorites.some(
                                      (item) => obj.imgUrl === item.imgUrl
                                  )}
                                  isLoading={isLoading}
                                  key={i}
                                  {...obj}
                              />
                          ))
                        : [...Array(4)].map((item, i) => <Skeleton key={i} />)}
                </div>
            </div>
        </>
    );
}

export default Favorites;
