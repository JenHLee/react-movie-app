import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import "./Detail.css";

import { ClipLoader } from 'react-spinners';

function Detail() {
    const { id } = useParams();
    //current page's last part -> id
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovies = async () => {
        const json = await (
            //https://yts.mx/api/v2/movie_details.json?movie_id=${id}
            //https://yts-proxy.now.sh/list_movies.json?movie_id=${id}
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        console.log(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="container">
            <div className="loader">
                {loading ? (
                    <ClipLoader color={"#fff"} size={150} />
                ) : (
                    <div className="movies">
                        <Movie
                            poster={movie.large_cover_image}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.description_full}
                            genres={movie.genres}
                            year={movie.year}
                            rating={movie.rating}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default Detail;