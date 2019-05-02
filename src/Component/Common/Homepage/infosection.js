import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BackgroundImage from "./bg1.jpg";

class Infosection extends React.Component {
  render() {
    return (
        <Box className="why-section">
            
            <Container maxWidth="lg">
                
                <Grid container spacing={3} alignItems="center">
                    <Grid item sm={4} xs={12}>
                        <Paper p={0} elevation={4}>
                           <img src={BackgroundImage}className="image-bg" />
                        </Paper>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Paper p={2} elevation={0} className="category-card">
                            <Typography variant="h4" gutterBottom align="left">How this works</Typography>
                            <Typography variant="body1" gutterBottom align="left" color="textSecondary">Find what you need to live the college life to the fullest - job opportunities near campus, study abroad programs around the world, off-campus housing and sublet options, course notes from classmates, tutors in the area, and tons more right around your campus.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                
            </Container>
        </Box>
    )
  }
}
export default Infosection;