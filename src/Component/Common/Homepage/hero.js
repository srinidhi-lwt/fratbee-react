import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getCollegeThunk } from '../../../redux/action';

class Hero extends React.Component {
  
    getColleges = (e) => {
      console.log(e.target.value)
      this.props.dispatch(getCollegeThunk(e.target.value))
    }
  
  render() {
    return (
        <Box bgcolor="grey.100" className="hero-area">
            <Container maxWidth="lg">
                <Box>
                    <Typography variant="h4" gutterBottom align="center">We are a college fraternity.</Typography>
                    <Typography variant="body1" gutterBottom align="center" color="textSecondary">A student marketplace for your college</Typography>
                    <Box display="flex" justifyContent="center" className="search-wrap" >
                        <Box className="text-area-wrap">
                            <TextField
                                id="outlined-bare"
                                className="search-box"
                                placeholder="Search your College"
                                margin="none"
                                variant="outlined"
                                fullWidth= {true}
                                onChange = { this.getColleges }
                            />
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" className="search-button">Search</Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
  }
}
export default connect()(Hero);