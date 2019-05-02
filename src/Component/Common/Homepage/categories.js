import React from 'react';
import './home.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CategoriesIcon from './categories-icon.svg';


class Categories extends React.Component {
  render() {
    return (
        <Box className="why-section">
            
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom align="center" className="categories-title">Categories</Typography>
                <Grid container spacing={3}>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={2} xs={6}>
                        <Paper p={2} elevation={1} className="category-card">
                            <img src={CategoriesIcon} />
                            <Typography variant="body1" gutterBottom align="center" color="textSecondary">Food</Typography>
                        </Paper>
                    </Grid>
                    
                </Grid>
                
            </Container>
        </Box>
    )
  }
}
export default Categories;