import React from 'react';
import PropTypes from 'prop-types';
import './todo-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, completedTask, id }) => (
  <li className="todo-item">
    <i onClick={() => completedTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: 0,
  removeTask: () => {},
}

export default ToDoItem;
