import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ 
  placeholder = '', 
  value = '', 
  onChange, 
  rows = 4,
  disabled = false,
  fullWidth = true,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-lato text-sm lg:text-base font-normal leading-5 lg:leading-5 text-input bg-global-5 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-global-3 transition-all duration-200 resize-vertical';
  
  const textareaClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    px-3 py-2 lg:px-[14px] lg:py-3
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      className={textareaClasses}
      {...props}
    />
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default TextArea;