import React from 'react';
import FormTask from '../../components/article/FormTask';
import list from './list';
import style from './styles.css';


export default class Test extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return <FormTask key={index} description={item.description} styleButton={"inline_style article_edit_button"}/>
    })
  };
  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    )
  }

}