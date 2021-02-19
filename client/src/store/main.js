import axios from "axios";
import { ACTIONS } from "../constants/actions";

const initialState = {
  isLoading: true,
  error: null,
  data: {
    universities: [],
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOADING_STATUS_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    case ACTIONS.LOADING_STATUS_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    case ACTIONS.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case ACTIONS.CREATE_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    case ACTIONS.CLOSE_CONFIG:
      return {
        ...state,
        isConfigOpen: false,
      };

    case ACTIONS.SET_SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case ACTIONS.SET_UNIVERSITIES_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          universities: action.payload,
        },
      };

    default:
      return state;
  }
}

//ERRORS ACTIONS CREATORS
export const setLoadingTrue = () => ({
  type: ACTIONS.LOADING_STATUS_TRUE,
  payload: {
    isLoading: true,
  },
});

export const setLoadingFalse = () => ({
  type: ACTIONS.LOADING_STATUS_FALSE,
  payload: {
    isLoading: false,
  },
});

export const clearErrorsAction = () => ({
  type: ACTIONS.CLEAR_ERRORS,
  payload: {
    error: null,
  },
});

export const createErrorAction = (error) => ({
  type: ACTIONS.CREATE_ERROR,
  payload: {
    error,
  },
});

export const setUniversitiesData = (data) => ({
  type: ACTIONS.SET_UNIVERSITIES_DATA,
  payload: data,
});

export const fetchUniversities = () => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const { data } = await axios.get("http://localhost:9000/universities");
    dispatch(setUniversitiesData(data));
    dispatch(setLoadingFalse());
  } catch (e) {}
};

export const setScheduleData = (payload) => ({
  type: ACTIONS.SET_SCHEDULE_DATA,
  payload,
});

export const fetchGroupSchedule = (groupId) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const { data } = await axios.get(
      "http://localhost:9000/fetchScheduleData",
      { headers: { groupId } },
    );
    dispatch(setScheduleData(data));
    dispatch(setLoadingFalse());
  } catch (e) {}
};

export const openConfigAction = () => ({
  type: ACTIONS.OPEN_CONFIG,
});

export const closeConfigAction = () => ({
  type: ACTIONS.CLOSE_CONFIG,
});
