import Header from "../../components/header";
import { connect } from "react-redux";
import { closeConfigAction, openConfigAction } from "../../store/main";

const mapStateToProps = state => ({
  isConfigOpen: state.main.isConfigOpen
});

const mapDispatchToProps = {
  openConfigAction,
  closeConfigAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
