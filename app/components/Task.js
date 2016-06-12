import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
class Task extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const {
      text
    } = this.props;
    return (
      <li>
        {text}
      </li>
    );
  }
}

export default Task;
