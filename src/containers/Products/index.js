import {
  Breadcrumbs,
  Grid,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Product from '../../components/Products/Product';
import style from './style';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Iphone 7',
          price: 300000,
          des: 'Đây là iphone 7',
        },
        {
          id: 2,
          name: 'Iphone 8',
          price: 400000,
          des: 'Đây là iphone 8',
        },
        {
          id: 3,
          name: 'Iphone 9',
          price: 500000,
          des: 'Đây là iphone 9',
        },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    const { products } = this.state;
    return (
      <Grid container className={classes.grid} spacing={2}>
        {products.map((item) => {
          return <Product item={item} />;
        })}
      </Grid>
    );
  }
}

export default withStyles(style)(Products);
