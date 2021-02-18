import { ACTIONS } from "../constants/actions";
import { setLoadingFalseAction, setLoadingTrueAction } from "./main";
import { fetchScheduleDataRequest, fetchUniversitiesRequest } from "../api";

const initialState = {
  universities: null,
  teachers: [],
  data: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.SET_DAY:
      return {
        ...state,
        day: action.payload
      };

    case ACTIONS.SET_UNIVERSITIES_DATA:
      return {
        ...state,
        universities: action.payload
      };

    case ACTIONS.SET_DATA:
      return {
        ...state,
        data: action.payload.courses,
        teachers: action.payload.teachers
      };

    default:
      return state;
  }
}

const setDataAction = data => ({
  type: ACTIONS.SET_DATA,
  payload: data
});

const setUniversitiesDataAction = data => ({
  type: ACTIONS.SET_UNIVERSITIES_DATA,
  payload: data
});

export const fetchUniversitiesAction = () => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await fetchUniversitiesRequest();
    dispatch(setUniversitiesDataAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};

// export const fetchUniversityDataAction = university => async dispatch => {
//   dispatch(setLoadingTrueAction);
//   try {
//     const data = await fetchUniversityDataRequest(university);
//     dispatch(setDataAction(data));
//     dispatch(setLoadingFalseAction());
//   } catch (e) {}
// };

export const fetchScheduleDataAction = university => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await fetchScheduleDataRequest(university);
    dispatch(setDataAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};
