import React, { FC } from "react"
import Button from "../../../../components/Button"
import Select from "../../../../components/Select"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: 1960, label: "60s" },
	{ value: 1970, label: "70s" },
	{ value: 1980, label: "80s" },
	{ value: 1990, label: "90s" },
]

const ReleaseYear: FC<IRecommendationElementProps> = ({ name, handleNextStep, errors }) => {
	return (
		<div>
			<div className="text-3xl text-red-400 pb-4"> What release year you would like to watch?</div>
			<div className="w-1/5 m-auto">
				<Select name={name} options={options} />
			</div>
			<div className="pt-48">
				<Button onClick={handleNextStep}>Next</Button>
			</div>
			{errors[name] ? <div className="text-red-600 pt-3">{errors[name]}</div> : null}
		</div>
	)
}

export default ReleaseYear
