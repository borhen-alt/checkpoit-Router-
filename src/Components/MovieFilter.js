import React from 'react'
import { Form, FormControl} from "react-bootstrap";
import Stars from './MovieStars';
const MovieFilter = (props) => {
    return (
        <div>
              <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={props.SearchByName}/>
        <Stars Search={props.SearchByRating}/>
      </Form>
        </div>
    )
}

export default MovieFilter
