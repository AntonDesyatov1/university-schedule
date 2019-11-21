import Profile from "../../components/Profile";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    user: state.main.user,
    error: state.main.error
});

export default connect(mapStateToProps)(Profile);
