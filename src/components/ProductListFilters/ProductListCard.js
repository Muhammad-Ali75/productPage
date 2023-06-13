import usFlag from "../../assets/usaflag.svg";
function ProductListCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "10rem",
        border: "1px solid black",
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
        style={{ height: "auto", width: "auto", maxHeight: "100%" }}
      />
      <div>
        <p>title</p>
        <div>
          <img src={usFlag} alt="us-flag" />
        </div>
        <p>moq</p>
        <p>price</p>

        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductListCard;
