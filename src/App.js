import React from 'react';
import './App.css';
import Listing from './Component/Listings/listings';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Component/Common/Header/header';
import Footer from './Component/Common/Foter/foter';
import { connect } from 'react-redux'

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


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <Route path = "/" exact render = { () => <MuiThemeProvider theme = {theme} >
          < Listing />
          <div>
            { this.props.colleges && this.props.colleges.map((ele, index) => {
              return  <div key = {index}>{ ele.name }</div>
            }) }
          </div>
        </MuiThemeProvider> }/>
      <Route path = "/show" exact render = { () => <React.Fragment>
        <Header/>
        <Footer/>
      </React.Fragment> }/>
      </BrowserRouter>
    );
  }
}


const mapStoreToProps = (store) => {
  return {
    colleges: store.SearchCollegeReducer.data,
    
  }
}

export default connect(mapStoreToProps)(App);
