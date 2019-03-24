import React from 'react';

import FormTask from '../../components/article/FormTask';

import list from './list';
import Button from '../../components/button/Button'

import './style.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  deleteTask = (event) => {
    event.preventDefault();
    delete list.data[event.target.id];
    this.setState({id: event.target.id})
  };

  renderList = () => {
    return list.data.map((item, index) => {
      return (
          <FormTask key={index} title={item.title} description={item.description}
            doneButton = {<Button className={"article__button article__done_button"} id={this.state.id} eventTask={this.finishTask}/>}
            editButton = {<Button className={"article__button article__edit_button"} id={this.state.id} eventTask={this.editTask}/>}
            deleteButton = {<Button className={"article__button article__delete_button"} id={item.id} eventTask={this.deleteTask}/>}
          />
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
