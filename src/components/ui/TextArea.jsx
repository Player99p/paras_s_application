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
  error = '',
  ...props 
}) => {
  const baseClasses = 'font-lato text-sm lg:text-base font-normal leading-5 lg:leading-5 text-input bg-global-5 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-global-3 transition-all duration-200 resize-vertical';
  
  const textareaClasses = `
    ${baseClasses}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${error ? 'ring-2 ring-red-500 focus:ring-red-500' : ''}
    px-3 py-2 lg:px-[14px] lg:py-3
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <div className="w-full">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      {error ? (
        <p className="mt-1 font-lato text-xs lg:text-sm text-red-400" role="alert">{error}</p>
      ) : null}
    </div>
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
  error: PropTypes.string,
};

export default TextArea;