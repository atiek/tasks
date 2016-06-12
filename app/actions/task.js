export const ADD_TASK = 'ADD_TASK';

let todoId = 0;

export function addTask(text) {
  return {
    type: ADD_TASK,
    id: todoId++,
    text
  };
}
