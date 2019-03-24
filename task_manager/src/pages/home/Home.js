import React from 'react';

import FormTask from '../../components/article/FormTask';

import list from './list';
import Button from '../../components/button/Button'

import './style.css';

export default class Home extends React.Component {
  done = <Button className={"article__button article__done_button"}/>;
  edit = <Button className={"article__button article__edit_button"}/>;
  delete = <Button className={"article__button article__delete_button"}/>;
  renderList = () => {
    return list.data.map((item, index) => {
      return (
          <FormTask key={index} title={item.title} description={item.description}
            doneButton={this.done}
            editButton={this.edit}
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
