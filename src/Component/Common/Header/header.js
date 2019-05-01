import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import styles from './header.css';
import { unstable_Box as Box } from '@material-ui/core/Box';
import RecipeReviewCard from './test';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header} >
        <Box display="flex" p={1} bgcolor="background.paper">
          <Box p={1} flexGrow={1} bgcolor="grey.300">
            Item 1
          </Box>
          <Box p={1}  >
            Item 2
          </Box>
          <Box p={1} bgcolor="grey.300">
            Item 3
          </Box>
          <Box p={1} bgcolor="grey.300">
            Item 3
          </Box>
        </Box>
        <RecipeReviewCard />
    </header>
    )
  }
}

export default Header;