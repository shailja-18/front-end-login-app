import React from 'react';

import './index.scss';

const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input;
