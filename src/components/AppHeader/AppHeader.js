import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./AppHeader.scss";
import { withRouter } from "react-router-dom";

const AppHeader =  props => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const logout = () => {
        props.logout();
        handleClose();
    }
    return (
      <div className="header">
          <AppBar position="static" className="appbar-custom appbar-custom-title">
                <Toolbar className="toolbar-custom-text">
                    <Typography
                        variant="h6"
                        className="title custom-title"
                        style={ {'flexGrow' :'1'} }
                    >
                          {props.headerTitle}
                    </Typography>
                    <>
                        <IconButton
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </>
                </Toolbar>
          </AppBar>
      </div>
    );
};


export default withRouter(AppHeader);