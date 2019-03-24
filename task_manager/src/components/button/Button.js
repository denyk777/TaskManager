import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component{
  render() {
    const {value, className, disabled, id, eventTask} = this.props;
    return <button className={`button ${className}`} id={id} disabled={disabled} onClick={eventTask}>{value}</button>
  }
}

Button.defaultProps = {
  value: '',
  className: '',
  disabled: false,
  id: ''
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  eventTask: PropTypes.func
};