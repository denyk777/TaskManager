import React from 'react';

import FormTask from '../../components/article/FormTask';
import Button from '../../components/button/Button';
import list from './list';

import './style.css';

export default class Home extends React.Component {
  done = <Button className={"article__button article__finished_task_button"}/>;
  delete = <Button className={"article__button article__delete_button"}/>;
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <FormTask key={index} description={item.description}
          doneButton={this.done}
          deleteButton={this.delete}/>
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