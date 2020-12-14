import scheduleReducer from './schedule/reducer';
import classesReducer from './classes/reducer';
import preferencesReducer from './preferences/reducer';
import storage from "redux-persist/lib/storage";
import { persistCombineReducers } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['preferences'],
}
const rootReducer = persistCombineReducers(persistConfig, {
  schedule: scheduleReducer,
  classes: classesReducer,
  preferences: preferencesReducer,
});

export default rootReducer;
