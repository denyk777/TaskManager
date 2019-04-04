import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
  render() {
    const {value, className, disabled, eventTask, type} = this.props;
    return <button className={`button ${className}`} type={type} disabled={disabled} onClick={eventTask}>{value}</button>
  }
}

Button.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  eventTask: PropTypes.func
};