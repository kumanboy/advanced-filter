
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query, favoriteCount, setShowFavorites }) => {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Enter your search shoes."
                />
            </div>
            <div className="profile-container">
                <button onClick={() => setShowFavorites((prev) => !prev)} className={`favorites-button`}>
                    <FiHeart className="nav-icons" /> {favoriteCount > 0 && <span>({favoriteCount})</span>}
                </button>
                <a href="">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    );
};
export default Nav;