import React, { Component } from 'react';
import { withStyles, Drawer } from '@material-ui/core';
import style from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ADMIN_ROUTES } from './../../../contants/index';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  toggleDrawer = (value) => {
    this.setState({
      open: value,
    });
  };
  renderList = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                <ListItem key={item.path} className={classes.listitem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        open={open}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}
Sidebar.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(style)(Sidebar);
