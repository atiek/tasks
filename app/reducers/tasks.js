import { ADD_TASK } from '../actions/task';

function task(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state;
  }
}

export default function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state;
  }
}
