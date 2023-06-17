import "./styles/ProductListCard.css";
import usFlag from "../../assets/usaflag.svg";

function ProductListCard({
  title,
  isUsa = true,
  moq = 1000,
  lowPrice = 1,
  highPrice = 200,
}) {
  return (
    <div className="listCardContainer">
      <img
        src="https://tbh-production.s3.ap-southeast-1.amazonaws.com/Product/2034888965/Images/16066601421950233806.png"
        alt="productImg"
        className="product-image"
      />
      <div className="info-container">
        <p className="title-text">{title || "TITLE lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 lorem50 "}</p>
        {isUsa && (
          <div
            style={{ flexDirection: "row", display: "flex", paddingBottom: 5 }}
          >
            <img
              src={usFlag}
              alt="us-flag"
              style={{ height: "2rem", width: "2rem" }}
            />
            <p style={{ fontSize: 12, paddingLeft: 10, paddingTop: 5 }}>
              Stock in USA
            </p>
          </div>
        )}
        <p style={{ fontSize: 14, color: "#ababab", paddingBottom: 5 }}>
          MOQ: {moq} Peices
        </p>
        <h3 style={{ fontSize: 18, paddingBottom: 5 }}>
          $ {highPrice ? `${lowPrice} - $ ${highPrice}` : lowPrice} / Peices
        </h3>

        <button className="addCartBtn">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductListCard;
