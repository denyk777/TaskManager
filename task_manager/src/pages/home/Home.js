import React from 'react';
import { connect } from "react-redux";

import FormTask from '../../components/article/FormTask';

import list from './list';
import Button from '../../components/button/Button'

import './style.css';
import InputField from "../../components/inputField/InputField";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      itemList: [...list.data],
    };
  }

  deleteTask = (id) => {
    alert(this.state.itemList[id].description);
  };

  editTask = (id) => {
    alert(this.state.itemList[id].description);
  };

  finishTask = (id) => {
    alert(this.state.itemList[id].description);
  };

  renderList = (itemList) => {
    return itemList.map((item, index) => {
      return (
          <FormTask key={index} description={item.description}
            doneButton = {<Button className={"article__button article__done_button"} eventTask={this.finishTask.bind(this, index)}/>}
            editButton = {<Button className={"article__button article__edit_button"} eventTask={this.editTask.bind(this, index)}/>}
            deleteButton = {<Button className={"article__button article__delete_button"} eventTask={this.deleteTask.bind(this, index)}/>}
          />
      );
    });
  };

  onChange = (event) => {
      this.setState({
        value: event.target.value,
      }

      ) ;
  };

//

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: '',
      itemList: [
        {
          "description":this.state.value
        },
        ...this.state.itemList,
        ]
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <InputField className="input_field__edit_field" placeholder="Type your new task" value={this.state.value} onChange={this.onChange}/>
          <Button className="input_field__submit_button" type="button" value="Create" disabled={this.state.value===''} eventTask={this.onSubmit}/>
        </form>
        {this.renderList(this.state.itemList)}
      </React.Fragment>
    );
  };
}

const mapDispatchProps = () => ({});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchProps)(Home);