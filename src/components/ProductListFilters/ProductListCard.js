import { useContext, useState } from "react";
import { Context as ProductContext } from "../../context/ProductContext";
import "./styles/ProductListCard.css";
import usFlag from "../../assets/usaflag.svg";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/productSlice";

function ProductListCard({
  _id,
  title,
  image,
  stock_in_usa,
  moq,
  min_price,
  max_price,
  unit,
}) {
  // const {
  //   state: { cart },
  //   addCart,
  // } = useContext(ProductContext);
  const dispatch = useDispatch();

  const [disbled, setDisabled] = useState(false);

  function addToCart() {
    if (!disbled) {
      setDisabled(() => true);
      dispatch(addCart());
    }
  }

  return (
    <div className="listCardContainer" key={_id}>
      <div className="list-image-container">
        <img src={image} alt="productImg" className="product-image" />
      </div>
      <div className="info-container">
        <p className="title-text">{title}</p>
        <div className="us-flag-container">
          {stock_in_usa && (
            <>
              <img
                src={usFlag}
                alt="us-flag"
                style={{ height: "2rem", width: "2rem" }}
              />
              <p style={{ fontSize: 12, paddingLeft: 10, paddingTop: 5 }}>
                Stock in USA
              </p>
            </>
          )}
        </div>
        <p style={{ fontSize: 14, color: "#ababab", paddingBottom: 5 }}>
          MOQ: {moq} Peices
        </p>
        <h3 style={{ fontSize: 18, paddingBottom: 5 }}>
          $ {max_price ? `${min_price} - $ ${max_price}` : min_price} / Peices
        </h3>

        <button
          className="addCartBtn"
          onClick={addToCart}
          disbled={disbled ? `${disbled}` : ""}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductListCard;
