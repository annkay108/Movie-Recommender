import React, { FC } from "react"

import Button from "../../../../components/Button"
import Select from "../../../../components/Select"
import PageAnimation from "../../../../components/PageAnimation"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: 28, label: "Action" },
	{ value: 35, label: "Comedy" },
	{ value: 10749, label: "Romance" },
	{ value: 27, label: "Horror" },
]

const Genre: FC<IRecommendationElementProps> = ({ name, handleNextStep, errors }) => {
	return (
		<PageAnimation>
			<div>
				<div className="text-3xl text-red-400 pb-4">What genre are you in the mood for today?</div>
				<div className="w-1/2 m-auto">
					<Select name={name} options={options} />
				</div>
				<div className="pt-48">
					<Button onClick={handleNextStep}>Next</Button>
				</div>
				{errors[name] ? <div className="text-red-600 pt-3">{errors[name]}</div> : null}
			</div>
		</PageAnimation>
	)
}

export default Genre
