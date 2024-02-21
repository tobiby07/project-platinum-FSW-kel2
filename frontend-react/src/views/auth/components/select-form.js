import React from 'react';

const SelectForm = ({ contenLabel, value, options, contenOption, onChange }) => {
  if (!Array.isArray(options)) {
    return null; 
  }
  return (
    <div  className="form-outline mb-4">
      <label className="form-label">{contenLabel}:</label>
      <select value={value} onChange={onChange} className="form-control form-control-lg">
        <option value="">{contenOption}</option>
        {options.map(option => (
          <option key={option.name} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
