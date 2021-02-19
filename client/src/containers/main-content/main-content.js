import MainContent from "../../components/main-content";
import { connect } from "react-redux";

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  data: state.main.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
