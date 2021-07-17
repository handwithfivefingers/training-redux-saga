import {
  Drawer,
  Grid,
  IconButton,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import UserContent from './Content';
import UserFooter from './Footer';
import style from './style';
class UserHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      listCategory: [
        { name: 'Mua vé', path: '/ticket' },
        { name: 'Phim Đang Chiếu', path: '/phim-dang-chieu' },
        { name: 'Phim Sắp Chiếu', path: '/phim-sap-chieu' },
        { name: 'Sự kiện', path: '/event' },
        { name: 'Rạp/Giá vé', path: '/rap-gia-ve' },
        { name: 'Hỗ Trợ', path: '/support' },
      ],
      listUser: [{ name: 'Thành Viên', path: 'profile' }],
    };
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  render() {
    const { children, classes, name } = this.props;
    const { open, listCategory, listUser } = this.state;
    return (
      <Grid container>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleClose}>
              {classes.direction === 'ltr' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Typography>
              {listCategory.map((text, index) => (
                <ListItem button key={text}>
                  {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                  <Link
                    href={text.path}
                    className={classes.link}
                    color="inherit"
                  >
                    <ListItemText primary={text.name} />
                  </Link>
                </ListItem>
              ))}
            </Typography>
          </List>
          <Divider />
          <List>
            {listUser.map((text, index) => (
              <ListItem button key={text.name}>
                <Link href={text.path} className={classes.link} color="inherit">
                  <ListItemText primary={text.name} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <UserContent className={classes.Contentroot}>{children}</UserContent>
          <UserFooter />
        </main>
      </Grid>
    );
  }
}
UserHomepage.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
};
export default withStyles(style)(UserHomepage);
