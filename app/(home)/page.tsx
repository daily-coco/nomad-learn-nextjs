import {API_URL} from "../../lib/api"
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title : "Home",
};

// URL
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// fetch Function
async function getMovies() {
    const response = await fetch(API_URL);
    const json= await response.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return(
        <div className={styles.container}>
            {movies.map((movie) =>(
                <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path}/>
            ))}
        </div>
    )
}