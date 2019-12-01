import {connect} from 'react-redux';
import AppHeader from './AppHeader';
import {logoutAction} from "../../redux/actions/action.login";
import { withRouter } from "react-router-dom";
const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logoutAction());
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader));