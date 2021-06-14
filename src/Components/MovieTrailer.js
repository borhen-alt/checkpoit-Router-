import React from 'react'
import { Card } from "react-bootstrap";

const MovieTrailer = (props) => {
    return (
        <div className="MovieTrailer" >
            <Card className="text-center">
        <Card.Header>Watch The Trailer For: {props.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.trailer}
            <hr />
            <h5>Synopsis:</h5>
            <p>{props.description}</p>
            <hr/>
            <h6> Rating : {props.rating} </h6>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    )
}

export default MovieTrailer
