import { useEffect, useState } from "react"
import { useParams } from "react-router"
import styles from '../components/Movie.module.css'
import './animationLoading.css'

function Detail() {
   const { id } = useParams()

   const [loading, setLoading] = useState(true)
   const [movie, setMovie] = useState()

   const getMovieDetails = async () => {
      const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      const json = await response.json()
      setMovie(json.data.movie)
      setLoading(false)
   }

   useEffect(() => {
      getMovieDetails()
   }, [])

   return (
      <div className={styles.container_detail}>
         {loading ? <div className="lds_dual_ring loader"></div>
            : (
               <div className={styles.movie}>
                  <img
                     src={movie.medium_cover_image}
                     alt={movie.title}
                     className={styles.movie__img}
                  />
                  <div>
                     <h2 className={styles.movie__title}>{movie.title}</h2>
                     <h3 className={styles.movie__year}>{movie.year}</h3>
                     <p>{movie.description_full}</p>
                     <ul className={styles.movie__genres}>
                        {movie.genres.map(i =>
                           <li key={i}>{i}</li>
                        )}
                     </ul>
                  </div>
               </div>
            )}
      </div>
   )
}

export default Detail