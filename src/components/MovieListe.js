import React, { useState } from "react";
import App from "../App";
import MovieCard from "./MovieCard";
import ReactStars from "react-rating-stars-component";
import AddModal from "./AddModal";
import Carousel from "./Carousel";

function MovieListe() {
  const [Liste, setListe] = useState([
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description: "jhjhfhfhg",
      rating: 4,
      year: "2005",
    },
    {
      name: "Black Water",
      image:
        "https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg",
      description: "jhjhfhfhg",
      rating: 3,
      year: "2018",
    },
    {
      name: "Kong: Skull Island",
      image: "https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg",
      description: "jhjhfhfhg",
      rating: 2,
      year: "2017",
    },
    {
      name: "The Tomorrow War",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
      description: "jhjhfhfhg",
      rating: 5,
      year: "2021",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description: "jhjhfhfhg",
      rating: 4,
      year: "2005",
    },
    {
      name: "Tyler Rake",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp",
      description: "jhjhfhfhg",
      rating: 1,
      year: "2020",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description: "jhjhfhfhg",
      rating: 4,
      year: "2005",
    },
    {
      name: "Black Water",
      image:
        "https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg",
      description: "jhjhfhfhg",
      rating: 3,
      year: "2018",
    },
    {
      name: "Kong: Skull Island",
      image: "https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg",
      description: "jhjhfhfhg",
      rating: 2,
      year: "2017",
    },
    {
      name: "The Tomorrow War",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
      description: "jhjhfhfhg",
      rating: 5,
      year: "2021",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description: "jhjhfhfhg",
      rating: 4,
      year: "2005",
    },
    {
      name: "Tyler Rake",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp",
      description: "jhjhfhfhg",
      rating: 1,
      year: "2020",
    },
  ]);
  const [ratee, setratee] = useState("");
  const [text, settext] = useState("");
  const ratingChanged = (newRating) => {
    setratee(newRating);
  };
  const addMovie = (newfilm) => {
    setListe([...Liste, newfilm]);
  };
  return (
    <div>
      <div className="navbar">
        <div class="links">
          <a href="#">Home</a>
          <a href="#">Favorite</a>
          <a href="#">Sign Up</a>
          <span class="line"></span>
        </div>
        <img src="Capture-removebg-preview.png" className="logo" />
        <div className="filter">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => settext(e.target.value)}
          />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div class="column is-full featured_wrapper p-0">
        <img
          src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
          class="featured"
        />
        <div class="title_wrapper">
          <span class="has-text-white">Trending Today</span>
          <h1 class="title is-1 has-text-white">
            The Untold Story of the great Lorem Ipsum
          </h1>
          <button class="button">Watch It Now</button>
        </div>
      </div>

      <div class="container">
        <div class="last">
          <div class="column is-full">
            <Carousel />
            <p class="text-white">Action Movies Collection</p>
          </div>
          <div class="column is-one-quarter">
            {/* <div class="card"></div> */}
            <div className="Liste">
              {Liste.filter(
                (el) =>
                  el.name
                    .toLocaleLowerCase()
                    .includes(text.toLocaleLowerCase()) && el.rating >= ratee
              ).map((el) => (
                <MovieCard movie={el} />
              ))}
            </div>
          </div>

          <AddModal addMovie={addMovie} />
        </div>
      </div>
    </div>
  );
}

export default MovieListe;
