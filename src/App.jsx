import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./index.css"
// Import db
import products from "../src/db/index.js"
import {useState} from "react";
import Card from "./components/Card.jsx";


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // input filter

    const [query, setQuery] = useState("");

    const handleInputChange = e => {
        setQuery(e.target.value);
    }

    const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

    // radio filter
    const handleChange = e => {
        setSelectedCategory(e.target.value);
    }

    // button filter

    const handleClick = e => {
        setSelectedCategory(e.target.value);
    }

    function filterData(products, selected, query) {
        let filterProducts = products

        // Filterinng Input items
        if (query) {
            filterProducts = filteredItems
        }

        // Selected Filter
        if (selected) {
            filterProducts = filterProducts.filter(({
                                                        category,
                                                        color,
                                                        company,
                                                        newPrice,
                                                        title
                                                    }) =>
                category === selected ||
                color === selected ||
                newPrice === selected ||
                company === selected ||
                title === selected
            )
        }

        return filterProducts.map(({
            img,title,star,reviews,prevPrice,newPrice
        }) => (
            <Card
                key={Math.random}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice}
            />
        ))
    }

    const result = filterData(products,selectedCategory,query)


    return (
        <>
            <Sidebar handleChange={handleChange} />
            <Nav query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />

        </>

    )
}
export default App
