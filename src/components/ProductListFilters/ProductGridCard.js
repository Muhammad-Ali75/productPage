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
}) {
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
        <p className="moqText">MOQ: {moq} Peices</p>
        <h3 className="priceText">
          $ {max_price ? `${min_price} - $ ${max_price}` : min_price} / Peices
        </h3>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductGridCard;
