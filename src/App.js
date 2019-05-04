import React from 'react';
import './App.css';
import Listing from './Component/Listings/listings';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      dark: '#3f51b5',
      main: '#231bb3',
      light: '#d4c6f2',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#d60050',
      main: '#ff356e',
      light: '#ffbbcc',
      contrastText: '#fff',
    },
    
  },
});


function App() {
  return (
    <MuiThemeProvider theme = {theme} >
      < Listing />
    </MuiThemeProvider>
  );
}

export default App;
