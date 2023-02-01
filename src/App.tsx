import React from "react"

import Button from "./components/Button"
import ProgressBar from "./components/ProgressBar"
import useRecommendedMovie from "./hooks/useRecommendedMovie"
import RecommendationForm from "./compositions/RecommendationForm"
import { RecommendedMovieContextProvider } from "./contexts/RecommendedMovieContext"
import { progressBarStepsDetails, stepsDetails } from "./compositions/RecommendationForm/stepsDetails"

const App = () => {
	const recommendedMovieHookData = useRecommendedMovie()
	const { selectedStep, handleGoBack, progressBarStep } = recommendedMovieHookData

	const namesOfStep = progressBarStepsDetails.map(({ stepName }) => stepName)

	return (
		<div className="text-center">
			<RecommendedMovieContextProvider data={recommendedMovieHookData}>
				<div className={`relative pt-12`}>
					{selectedStep !== 0 ? (
						<div className="absolute ml-12">
							<Button onClick={() => handleGoBack(stepsDetails)}>
								<div className="text-xl font-bold">Go back</div>
							</Button>
						</div>
					) : null}
					<div className="w-full">
						<ProgressBar selectedStep={progressBarStep} namesOfStep={namesOfStep} />
					</div>
				</div>

				<RecommendationForm />
			</RecommendedMovieContextProvider>
		</div>
	)
}

export default App
