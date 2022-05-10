import propTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from './Movie.module.css'

function Movie({ id, coverImg, title, summary, genres, year }) {
   return (
      <div className={styles.movie}>
         <img
            src={coverImg}
            alt={title}
            className={styles.movie__img}
         />
         <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>
               {title}
            </Link>
         </h2>
         <h3 className={styles.movie__year}>{year}</h3>
         <p>{summary}</p>
         <ul className={styles.movie__genres}>
            {genres.map(i =>
               <li key={i}>{i}</li>
            )}
         </ul>
      </div>
   )
}

Movie.propTypes = {
   id: propTypes.number.isRequired,
   coverImg: propTypes.string.isRequired,
   title: propTypes.string.isRequired,
   summary: propTypes.string.isRequired,
   genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie