import MainContent from "../../components/main-content";
import { connect } from "react-redux";

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  data: state.main.data.schedule,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
