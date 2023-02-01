import React, { FC } from "react"

import Button from "../../../../components/Button"
import PageAnimation from "../../../../components/PageAnimation"

interface IWelcomePageProps {
	handleNextStep: () => void
}

const WelcomePage: FC<IWelcomePageProps> = ({ handleNextStep }) => {
	return (
		<PageAnimation>
			<div>
				<h1 className="text-5xl pb-6 font-medium">Hello! Welcome to Movie Recommender</h1>
				<span className="text-3xl text-red-500">
					Ideal for when you want to watch a movie but can not decide which one!
				</span>
				<div className="pt-12">
					<Button onClick={handleNextStep}>Next</Button>
				</div>
			</div>
		</PageAnimation>
	)
}

export default WelcomePage
