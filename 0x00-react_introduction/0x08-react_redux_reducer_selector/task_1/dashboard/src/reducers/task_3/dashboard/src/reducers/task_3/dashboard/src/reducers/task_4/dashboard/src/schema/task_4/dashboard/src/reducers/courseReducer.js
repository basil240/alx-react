import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { normalize } from 'normalizr';

// Default State
const defaultState = Map({
  courses: Map({}),
});

// Reducer Function
const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], fromJS(normalizedData.entities.courses));

    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);

    // Default case
    default:
      return state;
  }
};

export default courseReducer;