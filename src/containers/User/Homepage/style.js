const style = () => ({
  root: {
    backgroundColor: '#000',
    padding: '0 0 100px',
    zIndex: '0',
  },
  homecontent: {
    background: 'rgb(0 0 0 / 76%)',
    zIndex: 1,
    padding: 20,
  },
  formControl: {
    width: '100%',
  },
  BookContent: {
    padding: '20px',
    backgroundColor: '#333',
    marginTop: '-35px',
    zIndex: 2,
    borderRadius: '10px',
    marginBottom: '50px',
    boxShadow: '0 10px 10px -10px #333',
    border: '1px solid #eee',
  },
  select: {
    color: '#eee',
  },
  buttonGroup: {
    '& > button': {
      color: '#C7C7C7',
      borderColor: '#C7C7C7',
      transition: '.2s ease-in-out',
    },
    '& > button:hover': {
      backgroundColor: '#C7C7C7',
      color: '#333',
    },
  },
  // Grid: {
  //   display: 'grid',
  //   gridTemplateColumns: '75px 75px 75px 75px 75px 75px 75px 75px 75px 75px ',
  //   gridTemplateRows: '75px 75px 75px 75px 75px',
  //   justifyContent: 'center',
  // },
});
export default style;
