import LoginModal from "../../components/LoginModal";
import { connect } from "react-redux";
import { clearErrorsAction, createErrorAction } from "../../store/main";

const mapStateToProps = state => ({
  user: state.main.user,
  error: state.main.error
});

const mapDispatchToProps = {
  clearErrorsAction,
  createErrorAction
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
