import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import styles from './AddTask.css'
import { addTask } from '../actions/task';
import { Button } from 'react-desktop/windows';
import { TextInput } from 'react-desktop/osx';

let AddTask = ({ dispatch }) => {
  let input

  return (
    <div className={styles.bottom}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTask(input.value))
        input.value = ''
      }}>
        <TextInput ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}
AddTask = connect()(AddTask)

export default AddTask
