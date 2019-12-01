import {connect} from 'react-redux';
import Login from './Login';
import {loginAction} from "../../redux/actions/action.login";

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (params) => {
            dispatch(loginAction(params));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);