import React, { FC } from "react"

import PageAnimation from "../../../../components/PageAnimation"
import Select from "../../../../components/Select"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: 1960, label: "60s" },
	{ value: 1970, label: "70s" },
	{ value: 1980, label: "80s" },
	{ value: 1990, label: "90s" },
]

const ReleaseYear: FC<IRecommendationElementProps> = ({ name, handleNextStep }) => {
	return (
		<PageAnimation>
			<div>
				<div className="text-3xl text-red-400 pb-4"> What release year you would like to watch?</div>
				<div className="w-1/5 m-auto">
					<Select name={name} options={options} onChange={handleNextStep} isMulti={false} closeMenuOnSelect />
				</div>
			</div>
		</PageAnimation>
	)
}

export default ReleaseYear
