import { useState } from "react";
import CheckBoxFilters from "./CheckBoxFilters";
import "./styles/FilterSection.css";
import CheckboxGroup from "./CheckBoxFilters";

function FiltersSection() {
  const filtersList = {
    productCertification: [
      "ASTM",
      "CE",
      "Certificate of Compliance",
      "Certificate of Conformity",
      "EN",
      "EPA",
      "FCC",
      "FDA",
      "GB",
      "Green Clean Certificate",
      "Interek",
      "ISO 11439:2000",
      "ISO 11439:2013",
      "ROHS",
      "SGS",
    ],
    supplierCertification: [
      "DUNS",
      "DRS",
      "GMP",
      "ISO 13485",
      "ISO 9001",
      "ISO 9001:2015",
    ],
    manufacturerLocation: [
      "Australia",
      "Canada",
      "China",
      "Hong Kong S.A.R",
      "India",
      "Korea, Republic of",
      "United Kingdom",
      "United States",
      "Vietnam",
    ],
  };

  const [productCertifications, setProductCertifications] = useState([]);
  const [supplierCertifications, setSupplierCertifications] = useState([]);
  const [manufacturerLocations, setManufacturerLocations] = useState([]);

  const handleProductCertificationsChange = (values) => {
    setProductCertifications(values);
  };

  const handleSupplierCertificationsChange = (values) => {
    setSupplierCertifications(values);
  };

  const handleManufacturerLocationsChange = (values) => {
    setManufacturerLocations(values);
  };

  return (
    <div className="filterContainer">
      {/* Price */}
      <div className="priceContainer">
        <h3>Price</h3>

        <div className="priceRangeContainer">
          <div className="inputContainer priceRange">
            <input type="number" placeholder="from" />
            <p>$</p>
          </div>

          <div className="dashed" />

          <div className="inputContainer priceRange">
            <input type="number" placeholder="to" />
            <p>$</p>
          </div>
        </div>
      </div>

      {/* MOQ */}
      <div className="moqContainer">
        <h3>MOQ</h3>
        <input
          type="number"
          placeholder="Less than"
          className="inputContainer moqInput"
        />
      </div>

      {/* Product Certifications */}
      <CheckboxGroup
        title={"Product Certification"}
        options={filtersList.productCertification}
        selectedValues={productCertifications}
        onChange={handleProductCertificationsChange}
      />

      {/* Supplier Certifications */}
      <CheckboxGroup
        title={"Supplier Certification"}
        options={filtersList.supplierCertification}
        selectedValues={supplierCertifications}
        onChange={handleSupplierCertificationsChange}
      />

      {/* Manufacturer Location */}
      <CheckboxGroup
        title={"Manufacturer Location"}
        options={filtersList.manufacturerLocation}
        selectedValues={manufacturerLocations}
        onChange={handleManufacturerLocationsChange}
      />
      {/* Stock Availability */}
      <CheckBoxFilters />
      <div className="stockAvailContainer"></div>
    </div>
  );
}

export default FiltersSection;
