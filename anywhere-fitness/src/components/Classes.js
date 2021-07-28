import React from 'react'
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col 
} from 'reactstrap'

function ClassDetails(props) {
  const { name, type, time, duration, intensity, location, enrolled, max } = props.workout

  return (
    <Col sm="4">
      <Card body>
        <CardTitle tag="h3">{name}</CardTitle>
        <CardText><strong>Type:</strong> {type}</CardText>
        <CardText><strong>Start Time:</strong> {time}</CardText>
        <CardText><strong>Duration:</strong> {duration}min</CardText>
        <CardText><strong>Intensity Level:</strong> {intensity}</CardText>
        <CardText><strong>Location:</strong> {location}</CardText>
        <CardText><strong>Booked:</strong>  {enrolled}/{max}</CardText>
        <Button color='primary'>Book</Button>
      </Card>    
    </Col>
  )
}

export default function Classes(props) {

  return (
    <Container className='classes'>
      <h1>Classes</h1>
      <Row>
        {props.workouts.map(workout => (
          <ClassDetails key={workout.id} workout={workout} />
        ))}
      </Row>
    </Container>
  )
}