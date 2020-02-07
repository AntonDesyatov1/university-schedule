import App from "../../App";
import { connect } from "react-redux";
import {
  loginUserAction,
  clearErrorsAction,
  logoutAction,
  fetchUserDataAction,
  signupUserAction,
  setUniversityAction
} from "../../store/main";
import {
  fetchScheduleDataAction,
  fetchUniversitiesAction
} from "../../store/schedule";

const mapStateToProps = state => ({
  isLoading: state.main.isLoading,
  user: state.main.user,
  error: state.main.error,
  configuration: state.configuration,
  universities: state.schedule.universities,
  data: state.schedule.data
});

const mapDispatchToProps = {
  loginUserAction,
  clearErrorsAction,
  logoutAction,
  fetchUserDataAction,
  signupUserAction,
  fetchScheduleDataAction,
  fetchUniversitiesAction,
  setUniversityAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
