import { useContext } from "react";
// import { Context as ProductContext } from "../../context/ProductContext";
import { Context as PleContext } from "../../context/ProductListEnhancement";

import "./styles/FilterSection.css";
import CheckboxGroup from "./CheckBoxFilters";
import usFlag from "../../assets/usaflag.svg";
import { useSelector } from "react-redux";

function FiltersSection() {
  // const {
  //   state: { filters },
  // } = useContext(ProductContext);
  const { filters } = useSelector((state) => state.product);

  const {
    state: {
      min_price,
      max_price,
      moq,
      product_certificate,
      supplier_certificate,
      country,
      stock_in_usa,
    },
    minPriceChange,
    maxPriceChange,
    moqChange,
    productCertificateChange,
    supplierCertificateChange,
    countryChange,
    stockInUsaChange,
  } = useContext(PleContext);

  function handleMinPrice({ target: { value } }) {
    minPriceChange(value);
  }
  function handleMaxPrice({ target: { value } }) {
    maxPriceChange(value);
  }

  function handlemoq({ target: { value } }) {
    moqChange(value);
  }

  const handleProductCertificationsChange = (values) => {
    productCertificateChange(values);
  };

  const handleSupplierCertificationsChange = (values) => {
    supplierCertificateChange(values);
  };

  const handleManufacturerLocationsChange = (values) => {
    countryChange(values);
  };

  return (
    <div className="filterContainer">
      {/* Price */}
      <div className="priceContainer">
        <h3>Price</h3>

        <div className="priceRangeContainer">
          <div className="inputContainer priceRange">
            <input
              value={min_price}
              type="number"
              placeholder="from"
              onChange={handleMinPrice}
            />
            <p>$</p>
          </div>

          <div className="dashed" />

          <div className="inputContainer priceRange">
            <input
              value={max_price}
              onChange={handleMaxPrice}
              type="number"
              placeholder="to"
            />
            <p>$</p>
          </div>
        </div>
      </div>

      {/* MOQ */}
      <div className="moqContainer">
        <h3>MOQ</h3>
        <input
          value={moq}
          type="number"
          placeholder="Less than"
          className="inputContainer moqInput"
          onChange={handlemoq}
        />
      </div>

      {/* Product Certifications */}
      <CheckboxGroup
        title={"Product Certification"}
        placeholder={"Product Certification"}
        options={filters.productCertification}
        selectedValues={product_certificate}
        onChange={handleProductCertificationsChange}
      />

      {/* Supplier Certifications */}
      <CheckboxGroup
        title={"Supplier Certification"}
        placeholder={"Supplier Certification"}
        options={filters.supplierCertification}
        selectedValues={supplier_certificate}
        onChange={handleSupplierCertificationsChange}
      />

      {/* Manufacturer Location */}
      <CheckboxGroup
        title={"Manufacturer Location"}
        placeholder={"Manufacturer Location"}
        options={filters.manufacturerLocation}
        selectedValues={country}
        onChange={handleManufacturerLocationsChange}
      />
      {/* Stock Availability */}
      <div className="stockAvailContainer">
        <h3>Stock Availability</h3>
        <label>
          <input
            checked={stock_in_usa}
            type="checkbox"
            onChange={stockInUsaChange}
          />
          <img src={usFlag} alt="us-logo" />
          In USA
        </label>
      </div>
    </div>
  );
}

export default FiltersSection;
