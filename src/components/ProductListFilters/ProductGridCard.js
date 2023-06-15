import usFlag from "../../assets/usaflag.svg";
import "./styles/ProductGridCard.css";

function ProductGridCard({
  title,
  isUsa = true,
  moq = 1000,
  lowPrice = 1,
  highPrice = 200,
}) {
  return (
    <div className="gridCardContainer">
      <img
        src="https://tbh-production.s3.ap-southeast-1.amazonaws.com/Product/2034888965/Images/16066601421950233806.png"
        alt="productImg"
        className="imageStyle"
      />
      <div className="infoContainer">
        {isUsa && (
          <div className="usflagContainer">
            <img src={usFlag} alt="us-flag" className="usFlagStyle" />
            <p className="usFlagText">Stock in USA</p>
          </div>
        )}
        <p className="titleStyle">
          {title ||
            "TITLE lorem ips lorem ipsum dolor sit amet, consectetur adip lorem sit"}
        </p>
        <p className="moqText">MOQ: {moq} Peices</p>
        <h3 className="priceText">
          $ {highPrice ? `${lowPrice} - $ ${highPrice}` : lowPrice} / Peices
        </h3>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductGridCard;
