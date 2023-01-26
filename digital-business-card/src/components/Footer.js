import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

export default function Footer() {
  return (
    <footer>
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={github} />
    </footer>
  );
}
