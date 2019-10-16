import {
  CHANGE_NAV_TRANSPARENCY,
} from 'types/actions';

export default (state = { transparency: false }, action) => {
  switch (action.type) {
    case CHANGE_NAV_TRANSPARENCY:
      return { ...state, transparency: action.data };
    default:
      return state;
  }
};
