import { withStyles, CircularProgress } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { Component } from 'react';
import style from './style';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Iphone 7',
          des: 'Đây là iphone 7',
          price: 300000,
          status: 0,
        },
        {
          id: 2,
          name: 'Iphone 8',
          des: 'Đây là iphone 8',
          price: 400000,
          status: 0,
        },
        {
          id: 3,
          name: 'Iphone 9',
          des: 'Đây là iphone 9',
          price: 500000,
          status: 0,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Tên sản phẩm', width: 200 },
      { field: 'des', headerName: 'Mô tả', width: 400 },
      { field: 'price', headerName: 'Giá', width: 200 },
      {
        field: 'status',
        headerName: 'Trạng thái',
        width: 200,
      },
    ];
    return (
      <div>
        Thống kê ngày :
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={products}
            columns={columns}
            checkboxSelection
            pageSize={5}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Admin);
