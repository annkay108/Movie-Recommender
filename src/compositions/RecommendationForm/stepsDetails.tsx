import React from "react"
import { FormikErrors } from "formik"

import RecommendedMovie from "../RecommendedMovie"
import Genre from "./RecommendationFormElement/Genre"
import Language from "./RecommendationFormElement/Language"
import Popularity from "./RecommendationFormElement/Popularity"
import ReleaseYear from "./RecommendationFormElement/ReleaseYear"
import WelcomePage from "./RecommendationFormElement/WelcomePage"

export interface IRecommendationElementProps {
	name: string
	handleNextStep: () => void
	errors: FormikErrors<unknown>
}

export interface IProgressBarStepsDetails {
	stepNumber: number
	stepName: string
}

export interface IStepsDetails {
	name: string
	component: React.FC<IRecommendationElementProps>
	progressBarStep: IProgressBarStepsDetails
	isLastFormStep?: boolean
	initialValue?: unknown
}

export const progressBarStepsDetails: IProgressBarStepsDetails[] = [
	{
		stepNumber: 1,
		stepName: "Genre",
	},
	{
		stepNumber: 2,
		stepName: "Release Year",
	},
	{
		stepNumber: 3,
		stepName: "Language",
	},
	{
		stepNumber: 4,
		stepName: "Popularity",
	},
]

export const stepsDetails: IStepsDetails[] = [
	{
		name: "Welcome",
		component: WelcomePage,
		progressBarStep: progressBarStepsDetails[0],
	},
	{
		name: "genres",
		component: Genre,
		progressBarStep: progressBarStepsDetails[0],
		initialValue: [],
	},
	{
		name: "releaseYear",
		component: ReleaseYear,
		progressBarStep: progressBarStepsDetails[1],
		initialValue: {},
	},
	{
		name: "languages",
		component: Language,
		progressBarStep: progressBarStepsDetails[2],
		initialValue: {},
	},
	{
		name: "popularity",
		component: Popularity,
		progressBarStep: progressBarStepsDetails[3],
		initialValue: {},
		isLastFormStep: true,
	},
	{
		name: "result",
		component: RecommendedMovie,
		progressBarStep: progressBarStepsDetails[3],
	},
]
