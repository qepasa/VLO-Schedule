import { PreferencesState } from './reducer';

export const getFiltersForCurrentClass = (state: PreferencesState) => state.groupFilters[state.class];