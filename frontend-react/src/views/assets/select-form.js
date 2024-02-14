import React from 'react';

const SelectForm = ({ contenLabel, value, options, contenOption, onChange }) => {
  if (!Array.isArray(options)) {
    return null; 
  }
  return (
    <div className="mb-3">
      <label className="form-label font-weight-bold">{contenLabel}:</label>
      <select value={value} onChange={onChange} className="form-control rounded-0 font-style-italic">
        <option value="">{contenOption}</option>
        {options.map(option => (
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
