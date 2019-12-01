import {connect} from 'react-redux';
import Home from './Home';
import {getUsersAction,addUserAction,showDialogAction} from "../../redux/actions/action.login";

const mapStateToProps = state => {
    return {
        loginReducer: state.loginReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsersAction());
        },
        addUser: (user) => {
            dispatch(addUserAction(user));
        },
        showDialog: (status) => {
            dispatch(showDialogAction(status));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);