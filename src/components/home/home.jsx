import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Myimage from "./header.png";
import ShaPic from "./shapic.png";

const Home = () => {
  return (
    <div>
      <div>
        <img className= "headerimg" src={Myimage} />
      </div>
      <div>
        <img class="image_1" src={ShaPic} width={300} height={300} />
        </div>
      <div>
        <div className="container">
          <div className="caption">
            <h1 className="title">who is sharmaine</h1>
            An Information Technology graduate from the Technological Institute
            of the Philippines with experience in quality assurance and software
            testing in the IT industry. A passionate Software Quality Assurance
            Tester who is knowledgeable and has experience in making test cases
            and test scripts to ensure the utmost quality of the software
            product. A detail-oriented individual who makes sure that the
            software product passes on all levels of testing and communicates
            effectively with colleagues. Open to opportunities and willing to
            learn, discover, and expand knowledge.
          </div>
        </div>
      </div>

      <div className="work">
        <Card>
          <Card.Header className="workhead">Work Expriences</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p class="fw-medium">
                Hartmann Crew Philippines: Hartmann Global IT
              </p>
              <p>
                Software Quality Assurance Tester – Full time (Jun 2023 -
                Present)
              </p>
              <footer className="blockquote-footer">
                Collaborated with the Software Developers by manually testing
                the system application and making sure that the software
                application passed all levels of functional testing (unit,
                integration, and system testing). Created documentation such as
                test scripts and test cases that validate if the system
                application passes each requirement and ensure that the system
                application is bug-free.
              </footer>

              <p class="fw-medium">
                Hartmann Crew Philippines: Hartmann Global IT
              </p>
              <p>
                Software Quality Assurance Tester – Intership (Feb 2023 – May
                2023 )
              </p>
              <footer className="blockquote-footer">
                Tested each user group assigned to the system application and
                tested tickets on Zoho Sprints to check if there were any bugs
                and errors, and opened a ticket if there were encountered bugs.
                Also, fixed minor bugs and errors that occurred during the
                testing phase.
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div className="cardgroup">
        <Card className="text-center">
          <Card.Header className="workhead"> Socials</Card.Header>
          <Card.Body>
            <Card.Title>Get in touch with me</Card.Title>
            <Card.Text>
              To know more about myself, you can contact me thru either
              Linkedin, Facebook, Gmail.
            </Card.Text>
            <Button variant="primary m-1">Linkedin</Button>
            <Button variant="success m-1">Gmail</Button>
            <Button variant="primary m-1">Facebook</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="footer">
        <footer>
          <p class="text-start fs-6">Sharmaine's Sample Resume</p>
          <p class="text-start fst-italic m-1">
            This page is created using Vite+React,
            <a href="https://react-bootstrap.github.io/" target="_blank">
              {" "}
              React-Bootstrap,
            </a>{" "}
            and
            <a
              href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              target="_blank"
            >
              {" "}
              Bootstrap v5.3.
            </a>{" "}
            Header image is from{" "}
            <a href="https://www.canva.com/en_ph/" target="_blank">
              {" "}
              Canva.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
