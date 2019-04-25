import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FormTask from '../../components/article/FormTask';

import getTodoList from '../../actions/itemList/getTodoList'
import addTask from '../../actions/itemList/addItemToList'
import Button from '../../components/button/Button'

import './style.css';
import InputField from "../../components/inputField/InputField";

class Home extends React.Component {
  componentDidMount(){
    this.props.getItemList();
    this.getLastId();
  }

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      task_id: 0,
    };
  }



  getLastId = () => {
    this.props.itemList.forEach((item) => {
      if (item.id > this.task_id) {
        this.task_id = item.id;
      }
    })
  };

  renderList = () => {
    return this.props.itemList.map((item) => {
      return (
        <FormTask key={item.id} description={item.description}
                  doneButton = {<Button className={"article__button article__done_button"} />}
                  editButton = {<Button className={"article__button article__edit_button"} />}
                  deleteButton = {<Button className={"article__button article__delete_button"} />}
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



  onSubmit = (event) => {
    this.props.addTodo(this.task_id++, this.state.value);
    this.setState({
      value: '',
    })
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <InputField className="input_field__edit_field" placeholder="Type your new task" value={this.state.value} onChange={this.onChange}/>
          <Button className="input_field__submit_button" type="button" value="Create" disabled={this.state.value===''} eventTask={this.onSubmit} />
        </form>
        {this.renderList()}
      </React.Fragment>
    );
  };
}

const mapDispatchProps = (dispatch) => ({
  getItemList: bindActionCreators(getTodoList, dispatch),
  addTodo: bindActionCreators(addTask, dispatch),
});

const mapStateToProps = (state) => ({
  itemList: state.itemListReducer.itemList,
  addTodo: state.itemListReducer.addTodo,
});

export default connect(mapStateToProps, mapDispatchProps)(Home);