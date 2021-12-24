import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import Recommended from './components/Recommended';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

interface HomeProps {
  darkMode: any,
  setDarkMode: any
}

function Home({ darkMode, setDarkMode }: HomeProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box display='flex'>
        <NavDrawer />
        <Recommended />
      </Box>
    </div>
  )
}

export default Home;