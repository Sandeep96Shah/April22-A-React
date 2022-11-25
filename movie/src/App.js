import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "SuperMan",
          rating: "9/10",
          description: ` In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
          poster:
            "https://cdn.theatlantic.com/thumbor/nn7Ai4go9fBsDFd3V_wuLcd4FD8=/0x0:1920x1080/1600x900/media/img/mt/2015/05/man/original.jpg",
        },
        {
          title: "SpiderMan",
          rating: "10/10",
          description: ` SpiderMan In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
          poster:
            "https://assets.telegraphindia.com/telegraph/2022/Aug/1661588323_spider-man1.jpg",
        },
        {
          title: "IronMan",
          rating: "8/10",
          description: ` SpiderMan In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
          poster:
            "https://images.news18.com/ibnlive/uploads/2016/04/ironman.jpg?im=FitAndFill,width=1200,height=675",
        },
        {
          title: "Hanuman",
          rating: "100/10",
          description: ` SpiderMan In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
          poster:
            "https://cdna.artstation.com/p/assets/images/images/011/478/156/4k/gaurav-kumar-bpr-render.jpg?1529787786",
        },
        {
          title: "Hanuman",
          rating: "100/10",
          description: ` SpiderMan In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
          poster:
            "https://cdna.artstation.com/p/assets/images/images/011/478/156/4k/gaurav-kumar-bpr-render.jpg?1529787786",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.movies.map((movie) => (
          <MovieCard
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
