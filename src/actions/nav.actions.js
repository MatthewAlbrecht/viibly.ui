import { CHANGE_NAV_TRANSPARENCY } from 'types/actions'

export const changeNavTransparency = data => dispatch => {
  dispatch({
    type: CHANGE_NAV_TRANSPARENCY,
    data,
  })
}
