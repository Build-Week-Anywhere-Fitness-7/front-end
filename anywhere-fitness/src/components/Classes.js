import React from 'react';
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col 
} from 'reactstrap';

const Classes = (props) => {
  return (
    <Container>
      <Row>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h3">Outdoor Yoga</CardTitle>
            <CardText><strong>Type:</strong> Yoga</CardText>
            <CardText><strong>Start Time:</strong> 5:30pm</CardText>
            <CardText><strong>Duration:</strong> 45min</CardText>
            <CardText><strong>Intensity Level:</strong> Moderate</CardText>
            <CardText><strong>Location:</strong> Terrace Park</CardText>
            <CardText><strong>Booked:</strong> 5/25</CardText>
            <Button color='primary'>Book</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h3">Outdoor Yoga</CardTitle>
            <CardText><strong>Type:</strong> Yoga</CardText>
            <CardText><strong>Start Time:</strong> 5:30pm</CardText>
            <CardText><strong>Duration:</strong> 45min</CardText>
            <CardText><strong>Intensity Level:</strong> Moderate</CardText>
            <CardText><strong>Location:</strong> Terrace Park</CardText>
            <CardText><strong>Booked:</strong> 5/25</CardText>
            <Button color='primary'>Book</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h3">Outdoor Yoga</CardTitle>
            <CardText><strong>Type:</strong> Yoga</CardText>
            <CardText><strong>Start Time:</strong> 5:30pm</CardText>
            <CardText><strong>Duration:</strong> 45min</CardText>
            <CardText><strong>Intensity Level:</strong> Moderate</CardText>
            <CardText><strong>Location:</strong> Terrace Park</CardText>
            <CardText><strong>Booked:</strong> 5/25</CardText>
            <Button color='primary'>Book</Button>
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle tag="h3">Outdoor Yoga</CardTitle>
            <CardText><strong>Type:</strong> Yoga</CardText>
            <CardText><strong>Start Time:</strong> 5:30pm</CardText>
            <CardText><strong>Duration:</strong> 45min</CardText>
            <CardText><strong>Intensity Level:</strong> Moderate</CardText>
            <CardText><strong>Location:</strong> Terrace Park</CardText>
            <CardText><strong>Booked:</strong> 5/25</CardText>
            <Button color='primary'>Book</Button>
          </Card>
        </Col>
      </Row>
    </Container>

    // REQUIRED DATA POINTS
    //
    // - `Name`
    // - `Type`
    // - `Start time`
    // - `Duration`
    // - `Intensity level`
    // - `Location`
    // - `Current number of registered attendees`
    // - `Max class size`
  );
};

export default Classes;