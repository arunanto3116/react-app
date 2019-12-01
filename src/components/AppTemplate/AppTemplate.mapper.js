import {connect} from 'react-redux';
import AppTemplate from './AppTemplate';
import {loginAction, setLogin} from "../../redux/actions/action.login";
import { withRouter } from "react-router-dom";
const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: () => {
            dispatch(loginAction());
        },
        setLoginStatus: (status) => {
            dispatch(setLogin(status));
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppTemplate));