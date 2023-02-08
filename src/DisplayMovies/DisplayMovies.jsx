import './DisplayMovies.css'
import MovieCard from "../MovieCard/MovieCard";

function DisplayMovies (props) {
    const { movies, response } = props;

    let movieComponent; 

    if(movies) {
        movieComponent = movies.map((movie) => {
            return <MovieCard title={ movie.Title } year={ movie.Year } poster={ movie.Poster } imdbID={ movie.imdbID } />
        })
    }

    return(
        <div className='movies-container'>
            { response === "True" ? movieComponent : <h1> No movies found with the given name, try searching for another movie! </h1> } 
        </div>
    )
}

export default DisplayMovies