import React, { Component } from "react";
import Carousel from "nuka-carousel";

export default class carousel extends Component {
  state = {
    slideIndex: 0,
  };
  render() {
    return (
      <div>
        <Carousel
          slideIndex={this.state.slideIndex}
          afterSlide={(slideIndex) => this.setState({ slideIndex })}
        >
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp" />
          <img src="https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg" />
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk" />
          <img src="https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg" />
          <img src="https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg" />
          <img src="https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg" />
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp" />
          <img src="https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg" />
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk" />
          <img src="https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg" />
          <img src="https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg" />
          <img src="https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg" />
        </Carousel>
      </div>
    );
  }
}
