
import { combineReducers } from 'redux';
import scheduleReducer from './schedule/reducer';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
});

export default rootReducer;
