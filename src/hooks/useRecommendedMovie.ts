import { FormikValues } from "formik"
import { useState } from "react"
import { getMovies } from "../api"
import { IStepsDetails } from "../compositions/RecommendationForm/stepsDetails"
import { ErrorMessages } from "../constants/ErrorMessages"

export interface IReturnType {
	handleGoBack: (stepsDetails: IStepsDetails[]) => void
	handleNextStep: (
		stepsDetails: IStepsDetails[],
		submitForm: () => Promise<void>,
		setFieldError: (field: string, message: string | undefined) => void,
		values: FormikValues,
	) => void
	selectedStep: number
	progressBarStep: number
	handleSubmit: (values: FormikValues) => Promise<void>
	recommendedMovies: IRecommendedMovies[]
	isLoading: boolean
}

interface IRecommendedMovies {
	original_title: string
	overview: string
	poster_path: string
	vote_average: number
}
const useRecommendedMovie = (): IReturnType => {
	const [selectedStep, setSelectedStep] = useState<number>(0)
	const [progressBarStep, setProgressBarStep] = useState<number>(0)
	const [recommendedMovies, setRecommendedMovies] = useState<IRecommendedMovies[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSubmit = async (values: FormikValues): Promise<void> => {
		console.log('runnnnnnnnnnnnnnnnnnnnnnnnnnnn')
		const { genres, releaseYear, languages, popularity } = values
		const formattedReleaseYear = releaseYear.value
		const formattedGenres = genres.map(({ value }) => value).join(",")
		const formattedLanguages = languages.value
		const isPopular = popularity.value === 1
		try {
			setIsLoading(true)
			const response = await getMovies(formattedReleaseYear, formattedGenres, formattedLanguages, isPopular)
			if (response.status === 200) {
				setRecommendedMovies(response.data.results)
			}
		} catch (error) {
			console.log(error)
		}
		setIsLoading(false)
	}

	const handleNextStep = (
		stepsDetails: IStepsDetails[],
		submitForm: () => Promise<void>,
		setFieldError: (field: string, message: string | undefined) => void,
		values: FormikValues,
	) => {
		if(('initialValue' in stepsDetails[selectedStep]) && (values[stepsDetails[selectedStep].name].length === 0)){
			setFieldError(stepsDetails[selectedStep].name, ErrorMessages.REQUIRED_FIELD)
			return
		}
		if (stepsDetails[selectedStep].isLastFormStep) {
			submitForm()
		}
		const {
			progressBarStep: { stepNumber },
		} = stepsDetails[selectedStep + 1]
		setProgressBarStep(stepNumber)
		setSelectedStep(selectedStep + 1)
	}

	const handleGoBack = (stepsDetails: IStepsDetails[]) => {
		const {
			progressBarStep: { stepNumber },
		} = stepsDetails[selectedStep - 1]

		setProgressBarStep(stepNumber)
		setSelectedStep(selectedStep - 1)
	}

	return {
		handleGoBack,
		handleNextStep,
		selectedStep,
		progressBarStep,
		handleSubmit,
		recommendedMovies,
		isLoading,
	}
}

export default useRecommendedMovie
