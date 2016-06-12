import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import tasks from './tasks';

const rootReducer = combineReducers({
  tasks,
  counter,
  routing
});

export default rootReducer;
