import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import CardItem from './CardItem';
import style from './style';
const Slide = [
  {
    id: 1,
    title: 'Vệ Sĩ Sát Thủ 2',
    subtitle: 'Nhà Có Nóc',
    description: 'Một bộ phim của PATRICK HUGHES',
    image:
      'https://media.lottecinemavn.com/Media/WebAdmin/9aa9607cd0844a1a863d14c61d8f2ef1.jpg',
  },
  {
    id: 2,
    title: 'Fast & Furious 9',
    subtitle: 'Huyền Thoại Tốc Độ - 9',
    description: 'Dự kiến khởi chiếu 28.05',
    image:
      'https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg',
  },
  {
    id: 3,
    title: 'Trùm cuối siêu đẳng',
    subtitle: 'Khởi chiếu 23.04.2021',
    description: 'Từ đạo diễn của Bản Năng Sinh Tồn',
    image:
      'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/trum-cuoi-sieu-dang-980wx448h.jpg',
  },
  {
    id: 4,
    title: 'Godzilla đại chiến Kong',
    subtitle: 'Quyết Phân thắng Bại',
    description: 'Khởi chiếu tại rạp 26.03.2021',
    image:
      'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10708_105_100003.jpg',
  },
  {
    id: 5,
    title: 'Bàn tay diệt quỷ',
    subtitle: 'Một bộ phim từ Hàn Quốc',
    description: 'Khởi chiếu: 09.04.2021',
    image:
      'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_105_100002.jpg',
  },
];
class MovieSelection extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    if (!nextProps) {
      // console.log(nextProps, prevProps);
      this.setState({ list: nextProps });
    }
  }
  checkMoviesFromProps = () => {
    const { list } = this.props;
    this.setState({ list });
    console.log(list);
    newlist.map((movie) => {
      return <CardItem movie={movie} />;
    });
  };

  render() {
    const { classes, list } = this.state;
    return list.map((movie) => {
      return <CardItem movie={movie} key={movie.id} />;
    });
    // return <>{this.checkMoviesFromProps()}</>;
  }
}

export default withStyles(style)(MovieSelection);
