import { CHANGE_FILTER } from '../actions/actionTypes';
import { CATEGORY_FILTERS } from '../constants';

export const initialState = CATEGORY_FILTERS.ALL;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filter;
