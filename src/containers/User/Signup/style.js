const style = (theme) => ({
  TextField: {
    width: '100%',
  },
  content: {
    padding: theme.spacing(2),
  },
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    position: 'absolute',
    backgroundColor: theme.color.white,
    boxShadow: theme.shadows[5],
    outline: 'none',
    borderRadius: 5,
  },
  title: {
    color: theme.color.textcolor,
    fontSize: 24,
    fontWeight: 700,
    fontFamily: theme.typoragphy.textFamily,
  },
  icon: {
    cursor: 'pointer',
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textcolor,
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    display: 'flex',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  button: {
    margintop: 'auto',
  },
  iconbutton: {
    width: 36,
    height: 36,
    borderRadius: 0,
  },
});
export default style;
