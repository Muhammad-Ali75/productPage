import { useState, useContext } from "react";
import { Context as ProductContext } from "../../context/ProductContext";
import usFlag from "../../assets/usaflag.svg";
import "./styles/ProductGridCard.css";

function ProductGridCard({
  _id,
  title,
  image,
  stock_in_usa,
  moq,
  min_price,
  max_price,
  unit,
}) {
  const {
    state: { cart },
    addCart,
  } = useContext(ProductContext);
  const [disbled, setDisabled] = useState(false);

  function addToCart() {
    if (!disbled) {
      setDisabled(true);
      addCart(cart + 1);
    }
  }
  return (
    <div className="gridCardContainer" key={_id}>
      <div className="product-image-container">
        <img src={image} alt="productImg" className="imageStyle" />
      </div>
      <div className="infoContainer">
        <div className="usflagContainer">
          {stock_in_usa && (
            <>
              <img src={usFlag} alt="us-flag" className="usFlagStyle" />
              <p className="usFlagText">Stock in USA</p>
            </>
          )}
        </div>

        <p className="titleStyle">{title}</p>
        <p className="moqText">{`MOQ: ${moq} ${unit}`}</p>
        <h3 className="priceText">
          $ {max_price ? `${min_price} - $ ${max_price}` : min_price} / {unit}
        </h3>

        <button onClick={addToCart} disbled={disbled ? `${disbled}` : ""}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductGridCard;
