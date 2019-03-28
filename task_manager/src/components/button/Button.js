import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
  render() {
    const {value, className, disabled, eventTask} = this.props;
    return <button className={`button ${className}`} type="button" disabled={disabled} onClick={eventTask}>{value}</button>
  }
}

Button.defaultProps = {
  value: '',
  className: '',
  disabled: false,
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  eventTask: PropTypes.func
};