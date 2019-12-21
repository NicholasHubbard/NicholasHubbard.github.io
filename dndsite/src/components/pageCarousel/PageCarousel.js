import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../images/dndHome.jpg";
import carousel2 from "../../images/dndLink.jpg";
import carousel3 from "../../images/critRole.jpg";

class PageCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        style={styles.container}
      >
        <div style={styles.imgContainer}>
          <img src={carousel1} alt="first slide" style={styles.imgStyle} />
          <h1
            className="legend"
            style={styles.typography}
            href="https://dnd.wizards.com/"
          >
            Check out the Full DND 5th Edition
          </h1>
        </div>
        <div
          style={styles.imgContainer}
          href="https://www.amazon.com/Dungeons-Dragons-Gaming-Books/b?ie=UTF8&node=16215"
        >
          <img src={carousel2} alt="second slide" style={styles.imgStyle} />
          <h1 className="legend" style={styles.typography}>
            Order Books NOW!
          </h1>
        </div>
        <div style={styles.imgContainer}>
          <img src={carousel3} alt="thrid slide" style={styles.imgStyle} />
          <h1
            className="legend"
            style={styles.typography}
            href="https://critrole.com/"
          >
            Check out Critical Role
          </h1>
        </div>
      </Carousel>
    );
  }
}

export default PageCarousel;

const styles = {
  container: {
    marginTop: "5rem"
  },
  imgContainer: {
    width: "100%",
    height: "300px",
    position: "relative"
  },
  imgStyle: {
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
    textAlign: "center",
    position: "relative"
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "18px"
  }
};
