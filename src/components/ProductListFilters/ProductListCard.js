import usFlag from "../../assets/usaflag.svg";
function ProductListCard({
  title = "title",
  isUsa = true,
  moq = 1000,
  lowPrice = 1,
  highPrice = 200,
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        border: "1px solid #e2e8f0",
        borderRadius: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0.5rem",
      }}
    >
      <img
        src="https://tbh-production.s3.ap-southeast-1.amazonaws.com/Product/2034888965/Images/16066601421950233806.png"
        alt="productImg"
        style={{ height: "auto", width: "auto", maxHeight: "9rem" }}
      />
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <p style={{ paddingBottom: 5 }}>{title || "TITLE"}</p>
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

        <button
          style={{
            width: "9rem",
            height: "2rem",
            fontSize: 16,
            fontWeight: 400,
            background: "#00b2c9",
            color: "white",
            borderRadius: 8,
            border: "0px",
            padding: 4,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductListCard;
