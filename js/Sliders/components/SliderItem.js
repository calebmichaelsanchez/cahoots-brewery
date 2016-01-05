import React, { Component } from "react";
import Slider from "react-slick";

class SliderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize(e) {
    let w = window.innerWidth || document.body.clientWidth;
    if (w >= 768) {
      this.setState({
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      });
    } else {
      this.setState({
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      });
    }
  }
  componentWillMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    let { items } = this.props;
    let { settings } = this.state;
    return (
      <Slider {...settings}>
        {items.map((item, index) => {
          return (<div key={index}><img src={item.assetUrl} /></div>);
        })}
      </Slider>
    );
  }
  renderSlides({assetUrl}, index) {
    <div key={index}><img src={assetUrl} /></div>
  }
}

SliderItem.propTypes = {
  items: React.PropTypes.array.isRequired
}

export default SliderItem;
