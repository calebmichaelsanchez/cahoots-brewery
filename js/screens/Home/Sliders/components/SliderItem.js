import React, { Component } from "react";
import Slider from "react-slick";

class SliderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
    }
    this.handleResize = this.handleResize.bind(this);
  }
  handleResize(e) {
    let w = window.innerWidth || document.body.clientWidth;
    if (w >= 768) {
      this.setState({ slidesToShow: 3 });
    } else {
      this.setState({ slidesToShow: 1 });
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
    //let { settings } = this.state;
    return (
      <Slider {...this.state}>
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

export default SliderItem
