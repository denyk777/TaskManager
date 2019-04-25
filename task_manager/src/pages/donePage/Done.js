import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import getDoneList from '../../actions/itemList/getDoneList'
import FormTask from '../../components/article/FormTask';
import Button from '../../components/button/Button';

import './style.css';

class Done extends React.Component {
  componentDidMount(){
    this.props.getItemList();
    this.getLastId();
  }

  constructor(props) {
    super(props);

    this.state = {
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

  done = <Button className={"article__button article__finished_task_button"}/>;

  renderList = () => {
    return this.props.itemList.map((item) => {
      return (
        <FormTask key={item.id} description={item.description}
          doneButton={this.done}
          deleteButton={<Button className={"article__button article__delete_button"} id={item.id}/>}/>
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


const mapDispatchProps = (dispatch) => ({
  getItemList: bindActionCreators(getDoneList, dispatch),
});

const mapStateToProps = (state) => ({
  itemList: state.itemListReducer.itemList,
});

export default connect (mapStateToProps, mapDispatchProps) (Done);