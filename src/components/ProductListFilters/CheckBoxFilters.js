function CheckboxGroup({ title, options, selectedValues, onChange }) {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((selectedValue) => selectedValue !== value);

    onChange(updatedValues);
  };

  return (
    <div className="checkbox-group">
      <h3>{title}</h3>
      {options &&
        options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={selectedValues.includes(option)}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          </div>
        ))}
    </div>
  );
}

export default CheckboxGroup;
