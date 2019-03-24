import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
  render() {
    const {value, className, disabled} = this.props;
    return <button className={`button ${className}`} disabled={disabled}>{value}</button>
  }
}

Button.defaultProps = {
  value: '',
  className: '',
  disabled: true
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};