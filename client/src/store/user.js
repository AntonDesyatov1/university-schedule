import axios from "axios";
import { ACTIONS } from "../constants/actions";
import {
  setLoadingTrue,
  setLoadingFalse,
  setScheduleData,
} from "../store/main";

const initialState = {
  data: {
    university: null,
    loggedIn: false,
  },
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.LOGIN_USER_SUCCESSFUL:
      return {
        ...state,
        data: {
          university: state.data.university,
          ...action.payload,
          loggedIn: true,
        },
      };

    case ACTIONS.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    case ACTIONS.SET_UNIVERSITY_ACTION:
      return {
        ...state,
        data: { ...state.data, university: action.payload },
      };
    default:
      return state;
  }
}

export const setUniversity = (university) => ({
  type: ACTIONS.SET_UNIVERSITY_ACTION,
  payload: university,
});

export const userLoginFailure = (error) => ({
  type: ACTIONS.LOGIN_USER_FAILURE,
  payload: {
    error,
  },
});

export const loginUser = (login, password, university) => async (dispatch) => {
  dispatch(setLoadingTrue());
  try {
    const headers = { login, password, university };
    const { data } = await axios.get(`http://localhost:9000/loginUser`, {
      headers,
    });
    dispatch(setUserData(data));
    dispatch(setUniversity(university));
    localStorage.setItem("user", login);
    localStorage.setItem("password", password);
    localStorage.setItem("university", university);

    const { data: scheduleData } = await axios.get(
      "http://localhost:9000/fetchScheduleData",
      {
        headers: { group: data.groupNumber },
      },
    );
    dispatch(setScheduleData(scheduleData));
    dispatch(setLoadingFalse());
  } catch (e) {
    dispatch(userLoginFailure(e));
    dispatch(setLoadingFalse());
  }
};

export const updateUserInfo = ({ phoneNumber, email }) => async (
  dispatch,
  getState,
) => {
  dispatch(setLoadingTrue());

  try {
    const {
      login,
      university,
      email: currentEmail,
      phoneNumber: currentPhoneNumber,
    } = getState().user.data;

    const { data } = await axios.post(
      "http://localhost:9000/updateUserInfo",
      null,
      {
        params: {
          phoneNumber: phoneNumber || currentPhoneNumber,
          email: email || currentEmail,
          login,
          university,
        },
      },
    );

    dispatch(setUserData(data));
    dispatch(setLoadingFalse());
  } catch (e) {
    console.log(e);
  }
};

export const setUserData = (payload) => ({
  type: ACTIONS.LOGIN_USER_SUCCESSFUL,
  payload,
});
