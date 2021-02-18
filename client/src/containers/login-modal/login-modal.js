import LoginModal from "../../components/login-modal";
import { connect } from "react-redux";
import { clearErrorsAction, createErrorAction } from "../../store/main";
import { loginUserAction } from "../../store/user";

const mapStateToProps = (state) => ({
  user: state.main.user,
  error: state.main.error,
});

const mapDispatchToProps = {
  clearErrorsAction,
  createErrorAction,
  loginUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
