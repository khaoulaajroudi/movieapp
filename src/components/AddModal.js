import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddModal({ addMovie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({});

  return (
    <div>
      <div class="column is-one-quarter">
        <div className="Liste" onClick={handleShow}>
          <img src="capture.png"></img>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add">
            <input
              type="text"
              name="name"
              placeholder="titre du film"
              onChange={(e) =>
                setnewmovie({ ...newmovie, name: e.target.value })
              }
            />
            <input
              type="text"
              name="image"
              placeholder="image "
              onChange={(e) =>
                setnewmovie({ ...newmovie, image: e.target.value })
              }
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={(e) =>
                setnewmovie({ ...newmovie, description: e.target.value })
              }
            />
            <input
              type="text"
              name="rating"
              placeholder="rate"
              onChange={(e) =>
                setnewmovie({ ...newmovie, rating: e.target.value })
              }
            />
            <input
              type="text"
              name="year"
              placeholder="year"
              onChange={(e) =>
                setnewmovie({ ...newmovie, year: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addMovie(newmovie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModal;
