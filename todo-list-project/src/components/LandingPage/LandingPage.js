import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Docket</h1>
              <p className="sub-title">One Safe place for all your notes.</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
