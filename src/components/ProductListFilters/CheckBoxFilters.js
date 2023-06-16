import { useState } from "react";
import "./styles/CheckBoxGroup.css";
import { BiSearch } from "react-icons/bi";

function CheckboxGroup({
  title,
  placeholder,
  options,
  selectedValues,
  onChange,
}) {
  const [show, setShow] = useState(`Show All (${options.length})`);
  const [searchQuery, setSearchQuery] = useState("");

  function handleShow() {
    if (show === `Show All (${options.length})`) {
      setShow("Show Less");
    } else {
      setShow(`Show All (${options.length})`);
    }
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((selectedValue) => selectedValue !== value);

    onChange(updatedValues);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="checkbox-group">
      <h3>{title}</h3>
      <div className="inputContainer searchFilter">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <BiSearch style={{ fontSize: 18, color: "#99A3A4" }} />
      </div>
      <div
        className={
          show === `Show All (${options.length})` && options.length > 6
            ? "check-list"
            : "check-list show-list"
        }
      >
        {filteredOptions.length !== 0 ? (
          filteredOptions.map((option) => (
            <div key={option}>
              <label className="checkLabel">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                />
                {option}
              </label>
            </div>
          ))
        ) : (
          <p className="error-text">No Results Found</p>
        )}
      </div>
      {options.length > 6 && <p onClick={handleShow}>{show}</p>}
    </div>
  );
}

export default CheckboxGroup;
