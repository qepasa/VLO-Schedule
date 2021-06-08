import * as scheduleActions from './schedule/actions';
import * as classesActions from './classes/actions';
import * as preferencesActions from './preferences/actions';
import * as dateActions from './date/actions';
import * as substitutionsActions from './substitutions/actions';

export default {
  date: dateActions,
  schedule: scheduleActions,
  classes: classesActions,
  preferences: preferencesActions,
  substitutions: substitutionsActions,
};
