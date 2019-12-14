import React from "react";
import TitleIcon from "../../images/titleIcon.png";

const Footer = () => {
  return <footer style={styles.footer}>D&D'Pedia</footer>;
};
export default Footer;

const styles = {
  footer: {
    height: "auto",
    width: "auto",
    backgroundColor: "#16A085",
    color: "black",
    fontFamily: "Times New Roman, Times, serif",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "1rem"
  }
};
