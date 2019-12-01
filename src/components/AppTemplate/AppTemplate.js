import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader.mapper";
import history from '../../config/history';

class AppTemplate extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn'));
    this.props.setLoginStatus(isLoggedIn);
    if(!isLoggedIn && this.props.location.pathname != '/login'){
        history.push('/login')
    }
  }
  render() {
    return (
      <div className="flex-container">
          {(this.props.loginReducer.isLoggedIn) ?
            <AppHeader
              headerTitle={"Home"}
            />
            : null
          }
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(AppTemplate);
