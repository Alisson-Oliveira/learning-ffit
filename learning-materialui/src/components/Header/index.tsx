import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "@material-ui/core/Switch";

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIconsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideoCallIcon from '@material-ui/icons/VideoCall';

import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },

  iconLeft: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },

  logo: {
    height: 25
  },

  iconRight: {
    marginRight: theme.spacing(1)
  },

  grow: {
    flexGrow: 1
  }
}));

interface HeaderProps {
  darkMode: any,
  setDarkMode: any
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar color="inherit" className={classes.root}>
      <Toolbar>
        <IconButton 
          edge="start" 
          aria-label="menu"
          className={classes.iconLeft}
        >
          <MenuIcon />
        </IconButton>
        <img 
          src={
            theme.palette.type === "dark" 
              ? "/images/branco.png" 
              : "/images/preto.png" 
          } 
          alt="logo" 
          className={classes.logo}  
        />
        <div className={classes.grow}/>
        <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <IconButton className={classes.iconRight}>
          <VideoCallIcon />
        </IconButton>
        <IconButton className={classes.iconRight}>
          <AppsIconsIcon />
        </IconButton>
        <IconButton className={classes.iconRight}>
          <MoreVertIcon />
        </IconButton>
        <Button 
          variant="outlined" 
          color="secondary"
          startIcon={<AccountCircleIcon />}
        >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}