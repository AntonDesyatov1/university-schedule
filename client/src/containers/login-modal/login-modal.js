import LoginModal from "../../components/login-modal";
import { connect } from "react-redux";
import { clearErrorsAction, createErrorAction } from "../../store/main";
import { loginUser } from "../../store/user";

const mapStateToProps = (state) => ({
  user: state.main.user,
  error: state.user.error,
});

const mapDispatchToProps = {
  clearErrorsAction,
  createErrorAction,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
