import { ACTIONS } from "../constants/constants";
import {
  loginUserRequest,
  fetchUserDataRequest,
  signupUserRequest
} from "../api";

const initialState = {
  isLoading: false,
  user: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOADING_STATUS_TRUE:
      return {
        ...state,
        isLoading: true
      };

    case ACTIONS.LOADING_STATUS_FALSE:
      return {
        ...state,
        isLoading: false
      };

    case ACTIONS.LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.payload.data
      };

    case ACTIONS.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload.data
      };

    case ACTIONS.CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };

    case ACTIONS.LOGOUT:
      return {
        ...state,
        user: null
      };

    case ACTIONS.CREATE_ERROR:
      return {
        ...state,
        error: action.payload.error
      };
  }
  return state;
}

//ERRORS ACTIONS CREATORS
export const setLoadingTrueAction = () => ({
  type: ACTIONS.LOADING_STATUS_TRUE,
  payload: {
    isLoading: true
  }
});

export const setLoadingFalseAction = () => ({
  type: ACTIONS.LOADING_STATUS_FALSE,
  payload: {
    isLoading: false
  }
});

export const clearErrorsAction = () => ({
  type: ACTIONS.CLEAR_ERRORS,
  payload: {
    error: null
  }
});

export const createErrorAction = error => ({
  type: ACTIONS.CREATE_ERROR,
  payload: {
    error
  }
});

//USER ACTIONS CREATORS

export const setUserAction = data => ({
  type: ACTIONS.LOGIN_USER_SUCCESSFUL,
  payload: {
    data
  }
});

export const loginUserFailureAction = data => ({
  type: ACTIONS.LOGIN_USER_FAILURE,
  payload: {
    data
  }
});

export const logoutAction = () => {
  localStorage.removeItem("user");
  return { type: ACTIONS.LOGOUT };
};

export const loginUserAction = (login, password) => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await loginUserRequest(login, password);
    data.error
      ? dispatch(createErrorAction(data.error))
      : () => {
          dispatch(setUserAction(data));
          localStorage.setItem("user", data.login);
        };

    dispatch(setLoadingFalseAction());
  } catch (e) {}
};

export const fetchUserDataAction = login => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await fetchUserDataRequest(login);
    dispatch(setUserAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};

export const signupUserAction = (login, password) => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await signupUserRequest(login, password);
    localStorage.setItem("user", data.login);
    dispatch(setUserAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};
