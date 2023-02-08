import './MovieCard.css'

function MovieCard(props) {
    
    const { title, year, poster, imdbID } = props;
    return(
        <article className='movie-container'>
            <h2 className='movie__title'> {title} </h2>
            { poster.length > 5 ? <img className='movie__img' src={poster} alt="Movie image" /> : <h3 className='movie__h3'> No image found! </h3> }
            <h3 className='movie__h3'> {year} </h3>
            <p> { imdbID } </p>
        </article>
    )
}

export default MovieCard;