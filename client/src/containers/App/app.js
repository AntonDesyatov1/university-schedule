import App from "../../App";
import { connect } from "react-redux";
import { loginUser, setUniversity } from "../../store/user";
import { fetchUniversities, fetchGroupSchedule } from "../../store/main";

const mapStateToProps = (state) => ({
  isLoading: state.main.isLoading,
  loggedIn: state.user.data.loggedIn,
  user: state.user.data,
  error: state.main.error,
  universities: state.main.data.universities,
});

const mapDispatchToProps = {
  loginUser,
  fetchUniversities,
  fetchGroupSchedule,
  setUniversity,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
