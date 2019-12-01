import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer/AppContainer';
import "./style/app.scss";
import regeneratorRuntime from "regenerator-runtime";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
        palette: {
            primary: { main: '#005073' },
            secondary: { main: '#ff7300', contrastText: '#ffffff' },
        },
        typography: {
            fontFamily: [
                'Roboto'
            ].join(','),
        },
    });

render(
    <ThemeProvider theme={theme}>
        <AppContainer />
    </ThemeProvider>
    , document.getElementById('root')
);
