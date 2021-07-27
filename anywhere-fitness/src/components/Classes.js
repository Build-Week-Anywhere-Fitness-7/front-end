import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
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
  const [details, setDetails]  = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/classes/${id}`)
      .then(res => {
        setDetails(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  // if (!workout) {
  //   return <h3>Working on fetching available class details...</h3>
  // }

  return (
    <Container className='Classes'>
      <h1>Classes</h1>
      <Row>
        <Col sm="4">
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
        {/* <Col sm="4">
          <Card body>
            <CardTitle tag="h3">{details.name}</CardTitle>
            <CardText><strong>Type:</strong> {details.type}</CardText>
            <CardText><strong>Start Time:</strong> {details.time}</CardText>
            <CardText><strong>Duration:</strong> {details.duration}</CardText>
            <CardText><strong>Intensity Level:</strong> {details.intensity}</CardText>
            <CardText><strong>Location:</strong> {details.location}</CardText>
            <CardText><strong>Booked:</strong>  {details.enrolled}/{details.max}</CardText>
            <Button color='primary'>Book</Button>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Classes;