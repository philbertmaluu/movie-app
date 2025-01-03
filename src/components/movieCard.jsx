/* eslint-disable react/prop-types */
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import DownloadMovie from "./downloadMovie"

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    console.log(movie)


    const magnetLink = `magnet:?xt=urn:btih:16562099E54A6E5AE7575CF61620E65C80ABF1F3&dn=${encodeURIComponent(
        movie.title
    )}`;

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>

            <div className="download-movie">
                <p>{movie.release_date?.split("-")[0]}</p>
                <DownloadMovie magnetLink={magnetLink} />
            </div>
            
        </div>
    </div>
}

export default MovieCard