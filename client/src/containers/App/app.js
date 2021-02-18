import App from "../../App";
import { connect } from "react-redux";
import { setUniversityAction } from "../../store/main";
import {
  fetchScheduleDataAction,
  fetchUniversitiesAction,
} from "../../store/schedule";

const mapStateToProps = (state) => ({
  isLoading: state.main.isLoading,
  user: state.user.name,
  loggedIn: state.user.loggedIn,
  error: state.main.error,
  configuration: state.configuration,
  universities: state.schedule.universities,
  data: state.schedule.data,
  teachers: state.schedule.teachers,
  university: state.main.university,
});

const mapDispatchToProps = {
  fetchScheduleDataAction,
  fetchUniversitiesAction,
  setUniversityAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
