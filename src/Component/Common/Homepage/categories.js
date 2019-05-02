import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class Categories extends React.Component {
  render() {
    return (
        <Box className="why-section">
            
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom align="center">Categories</Typography>
                <Grid container spacing={3}>
                    <Grid item sm={3} xs={12}>
                        <Paper p={2} elevation={3} className="category-card">
                            Hello
                        </Paper>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    1
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    1
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    1
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    1
                    </Grid>
                </Grid>
                
            </Container>
        </Box>
    )
  }
}
export default Categories;