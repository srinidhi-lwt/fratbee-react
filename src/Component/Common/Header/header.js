import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './header.css';
import  Box from '@material-ui/core/Box';
import Logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';

class Header extends React.Component {
  render() {
    return (
        <AppBar color="default" className="appHeader" >
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1} display="flex" alignItems="flex-end">
              <img src={Logo} className="logo" / >
              <span className="college-name">
                College name
                <Edit fontSize="small"/>
              </span>
            </Box>
            <Box p={1} >
              <Button className="link about" size="medium">About</Button>
            </Box>
            <Box p={1}>
              <Button className="link" size="medium"> Login </Button>
            </Box>
            <Box p={1}>
             <Button variant="contained" color="secondary" className="link" size="medium">Signup</Button>
            </Box>
          </Box>
        </AppBar>
    )
  }
}

export default Header;