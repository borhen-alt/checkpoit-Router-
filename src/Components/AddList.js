
import React, { useState} from "react"
import {Button,Form,ModalBody} from "react-bootstrap"

const AddList = (props) => {
    
	const [show, setShow] = useState(false);
	const handleSave = () => {
		setShow(false);
	    props.Add(NewMovie);
	};
	const handleClose = () => {
	    setShow(false);
	};
	const handleShow = () => setShow(true);
	const [NewMovie, setNewMovie] = useState({});
	const AddNewMovie = (e) => {
	    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
    };
    return (
        <div className="modal" tabindex="-1" role="dialog"show={show} onHide={handleClose} centered>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {console.log(NewMovie)}
              <Button variant="dark" onClick={handleShow}className="modal-title">
              Add A New Movie
              </Button>
              </div>
              {/* <Modal show={show} onHide={handleClose} centered> */}
              <ModalBody>
                  <Form>
                      <label>Movie title</label>
                      <input type="text"name="Title"placeholder="Movie title" onChange={AddNewMovie}/>
                      <label>Movie year</label>
                      <input type="text"name="Date" placeholder="Movie date"onChange={AddNewMovie} />
                      <label>Movie Id</label>
                      <input type="text"name="ID"placeholder="Movie id "onChange={AddNewMovie} />
                      <label>Movie rating</label>
                      <input type="text"name="Rating"placeholder="Movie rating"onChange={AddNewMovie} />
                      <label>Movie image</label>
                      <input type="text"name="Image"placeholder="Movie image"onChange={AddNewMovie}/>
              </Form>
              </ModalBody>
                  
                  <div className="modal-footer">
              <button type="button" className="btn btn-primary"onClick={handleSave}>Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal"onClick={handleClose} >Close</button>
              </div>
          </div>
        </div>
      </div>
    )
}

export default AddList
