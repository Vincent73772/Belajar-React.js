import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';

function AboutComp() {
    return (
        <div>
        <Jumbotron>
          <h1 className="display-3">About us</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row>
          <Col><CardComp id="1" judul="Belajar react" tanggal="22/06/2020"/></Col>                  
          <Col><CardComp id="2" judul="Belajar Golang" tanggal="25/06/2020"/></Col>
          <Col><CardComp id="3" judul="Belajar PHP" tanggal="27/06/2020"/></Col>
          </Row>
        </Container>

      </div>
        )
    }

    export default AboutComp