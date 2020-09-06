import React from 'react';
import classnames from 'classnames';

import './index.scss';

const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button disabled={disabled} className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
