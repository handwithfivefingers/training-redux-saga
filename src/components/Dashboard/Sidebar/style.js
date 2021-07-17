const style = (theme) => ({
  drawerPaper: {
    width: '100%',
    zIndex: 99,
    height: '100%',
    position: 'relative',
    border: 'none',
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.color.primary,
      color: theme.color.white,
    },
  },
  menuLink: {
    textDecoration: 'none',
    color: '#333',
    width: '100%',
  },
  docked: {
    width: '100%',
  },
});
export default style;
