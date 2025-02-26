import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css";
import products from "../src/db/index.js";
import { useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const toggleFavorite = (product) => {
        setFavorites((prevFavs) =>
            prevFavs.includes(product)
                ? prevFavs.filter((fav) => fav !== product)
                : [...prevFavs, product]
        );
    };

    function filterData() {
        let filteredProducts = showFavorites ? favorites : products;
        if (query) {
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
        }
        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
                category === selectedCategory ||
                color === selectedCategory ||
                newPrice === selectedCategory ||
                company === selectedCategory ||
                title === selectedCategory
            );
        }
        return filteredProducts.map((product) => (
            <Card
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product)}
                toggleFavorite={toggleFavorite}
            />
        ));
    }

    return (
        <>
            <Sidebar handleChange={(e) => setSelectedCategory(e.target.value)} />
            <Nav query={query} handleInputChange={handleInputChange} favoriteCount={favorites.length} setShowFavorites={setShowFavorites} />
            <Recommended handleClick={(e) => setSelectedCategory(e.target.value)} />
            <Products result={filterData()} />
        </>
    );
};
export default App;