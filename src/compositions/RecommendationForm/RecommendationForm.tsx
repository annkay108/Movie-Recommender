import React from "react"
import { Formik } from "formik"

import { stepsDetails } from "./stepsDetails"
import { validationSchema } from "./validation"
import { useRecommendedMovieContext } from "../../contexts/RecommendedMovieContext"

const RecommendationForm = () => {
	const { selectedStep, handleNextStep, handleSubmit } = useRecommendedMovieContext()

	const SelectedElement = stepsDetails[selectedStep].component
	const fieldName = stepsDetails[selectedStep].name

	const initialValues = stepsDetails.reduce(
		(acc, { name, initialValue }) => (initialValue ? { ...acc, [name]: initialValue } : acc),
		{},
	)

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
				{({ submitForm, setFieldError, values, errors }) => (
					<SelectedElement
						errors={errors}
						name={fieldName}
						handleNextStep={() => handleNextStep(stepsDetails, submitForm, setFieldError, values)}
					/>
				)}
			</Formik>
		</div>
	)
}

export default RecommendationForm
