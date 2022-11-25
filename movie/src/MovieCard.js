import React from "react";

class MovieCard extends React.Component {
    
  render() {
    const { title, poster, rating, description } = this.props;
    return (
      <div className="container">
        <div className="poster">
            <img src={poster} />
        </div>
        <div className="about">
          <div className="title">
            <p>{title}</p>
          </div>
          <div className="rating">
            <p>IMDB: {rating}</p>
          </div>
          <div className="description">
            <p>
             {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
