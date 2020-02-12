import Configuration from "../../components/configuration";
import { connect } from "react-redux";
import {
  setConfigurationAction,
  resetConfiguartionAction
} from "../../store/configuration";
import { fetchScheduleDataAction } from "../../store/schedule";

const mapStateToProps = state => ({
  university: state.configuration.university,
  course: state.configuration.course,
  faculty: state.configuration.faculty,
  group: state.configuration.group,
  day: state.configuration.day
});

const mapDispatchToProps = {
  setConfigurationAction,
  fetchScheduleDataAction,
  resetConfiguartionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
