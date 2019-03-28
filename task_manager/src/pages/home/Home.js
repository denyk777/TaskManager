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

  deleteTask = (id) => {
    alert(list.data[id].description);
    delete list.data[id];
    this.setState({id: id});
  };

  editTask = (id) => {
    alert(list.data[id].description);
  };

  finishTask = (id) => {
    alert(list.data[id].description);
  };

  renderList = () => {
    return list.data.map((item, index) => {
      return (
          <FormTask key={index} title={item.title} description={item.description}
            doneButton = {<Button className={"article__button article__done_button"} eventTask={this.finishTask.bind(this, item.id)}/>}
            editButton = {<Button className={"article__button article__edit_button"} eventTask={this.editTask.bind(this, item.id)}/>}
            deleteButton = {<Button className={"article__button article__delete_button"} eventTask={this.deleteTask.bind(this, item.id)}/>}
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
