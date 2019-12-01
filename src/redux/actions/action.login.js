import { USERS_URL } from "../../config/endPoingts";
import { getUsers, login } from "../../services/service.login";
import ls from 'local-storage';
import history from '../../config/history';


function setUserData(data) {
    return {
      type: "SET_USER_DATA",
      data
    };
}

function userDataLoading(status) {
    return {
      type: "USER_DATA_LOADING",
      status
    };
}

function addUserData(user) {
    return {
      type: "ADD_USER_DATA",
      user
    };
}

export function showDialogAction(status) {
    return {
      type: "SHOW_DIALOG",
      status
    };
}

export function getUsersAction() {
    return (dispatch, getState) => {
        dispatch(userDataLoading(true));
        const state = getState();
        let users = state.loginReducer.users;
        if(users.length>0){
            dispatch(setUserData(users));
            dispatch(userDataLoading(false));
        }
        else if (ls.get("users") && ls.get("users").length >0) {
            dispatch(setUserData(ls.get("users")));
            dispatch(userDataLoading(false));
        }else{
            let url = USERS_URL;
            let params = {};
            return getUsers(url, params)
            .then(response => {
                let data = response.data.results;
                dispatch(setUserData(data));
                ls.set('users',data);
                dispatch(userDataLoading(false));
            }).catch(error => {
                dispatch(userDataLoading(false));
            });
        }
    };
}

export function addUserAction(user) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(userDataLoading(true));
        dispatch(addUserData({user}));
        let data = [];
        let users = state.loginReducer.users;
        if(users.length > 0)        {
            data = [{user}, ...users];
        }else{
            data = [{user}];
        }
        ls.set('users',data);
        dispatch(userDataLoading(false));
        dispatch(showDialogAction(false));
    };
}

export function setLogin(status) {
    return {
      type: "SET_LOGIN",
      status
    };
}

function setLoginError(status) {
    return {
      type: "SET_LOGIN_ERROR",
      status
    };
}

export function loginAction(params) {
    return (dispatch, getState) => {
        return login(params)
        .then(response => {
            if(response){
                dispatch(setLoginError(false));
                dispatch(setLogin(true));
                sessionStorage.setItem('isLoggedIn', true);
                history.push('');
            }else{
                dispatch(setLogin(false));
                dispatch(setLoginError(true));
                sessionStorage.setItem('isLoggedIn', false);
            }
        }).catch(error => {
            dispatch(setLogin(false));
            dispatch(setLoginError(true));
            sessionStorage.setItem('isLoggedIn', false);
        });
    };
}

export function logoutAction() {
    return (dispatch, getState) => {
        dispatch(setLogin(false));
        dispatch(setLoginError(false));
        sessionStorage.setItem('isLoggedIn', false);
        history.push('/login');
    };
}