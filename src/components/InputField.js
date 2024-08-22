import React from 'react';

const InputField = ({ type, placeholder, value, onChange, min, max }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      style={{ width: '100%', padding: '10px', margin: '10px 0' }}
    />
  );
};

export default InputField;
