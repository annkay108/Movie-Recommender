import React, { FC } from "react"
import PageAnimation from "../../../../components/PageAnimation"
import Select from "../../../../components/Select"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: "en", label: "English" },
	{ value: "es", label: "Spanish" },
	{ value: "it", label: "Italian" },
	{ value: "fr", label: "French" },
]

const Language: FC<IRecommendationElementProps> = ({ name, handleNextStep }) => {
	return (
		<PageAnimation>
			<div>
				<div className="text-3xl text-red-400 pb-4"> And in which languages?</div>
				<div className="w-1/4 m-auto">
					<Select name={name} options={options} onChange={handleNextStep} isMulti={false} closeMenuOnSelect />
				</div>
			</div>
		</PageAnimation>
	)
}

export default Language
