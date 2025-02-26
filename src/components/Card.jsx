
import { BsFillBagFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const Card = ({ product, isFavorite, toggleFavorite }) => {
    return (
        <section className="card">
            <img src={product.img} alt={product.title} className="card-img" />
            <div className="card-details">
                <h3 className="card-title">{product.title}</h3>
                <section className="card-reviews">
                    {product.star} {product.star} {product.star} {product.star}
                    <span className="total-reviews">{product.reviews}</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>{product.prevPrice}</del> {product.newPrice}
                    </div>
                    <div className="bag">
                        <BsFillBagFill className="bag-icon" />
                        <FiHeart
                            style={{ marginLeft: "10px", cursor: "pointer", color: isFavorite ? "red" : "black" }}
                            onClick={() => toggleFavorite(product)}
                        />
                    </div>
                </section>
            </div>
        </section>
    );
};
export default Card;