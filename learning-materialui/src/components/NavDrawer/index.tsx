import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import Hidden from '@material-ui/core/Hidden';

import { makeStyles, Theme } from '@material-ui/core/styles';

import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },

  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },

  drawerContainer: {
    overflow: 'auto',
  },

  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },

  listItemText: {
    fontSize: 14
  },

  textSubHeader: {
    textTransform: 'uppercase'
  }
}));

export default function NavDrawer() {
  const classes = useStyles();

  return (
    <Hidden mdDown>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem 
              button
              classes={{
                root: classes.listItem
              }}
            >
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText 
                primary="Inicio"
                classes={{
                  primary: classes.listItemText
                }}
              />
            </ListItem>
            <ListItem 
              button
              classes={{
                root: classes.listItem
              }}
            >
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText 
                primary="Em Alta"
                classes={{
                  primary: classes.listItemText
                }}
              />
            </ListItem>
            <ListItem 
              button
              classes={{
                root: classes.listItem
              }}
            >
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText 
                primary="Inscrições"
                classes={{
                  primary: classes.listItemText
                }}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem 
              button
              classes={{
                root: classes.listItem
              }}
            >
              <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
              <ListItemText 
                primary="Biblioteca"
                classes={{
                  primary: classes.listItemText
                }}
              />
            </ListItem>
            <ListItem 
              button
              classes={{
                root: classes.listItem
              }}
            >
              <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
              <ListItemText 
                primary="Histórico"
                classes={{
                  primary: classes.listItemText
                }}
              />
            </ListItem>
            <Divider />
            <Box 
              padding={4}
            >
              <Typography variant='body2'>
                Faça login para curtir vídeos, comentar e se inscrever.
              </Typography>
              <Box marginTop={2}>
                <Button
                  variant='outlined'
                  color='secondary'
                  startIcon={<AccountCircleIcon />}
                >
                  Fazer Login
                </Button>
              </Box>
            </Box>
            <Divider />
            <List
              component='nav'
              aria-labelledby='nested-list-subheader'
              subheader={
                <ListSubheader
                  component='div'
                  id='nested-list-subheader'
                  className={classes.textSubHeader}
                >
                  O melhor do Youtube
                </ListSubheader>
              }
            >
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Musícas" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Esportes" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Jogos" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Filmes" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Notícias" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Ao Vivo" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Destaques" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Vídeos 360" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem 
                button
                classes={{
                  root: classes.listItem
                }} 
              >
                <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                <ListItemText 
                  primary="Procurar mais" 
                  classes={{
                    primary: classes.listItemText
                  }}
                />
              </ListItem>
              <Divider />
            </List>
          </List>
        </div>
      </Drawer>
    </Hidden>
  )
}