import React from 'react';
import './foter.css';
import Box from '@material-ui/core/Box';

class Footer extends React.Component {
  render() {
    return (
        <Box bgcolor="grey.900" className="footer">
            <a href="#">About</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
        </Box>
    )
  }
}
export default Footer;