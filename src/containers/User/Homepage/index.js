import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  MenuItem,
  Typography,
  withStyles,
} from '@material-ui/core';
import LastPageIcon from '@material-ui/icons/LastPage';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderDateSelectField from './../../../components/FormHelper/DateSelect';
import renderSelectField from './../../../components/FormHelper/Select';
import renderTimeSelectField from './../../../components/FormHelper/TimeSelect';
import Carousel from './../../../components/UserLayout/Homepage/Content/Carousel/';
import Event from './../../../components/UserLayout/Homepage/Content/HomePageComponent/Event';
import MovieSelection from './../../../components/UserLayout/Homepage/Content/HomePageComponent/MovieSelection';
// Action
import * as ListMoviesActionCreator from './../../../actions/movies';
import DrawGrid from './DrawGrid';
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
const movieshowing = [
  {
    label: 'Phim Sắp Chiếu',
    list: [
      {
        id: 1,
        title: 'Vệ Sĩ Sát Thủ 1',
        subtitle: 'Nhà Có Nóc',
        description: 'Một bộ phim của PATRICK HUGHES',
        image:
          'https://media.lottecinemavn.com/Media/WebAdmin/9aa9607cd0844a1a863d14c61d8f2ef1.jpg',
      },
      {
        id: 2,
        title: 'Fast & Furious 9 1',
        subtitle: 'Huyền Thoại Tốc Độ - 9',
        description: 'Dự kiến khởi chiếu 28.05',
        image:
          'https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg',
      },
      {
        id: 3,
        title: 'Trùm cuối siêu đẳng 1',
        subtitle: 'Khởi chiếu 23.04.2021',
        description: 'Từ đạo diễn của Bản Năng Sinh Tồn',
        image:
          'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/trum-cuoi-sieu-dang-980wx448h.jpg',
      },
      {
        id: 4,
        title: 'Godzilla đại chiến Kong 1',
        subtitle: 'Quyết Phân thắng Bại',
        description: 'Khởi chiếu tại rạp 26.03.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10708_105_100003.jpg',
      },
      {
        id: 5,
        title: 'Bàn tay diệt quỷ 1',
        subtitle: 'Một bộ phim từ Hàn Quốc',
        description: 'Khởi chiếu: 09.04.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_105_100002.jpg',
      },
    ],
  },
  {
    label: 'Phim Đang Chiếu',
    list: [
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
        title: 'Fast & Furious 9 2',
        subtitle: 'Huyền Thoại Tốc Độ - 9',
        description: 'Dự kiến khởi chiếu 28.05',
        image:
          'https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg',
      },
      {
        id: 3,
        title: 'Trùm cuối siêu đẳng 2',
        subtitle: 'Khởi chiếu 23.04.2021',
        description: 'Từ đạo diễn của Bản Năng Sinh Tồn',
        image:
          'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/trum-cuoi-sieu-dang-980wx448h.jpg',
      },
      {
        id: 4,
        title: 'Godzilla đại chiến Kong 2',
        subtitle: 'Quyết Phân thắng Bại',
        description: 'Khởi chiếu tại rạp 26.03.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10708_105_100003.jpg',
      },
      {
        id: 5,
        title: 'Bàn tay diệt quỷ 2',
        subtitle: 'Một bộ phim từ Hàn Quốc',
        description: 'Khởi chiếu: 09.04.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_105_100002.jpg',
      },
    ],
  },
  {
    label: 'Phim Hay',
    list: [
      {
        id: 1,
        title: 'Vệ Sĩ Sát Thủ 3',
        subtitle: 'Nhà Có Nóc',
        description: 'Một bộ phim của PATRICK HUGHES',
        image:
          'https://media.lottecinemavn.com/Media/WebAdmin/9aa9607cd0844a1a863d14c61d8f2ef1.jpg',
      },
      {
        id: 2,
        title: 'Fast & Furious 9 3',
        subtitle: 'Huyền Thoại Tốc Độ - 9',
        description: 'Dự kiến khởi chiếu 28.05',
        image:
          'https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg',
      },
      {
        id: 3,
        title: 'Trùm cuối siêu đẳng 3',
        subtitle: 'Khởi chiếu 23.04.2021',
        description: 'Từ đạo diễn của Bản Năng Sinh Tồn',
        image:
          'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/trum-cuoi-sieu-dang-980wx448h.jpg',
      },
      {
        id: 4,
        title: 'Godzilla đại chiến Kong 3',
        subtitle: 'Quyết Phân thắng Bại',
        description: 'Khởi chiếu tại rạp 26.03.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10708_105_100003.jpg',
      },
      {
        id: 5,
        title: 'Bàn tay diệt quỷ 3',
        subtitle: 'Một bộ phim từ Hàn Quốc',
        description: 'Khởi chiếu: 09.04.2021',
        image:
          'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_105_100002.jpg',
      },
    ],
  },
];
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: [],
      seatNumber: 50,
      movieSelect: '',
      seat: [1, 2, 3, 4, 5, 6],
      seatAvailable: [1, 2, 3, 4, 5, 6],
      seatReserved: [],
    };
  }
  handleChangeCheckBox = (e) => {
    console.log(e);
  };
  handleCheckBox = (e) => {
    console.log(e);
  };
  onSubmitForm = (data) => {
    console.log('Submitted');
  };
  movieSelectChange = (event) => {
    const { movieSelect } = this.state;
    this.setState({ movieSelect: event.target.value });
    console.log(movieSelect);
  };
  onClickData = (seat) => {
    console.log('click', seat);
    const { seatAvailable, seatReserved } = this.state;
    if (seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: seatAvailable.concat(seat),
        seatReserved: seatReserved.filter((res) => res !== seat),
      });
    } else {
      this.setState({
        seatReserved: seatReserved.concat(seat),
        seatAvailable: seatAvailable.filter((res) => res !== seat),
      });
    }
    console.log(seatAvailable, seatReserved);
  };

  handleButtonGroup = (label) => {
    const index = this.findLabel(label);
    if (index !== -1) {
      this.handleMovieSelection(movieshowing[index].list);
    }
  };
  // handle movie slection container
  handleMovieSelection = (list) => {
    if (!list) {
      console.log(list);
      return <MovieSelection list={movieshowing[0].list} />;
    }
    console.log(list);
    return <MovieSelection list={list} />;
  };
  // find index
  findLabel = (label) => {
    let index = -1;
    for (let i = 0; i < movieshowing.length; i += 1) {
      if (movieshowing[i].label === label) {
        index = i;
        return index;
      }
    }
    return index;
  };
  renderCheckBox() {
    const { seatNumber, seats } = this.state;
    for (let i = 1; i <= seatNumber; i += 1) {
      seats[i] = i;
    }
  }
  render() {
    const { classes, invalid, submitting, handleSubmit } = this.props;
    const {
      seatNumber,
      seats,
      movieSelect,
      seat,
      seatAvailable,
      seatReserved,
    } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.root}>
          <Carousel />
        </div>
        <div className={classes.homecontent}>
          <div className={classes.BookContent}>
            <form onSubmit={handleSubmit(this.onSubmitForm)}>
              <Grid container>
                <Grid item md={4}>
                  <Field
                    id="name_movie"
                    label="Chọn Phim"
                    className={`standard-helperText, ${
                      (classes.select, classes.TextField)
                    }`}
                    component={renderSelectField}
                    name="name_movie"
                    value={movieSelect}
                    onChange={this.movieSelectChange}
                    style={{ borderColor: '#eee', color: '#eee' }}
                  >
                    <MenuItem
                      className={(classes.select, classes.TextField)}
                      value=""
                      disabled
                    >
                      <em>Phim sắp chiếu</em>
                    </MenuItem>
                    {Slide.map((movie) => (
                      <MenuItem
                        key={movie.id}
                        className={(classes.select, classes.TextField)}
                        value={movie.title}
                      >
                        {movie.title}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid item md={4}>
                  <Field
                    label="Chọn Ngày"
                    className={`standard-helperText, ${classes.textField}`}
                    component={renderDateSelectField}
                    name="date_booking"
                    id="date"
                    type="date"
                    // value="2017-05-24"
                    inputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Field
                    label="Chọn Thời Gian"
                    className={`'standard-helperText', ${
                      (classes.select, classes.TextField)
                    }`}
                    component={renderTimeSelectField}
                    name="time_booking"
                    id="time"
                    type="time"
                    value="7:00"
                    inputlabelprops={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ height: '100%', width: '100%' }}
                    disabled={movieSelect.length === 0 || movieSelect === ''}
                    type="submit"
                  >
                    Book
                    <LastPageIcon />
                  </Button>
                </Grid>
                {movieSelect !== '' ? (
                  <Grid item md={12}>
                    {this.renderCheckBox()}
                    <Typography>Seat Picker Item</Typography>
                    <Grid container spacing={2}>
                      <DrawGrid
                        seat={seats}
                        available={seatAvailable}
                        reserved={seatReserved}
                        onClickData={this.onClickData}
                        className={classes.RadioGrid}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  ''
                )}
              </Grid>
            </form>
          </div>
          <div className={classes.MovieSelection}>
            <Box
              container
              style={{ display: 'flex', justifyContent: 'space-around' }}
              mb={4}
            >
              <ButtonGroup
                aria-label="outlined primary button group"
                className={classes.buttonGroup}
              >
                {/* <Button className={classes.button}>Phim đang chiếu</Button>
                <Button className={classes.button}>Phim sắp chiếu</Button>
                <Button className={classes.button} value="phimhot">
                  Phim hay
                </Button> */}
                {movieshowing.map((movies) => {
                  return (
                    <Button
                      className={classes.button}
                      onClick={(e) => this.handleButtonGroup(movies.label)}
                    >
                      {movies.label}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </Box>
            <Grid container>
              {this.handleMovieSelection()}
              {/* <MovieSelection /> */}
            </Grid>
          </div>
          <div className={classes.Event}>
            <Typography>Event</Typography>
            <Grid container spacing={2}>
              <Event />
            </Grid>
          </div>
          <div className={classes.Event}>
            <Typography>Lastest New</Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                News 1
              </Grid>
              <Grid item md={4}>
                News 2
              </Grid>
              <Grid item md={4}>
                News 3
              </Grid>
            </Grid>
          </div>
          <div className={classes.Event}>
            <Typography>Brand</Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                Brand
              </Grid>
              <Grid item md={4}>
                Brand
              </Grid>
              <Grid item md={4}>
                Brand
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const FORM_NAME = 'BOOK_MOVIES';
const withReduxForm = reduxForm({
  form: FORM_NAME,
});
const mapStateToProps = null;
const mapDispatchToProps = (dispatch, action) => {
  return {
    ListMoviesAction: bindActionCreators(dispatch, ListMoviesActionCreator),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(style),
  withConnect,
  withRouter,
  withReduxForm,
)(Homepage);
