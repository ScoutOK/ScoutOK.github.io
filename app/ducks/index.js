import { combineReducers } from 'redux';

import shadowbox from './shadowbox';

export default combineReducers({
  showBox: shadowbox,
})