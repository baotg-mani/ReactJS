import propTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({ coverImg, title, summary, genres }) {
   return (
      <div>
         <img src={coverImg} alt={title} />
         <h2><Link to="/movie">{title}</Link></h2>
         <p>{summary}</p>
         <ul>
            {genres.map(i => <li key={i}>{i}</li>)}
         </ul>
      </div>
   )
}

Movie.propTypes = {
   coverImg: propTypes.string.isRequired,
   title: propTypes.string.isRequired,
   summary: propTypes.string.isRequired,
   genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie