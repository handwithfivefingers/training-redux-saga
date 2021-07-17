import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import stylecss from './Scss/style.scss';
import style from './style';
const Slide = [
  {
    title: 'Vệ Sĩ Sát Thủ 2',
    subtitle: 'Nhà Có Nóc',
    description: 'Một bộ phim của PATRICK HUGHES',
    image:
      'https://media.lottecinemavn.com/Media/WebAdmin/9aa9607cd0844a1a863d14c61d8f2ef1.jpg',
  },
  {
    title: 'Fast & Furious 9',
    subtitle: 'Huyền Thoại Tốc Độ - 9',
    description: 'Dự kiến khởi chiếu 28.05',
    image:
      'https://media.lottecinemavn.com/Media/WebAdmin/9b5494601af14d32ba26d310819b8c8a.jpg',
  },
  {
    title: 'Trùm cuối siêu đẳng',
    subtitle: 'Khởi chiếu 23.04.2021',
    description: 'Từ đạo diễn của Bản Năng Sinh Tồn',
    image:
      'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/trum-cuoi-sieu-dang-980wx448h.jpg',
  },
  {
    title: 'Godzilla đại chiến Kong',
    subtitle: 'Quyết Phân thắng Bại',
    description: 'Khởi chiếu tại rạp 26.03.2021',
    image:
      'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10708_105_100003.jpg',
  },
  {
    title: 'Bàn tay diệt quỷ',
    subtitle: 'Một bộ phim từ Hàn Quốc',
    description: 'Khởi chiếu: 09.04.2021',
    image:
      'https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_105_100002.jpg',
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

function Slider({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  Next = () => {
    const { slideIndex } = this.state;
    this.setState({
      slideIndex: (slideIndex + 1) % Slide.length,
    });
  };

  Prev = () => {
    console.log('Previous');
    const { slideIndex } = this.state;
    this.setState({
      slideIndex: slideIndex === 0 ? Slide.length - 1 : slideIndex - 1,
    });
  };

  render() {
    const { slideIndex, getheight } = this.state;
    const { classes } = this.props;
    return (
      <div
        className={`slides ${classes.root}`}
        style={{ height: getheight !== 0 ? getheight : null }}
      >
        <button type="button" onClick={() => this.Prev()}>
          ‹
        </button>
        {[...Slide, ...Slide, ...Slide].map((slide, i) => {
          let offset = Slide.length + (slideIndex - i);
          return <Slider slide={slide} offset={offset} key={offset} />;
        })}
        <button type="button" onClick={() => this.Next()}>
          ›
        </button>
      </div>
    );
  }
}

export default withStyles(style)(Carousel);
