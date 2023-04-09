import React from 'react';

function withCarousel(WrappedComponent, items) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentSlideIndex: 0,
      };
    }

    handleClickNext = () => {
      this.setState(prevState => ({
        currentSlideIndex: (prevState.currentSlideIndex + 1) % items.length,
      }));
    };

    handleClickPrev = () => {
      this.setState(prevState => ({
        currentSlideIndex: (prevState.currentSlideIndex - 1 + items.length) % items.length,
      }));
    };

    render() {
      const { currentSlideIndex } = this.state;
      return (
        <div className="carousel">
          <WrappedComponent currentItem={items[currentSlideIndex]} />
          <div className="carousel-buttons">
            <button onClick={this.handleClickPrev}>Prev</button>
            <button onClick={this.handleClickNext}>Next</button>
          </div>
        </div>
      );
    }
  };
}

function ImageCarousel(props) {
  const { src, alt } = props.currentItem;
  return <img src={src} alt={alt} />;
}

function VideoCarousel(props) {
  const { src } = props.currentItem;
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}

const images = [
  {
    src: '/assets/carousel1.png',
    alt: '',
  },
  {
    src: '/assets/carousel2.png',
    alt: '',
  },
  {
    src: '/assets/carousel3.png',
    alt: '',
  },
];

const videos = [
  {
    src: 'https://www.youtube.com/embed/bJ1vEQKX-hE',
  },
  {
    src: 'https://www.youtube.com/embed/LyU8eGNOE04',
  },
];

const ImageCarouselWithCarousel = withCarousel(ImageCarousel, images);
const VideoCarouselWithCarousel = withCarousel(VideoCarousel, videos);

function App() {
  return (
    <div>
      <ImageCarouselWithCarousel />
      <VideoCarouselWithCarousel />
    </div>
  );
}

export default Media;
