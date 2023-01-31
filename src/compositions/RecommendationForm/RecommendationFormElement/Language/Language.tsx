import React, { FC } from "react"
import Button from "../../../../components/Button"
import Select from "../../../../components/Select"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: "en", label: "English" },
	{ value: "es", label: "Spanish" },
	{ value: "it", label: "Italian" },
	{ value: "fr", label: "French" },
]

const Language: FC<IRecommendationElementProps> = ({ name, handleNextStep, errors }) => {
	return (
		<div>
			<div className="text-3xl text-red-400 pb-4"> And in which languages?</div>
			<div className="w-1/4 m-auto">
				<Select name={name} options={options} />
			</div>
			<div className="pt-48">
				<Button onClick={handleNextStep}>Next</Button>
			</div>
			{errors[name] ? <div className="text-red-600 pt-3">{errors[name]}</div> : null}
		</div>
	)
}

export default Language
