import React from "react";
import ContactBox from "../ContactBox";
import * as ReactBootStrap from "react-bootstrap";
import "./style.css";

export default function Home() {
  return (
    <div>
      <ReactBootStrap.Container>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col>
            <ReactBootStrap.Card>
              <p>
                My name is Ryan Schock, I am a full stack developer located in
                Ottawa, Ontario.
              </p>
              <p>
                Leveraging a background in finance, recently earned a full stack
                web development certificate from Carleton University's Coding
                Boot Camp (W2020)
              </p>
              <ContactBox />
            </ReactBootStrap.Card>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col>
            <ReactBootStrap.Card>
              <img alt="profilePic" id="profile" src="assets/images/git.jpg" />
            </ReactBootStrap.Card>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}
