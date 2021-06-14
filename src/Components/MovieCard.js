import React from 'react'
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import Stars from "./MovieStars"
const MovieCard = (props) => {
    return (
        <div className="MovieCard" >
        <Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.movie.image} className="poster" alt='movie'/>
			<Card.Body>
			<Link to={`/Description/${props.movie.id}`}>{props.movie.title}</Link>
				<Card.Text> {props.movie.date}</Card.Text>
				<Card.Text> {props.movie.rating}</Card.Text>
				<Stars/>
				</Card.Body>
	 	</Card>    
        </div>
    )
}

export default MovieCard
