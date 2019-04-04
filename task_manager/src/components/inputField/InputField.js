import React from 'react';
import PropTypes from 'prop-types';

import "./style.css";

export default class InputField extends React.Component{
  render() {
    const {value, className, type, name, placeholder, onChange} = this.props;
    return <input
      className={`button ${className}`}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  }
}

InputField.defaultProps = {
  value: '',
  className: '',
  type: 'text',
  name: '',
  placeholder: '',
  onChange: () => {},
};

InputField.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};