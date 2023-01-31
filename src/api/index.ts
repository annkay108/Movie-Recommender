import Axios from "axios"

export const getMovies = (releaseYear: string, genres: string, language: string, isPopular: boolean) => {
	const popularityApiField = isPopular ? "vote_count.gte" : "vote_count.lte"
	return Axios.get(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&primary_release_year=${releaseYear}&with_genres=${genres}&language=${language}&${popularityApiField}=10`,
	)
}
