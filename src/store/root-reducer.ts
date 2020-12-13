
import { combineReducers } from 'redux';
import scheduleReducer from './schedule/reducer';
import classesReducer from './classes/reducer';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  classes: classesReducer,
});

export default rootReducer;
