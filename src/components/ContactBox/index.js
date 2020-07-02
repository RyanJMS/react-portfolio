import React from "react";
import "./style.css";

export default function ContactBox() {
  return (
    <div className="contact">
      <a href="https://github.com/RyanJMS">
        <img id="github" src="assets/images/github.svg" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/ryan-schock-02422a170/">
        <img id="linkedin" src="assets/images/linkedin.svg" alt="linkin" />
      </a>

      <img
        id="phoneimg"
        src="assets/images/phone-call.svg"
        alt="phone"
        title="613-866-0322"
      />
      <a href="mailto:jukkasc2@gmail.com">
        <img id="email" src="assets/images/send.svg" alt="email" />
      </a>
      <a href="assets/resume-compressed.pdf">
        <img id="resume" src="assets/images/file.svg" alt="resume" />
      </a>
    </div>
  );
}
