import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FormTask extends React.Component {
  render() {
    return (
      <form className="article article__border_style">
        {this.props.doneButton}
        <p className="article__text ">{this.props.description}</p>
        {this.props.editButton}
        {this.props.deleteButton}
      </form>
    );
  };
};

FormTask.propTypes = {
  description: PropTypes.string,
  doneButton: PropTypes.object,
  editButton: PropTypes.object,
  deleteButton:PropTypes.object,
};

FormTask.defaultProps = {
  description: '',
};
