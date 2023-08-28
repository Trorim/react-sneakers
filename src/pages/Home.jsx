import Card from "../components/card/Card";
import Skeleton from "../components/skeleton/Skeleton";

function Home({
    searchValue,
    items,
    favorites,
    isLoading,
    setSearchValue,
    onChangeInput,
    onAddFavorite,
    onAddtoCart,
}) {
    return (
        <div className="content">
            <div className="content__header">
                <h1>
                    {searchValue
                        ? `Поиск по запросу: ${searchValue}`
                        : "Все кроссовки"}
                </h1>
                <div className="search__block">
                    <img
                        src="./img/search.svg"
                        alt="search"
                        className="search__icon"
                    />
                    <input
                        className="search"
                        onChange={onChangeInput}
                        value={searchValue}
                        type="text"
                        name="search"
                        placeholder="Поиск..."
                    />
                    {searchValue && (
                        <img
                            className="search__clear"
                            src="./img/btn-delete.svg"
                            alt="Clear"
                            onClick={() => setSearchValue("")}
                        />
                    )}
                </div>
            </div>
            <div className="sneakers">
                {isLoading
                    ? items
                          .filter((item) =>
                              item.title
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase())
                          )
                          .map((obj, i) => (
                              <Card
                                  favorited={favorites.some(
                                      (item) => obj.imgUrl === item.imgUrl
                                  )}
                                  onFavorite={(obj) => onAddFavorite(obj)}
                                  onPlus={(obj) => onAddtoCart(obj)}
                                  key={i}
                                  isLoading={isLoading}
                                  {...obj}
                              />
                          ))
                    : [...Array(4)].map((item, i) => <Skeleton key={i} />)}
            </div>
        </div>
    );
}

export default Home;
