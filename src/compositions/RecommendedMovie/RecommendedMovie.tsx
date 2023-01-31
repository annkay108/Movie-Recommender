import React, { useState } from "react"
import Button from "../../components/Button"
import { useRecommendedMovieContext } from "../../contexts/RecommendedMovieContext"

const RecommendedMovie = () => {
	const { recommendedMovies, isLoading } = useRecommendedMovieContext()

	const [movieIndex, setMovieIndex] = useState<number>(0)
	const [shouldShowNotFound, setShouldShowNotFound] = useState(false)

	const handleNextMovie = () => {
		if (recommendedMovies.length - 1 >= movieIndex + 1) setMovieIndex(movieIndex + 1)
		else setShouldShowNotFound(true)
	}

	return (
		<div>
			<div className="text-3xl text-red-400 pb-4">Your Recommendation!</div>
			{!isLoading ? (
				shouldShowNotFound || recommendedMovies.length === 0 ? (
					<div className="text-2xl text-red-300 pb-4">
						Looks like we didn&apos;t find any movie you&apos;d like to watch! Try updating the fields.
					</div>
				) : (
					<div>
						<div className="text-2xl text-black pb-4">{recommendedMovies[movieIndex].original_title}</div>
						<div className="w-1/2 m-auto">{recommendedMovies[movieIndex].overview}</div>
						<img
							className="m-auto p-10"
							width={"20%"}
							alt="movie_poster"
							src={`https://image.tmdb.org/t/p/w500${recommendedMovies[movieIndex].poster_path}`}
						/>
						<Button onClick={handleNextMovie}>Next Movie</Button>
					</div>
				)
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}

export default RecommendedMovie
