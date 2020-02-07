import { ACTIONS } from "../constants/actions";

const initialState = {
  university: null,
  course: null,
  faculty: null,
  group: null,
  day: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.SET_CONFIGURATION:
      return {
        ...state,
        university: action.university,
        course: action.course,
        faculty: action.faculty,
        group: action.group,
        day: action.day
      };

    default:
      return state;
  }
}

export const setConfigurationAction = ({
  university,
  course,
  faculty,
  group,
  day
}) => ({
  type: ACTIONS.SET_CONFIGURATION,
  university,
  course,
  faculty,
  group,
  day
});
