import scheduleReducer from './schedule/reducer';
import classesReducer from './classes/reducer';
import preferencesReducer from './preferences/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  classes: classesReducer,
  preferences: preferencesReducer,
});

export default rootReducer;
