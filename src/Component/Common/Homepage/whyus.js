import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Connect from './connect.svg';
import Explore from './explore.svg';
import Thrive from './thrive.svg';

class Whyus extends React.Component {
  render() {
    return (
        <Box className="why-section">
            
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item sm xs={12}>
                        <Paper className="why-block" elevation={0}>
                            <img src={Connect} />
                            <Typography variant="h5" gutterBottom align="left" color="textPrimary">Connect</Typography>
                            <Typography variant="body1" gutterBottom align="left" color="textSecondary">Message classmates, share experiences, make new friends</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm xs={12}>
                        <Paper className="why-block" elevation={0}>
                            <img src={Explore} />
                            <Typography variant="h5" gutterBottom align="left" color="textPrimary">Explore</Typography>
                            <Typography variant="body1" gutterBottom align="left" color="textSecondary">Check out campus events, jobs, housing, and study abroad locations</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm xs={12}>
                        <Paper className="why-block" elevation={0}>
                            <img src={Thrive} />
                            <Typography variant="h5" gutterBottom align="left" color="textPrimary">Thrive</Typography>
                            <Typography variant="body1" gutterBottom align="left" color="textSecondary">Access course notes, scholarships, tutors, and more</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Container>
        </Box>
    )
  }
}
export default Whyus;