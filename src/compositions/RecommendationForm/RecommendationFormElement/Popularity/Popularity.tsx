import React, { FC } from "react"

import Select from "../../../../components/Select"
import PageAnimation from "../../../../components/PageAnimation"
import { IRecommendationElementProps } from "../../stepsDetails"

const options = [
	{ value: 1, label: "Popular" },
	{ value: 2, label: "Little Known" },
]

const Popularity: FC<IRecommendationElementProps> = ({ name, handleNextStep }) => {
	return (
		<PageAnimation>
			<div>
				<div className="text-3xl text-red-400 pb-4"> Finally, something popular or not so much well known?</div>
				<div className="w-1/5 m-auto">
					<Select
						placeholder="Select Popularity"
						onChange={handleNextStep}
						name={name}
						options={options}
						isMulti={false}
						closeMenuOnSelect
					/>
				</div>
			</div>
		</PageAnimation>
	)
}

export default Popularity
