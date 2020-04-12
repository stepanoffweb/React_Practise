import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';

class ToDo extends Component {

  state = {
    activeFilter: 'all',
    taskText: ''
  }

  handleInput = ({target: {value}}) =>{
    this.setState({
      taskText: value
    })
  }

  addTask = ({key}) => {
    const {taskText} = this.state;
    if(taskText.length > 3 && key === 'Enter') {
      const {addTask, removeTask, completeTask} = this.props;
      console.log('state', this.state);
      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })
    }
  }
  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
        break;
      case 'active':
        return tasks.filter(task => !task.isCompleted);
        break;
      default:
        return tasks;
    }
  }
  getActiveTasksCount = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const tasksCount = this.getActiveTasksCount(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.handleInput} value={taskText} />
        {isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={tasksCount} activeFilter={filters} />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
  filters: state.filters
}), {addTask, removeTask, completeTask, changeFilter})(ToDo);
