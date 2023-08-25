import "../index.scss";
import Card from "../components/card/Card";

function Favorites({ onAddFavorite, onAddtoCart, favorites = [], isLoading }) {
    return (
        <>
            <div className="content">
                <div className="content__header">
                    <h1>Избранное</h1>
                </div>
                <div className="sneakers">
                    {(isLoading ? favorites : [...Array(4)]).map((obj, i) => (
                        <Card
                            onFavorite={() => onAddFavorite(obj)}
                            onPlus={() => onAddtoCart(obj)}
                            favorited={true}
                            isLoading={isLoading}
                            key={i}
                            {...obj}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Favorites;
