import MainContent from "../../components/main-content";
import { connect } from "react-redux";
import { fetchScheduleDataAction } from "../../store/schedule";

const mapStateToProps = state => ({
  configuration: state.configuration,
  isConfigOpen: state.main.isConfigOpen
});

const mapDispatchToProps = {
  fetchScheduleDataAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
