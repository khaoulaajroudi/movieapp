import ReactStars from "react-rating-stars-component";
import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card>
      <div class="slide slide1">
        <div class="content">
          <div class="icon">
            <Card.Img variant="top" src={movie.image} className="imge" />
          </div>
        </div>
      </div>
      <div class="slide slide2">
        <div class="content">
          <Card.Body>
            <h3>
              <Card.Title>{movie.name}</Card.Title>
            </h3>
            <p>
              <Card.Text>{movie.description}</Card.Text>
            </p>
            <Card.Text>{movie.year}</Card.Text>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default MovieCard;
