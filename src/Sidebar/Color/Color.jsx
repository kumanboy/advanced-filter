import "./Color.css";


const Color = () => {
    return (
        <>
            <div>
                <h2 className="sidebar-title color-title">Colors</h2>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    All
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    Black
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    Blue
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    Red
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    Green
                </label>
                <label className="sidebar-label-container">
                    <input type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    White
                </label>
            </div>
        </>
    );
};

export default Color;