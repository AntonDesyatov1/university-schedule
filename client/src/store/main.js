import { ACTIONS } from "../constants/actions";
import {
  loginUserRequest,
  fetchUserDataRequest,
  signupUserRequest,
} from "../api";

const initialState = {
  user: null,
  university: null,
  isLoading: true,
  error: null,
  isConfigOpen: false,
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

    case ACTIONS.OPEN_CONFIG:
      return {
        ...state,
        isConfigOpen: true,
      };

    case ACTIONS.SET_UNIVERSITY_ACTION:
      return {
        ...state,
        university: action.payload,
      };
    default:
      return state;
  }
}

//ERRORS ACTIONS CREATORS
export const setLoadingTrueAction = () => ({
  type: ACTIONS.LOADING_STATUS_TRUE,
  payload: {
    isLoading: true,
  },
});

export const setUniversityAction = (university) => ({
  type: ACTIONS.SET_UNIVERSITY_ACTION,
  payload: university,
});

export const setLoadingFalseAction = () => ({
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

export const openConfigAction = () => ({
  type: ACTIONS.OPEN_CONFIG,
});

export const closeConfigAction = () => ({
  type: ACTIONS.CLOSE_CONFIG,
});
