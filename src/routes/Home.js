import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";
import { ClipLoader } from 'react-spinners';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    //https://yts-proxy.now.sh/list_movies.json?sort_by=rating - original
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    //movies inside of data inside of data
    this.setState({ movies, isLoading: false });
    //movies : movies (one from a state, the other one from const)

  };
  //wait for axios and then continue. (but it seems like that it's working)

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <ClipLoader color={"#fff"} size={150} />
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                //has to be unique
                id={movie.id}
                rating={movie.rating}
                year={movie.year}
                title={movie.title}
                summary={movie.description_full}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
