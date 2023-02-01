import Axios from "axios"

export const getMovies = (releaseYear: string, genres: string, language: string, isPopular: boolean) => {
	const popularityApiField = isPopular ? "vote_count.gte" : "vote_count.lte"
	return Axios.get(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&primary_release_date.gte=${releaseYear}&primary_release_date.lte=${releaseYear+9}&with_genres=${genres}&with_original_language=${language}&${popularityApiField}=10`,
	)
}
