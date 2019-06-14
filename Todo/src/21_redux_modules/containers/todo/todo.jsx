import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';
import {addTask, removeTask, completedTask, changeFilter} from '../../actions/actionCreator';
import './todo.css';

class ToDo extends Component {

  state = {
    // activeFilter: 'all',
    taskText: '',
  }

  handleInput =({target: {value}}) => {
    this.setState({
      taskText: value,
    })
  }
  addTask = ({key}) => {
    const {taskText} = this.state;
    if(taskText.length >3 && key === 'Enter') {
      const {addTask} = this.props;
      addTask((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: '',
      })
    }
  }
  filterTasks = (tasks, activeFilter) => {
    switch(activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default: return tasks;
    }
  }
  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { activeFilter, taskText } = this.state;
    const {tasks, removeTask, completedTask, filter, changeFilter} = this.props ;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filter);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.handleInput} value={taskText} />
        {isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completedTask={completedTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filter} />}
      </div>
    );
  }
}

// export default connect(state => ({
//   tasks: state.tasks,
//   filter: state.filter,
export default connect(({tasks, filter}) => ({
tasks,
filter,
}), {addTask, removeTask, completedTask, changeFilter} ) (ToDo);
