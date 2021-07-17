import React, { Component } from 'react';
import Admin from './../containers/Admin';
import Taskboard from './../containers/Taskboard';
import Signup from '../containers/User/Signup';
import Login from '../containers/User/Login';
import Products from '../containers/Products';
import Homepage from '../containers/User/Homepage';
import Carousel from '../components/UserLayout/Homepage/Content/Carousel';
export const API_ENDPOINT = 'http://localhost:3000/api';
export const API_ENDPOINT_AUTH = 'http://localhost:2000/api';
export const STATUSUS = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROCESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: '/',
    name: 'Đăng nhập',
    exact: true,
    component: Login,
  },
  {
    path: '/dash-board',
    name: 'Trang quản trị',
    exact: true,
    component: Admin,
  },
  {
    path: '/dash-board/task-board',
    name: 'Quản lý công việc',
    component: Taskboard,
  },
  {
    path: '/dash-board/products',
    name: 'Sản phẩm',
    component: Products,
  },
];
export const USER_ROUTES = [
  {
    path: '/',
    exact: true,
    name: 'Trang chủ',
    component: Homepage,
  },
  {
    path: '/login',
    name: 'Đăng nhập',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Đăng kí tài khoản',
    component: Signup,
  },
  {
    path: '/1',
    name: 'Content 2',
    component: Carousel,
  },
  {
    path: '/2',
    name: 'Content 3',
    component: Carousel,
  },
];
