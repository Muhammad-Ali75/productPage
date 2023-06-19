import usFlag from "../../assets/usaflag.svg";
import "./styles/ProductGridCard.css";

function ProductGridCard({
  key,
  title,
  isUsa = false,
  moq,
  lowerPriceRange,
  upperPriceRange,
}) {
  return (
    <div className="gridCardContainer" key={key}>
      <img
        src="https://tbh-production.s3.ap-southeast-1.amazonaws.com/Product/2034888965/Images/16066601421950233806.png"
        alt="productImg"
        className="imageStyle"
      />
      <div className="infoContainer">
        <div className="usflagContainer">
          {isUsa && (
            <>
              {" "}
              <img src={usFlag} alt="us-flag" className="usFlagStyle" />
              <p className="usFlagText">Stock in USA</p>
            </>
          )}
        </div>

        <p className="titleStyle">
          {title ||
            "TITLE lorem ips lorem ipsum dolor sit amet, consectetur adip lorem sit"}
        </p>
        <p className="moqText">MOQ: {moq} Peices</p>
        <h3 className="priceText">
          ${" "}
          {upperPriceRange
            ? `${lowerPriceRange} - $ ${upperPriceRange}`
            : lowerPriceRange}{" "}
          / Peices
        </h3>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductGridCard;
