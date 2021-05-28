import scheduleReducer from './schedule/reducer';
import classesReducer from './classes/reducer';
import preferencesReducer from './preferences/reducer';
import dateReducer from './date/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  schedule: scheduleReducer,
  classes: classesReducer,
  preferences: preferencesReducer,
  date: dateReducer,
});

export default rootReducer;
