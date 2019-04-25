import {ADD_TODO} from "./actionTypes";

export default function addTodo(id, text) {
  return {
    type: ADD_TODO,
    id: id,
    description: text,
  }
}