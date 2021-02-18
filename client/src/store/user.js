import { ACTIONS } from "../constants/actions";
import { loginUserRequest } from "../api";

const initialState = {
  loggedIn: false,
  name: null,
  data: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        data: action.payload.data,
        loggedIn: true,
      };

    case ACTIONS.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
}

export const setLoadingTrueAction = () => ({
  type: ACTIONS.LOADING_STATUS_TRUE,
  payload: {
    isLoading: true,
  },
});

export const setLoadingFalseAction = () => ({
  type: ACTIONS.LOADING_STATUS_FALSE,
  payload: {
    isLoading: false,
  },
});

export const loginUserAction = (login, password) => async (dispatch) => {
  dispatch(setLoadingTrueAction());
  try {
    const [data] = await loginUserRequest(login, password);
    dispatch(setUserAction(data));
    localStorage.setItem("user", data.login);

    dispatch(setLoadingFalseAction());
  } catch (e) {
    console.log(e);
  }
};

export const setUserAction = (data) => ({
  type: ACTIONS.LOGIN_USER_SUCCESSFUL,
  payload: {
    data,
  },
});
