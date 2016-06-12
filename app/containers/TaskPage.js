import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import TaskList from '../components/TaskList';
import * as TaskActions from '../actions/task';

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TaskActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
