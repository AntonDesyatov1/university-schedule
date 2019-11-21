import App from "../../App";
import { connect } from "react-redux";
import {
  loginUserAction,
  clearErrorsAction,
  logoutAction,
  fetchUserDataAction,
  signupUserAction
} from "../../store/main";

const mapStateToProps = state => ({
  isLoading: state.main.isLoading,
  user: state.main.user,
  error: state.main.error
});

const mapDispatchToProps = {
  loginUserAction,
  clearErrorsAction,
  logoutAction,
  fetchUserDataAction,
  signupUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
