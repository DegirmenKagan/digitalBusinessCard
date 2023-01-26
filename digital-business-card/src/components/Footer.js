import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

export default function Footer() {
  return (
    <footer>
      <img
        src={twitter}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.twitter.com/");
        }}
      />

      <img
        src={facebook}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.facebook.com/");
        }}
      />
      <img
        src={instagram}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.instagram.com/");
        }}
      />
      <img
        src={github}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.github.com/");
        }}
      />
    </footer>
  );
}
