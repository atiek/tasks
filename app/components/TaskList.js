import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './TaskList.css';
import Task from './Task'
import AddTask from '../containers/AddTask'

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  render() {
    const {
      addTask,
      tasks
    } = this.props;
    return (
      <div className={styles.relative}>
        <h2>Task</h2>
        <ul>
          {tasks.map((task) =>
            <Task
              key={task.id}
              {...task}
            />
          )}
        </ul>
        <AddTask />
      </div>
    );
  }
}

export default TaskList;
