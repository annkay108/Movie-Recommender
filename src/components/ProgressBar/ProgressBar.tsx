import React, { FC } from "react"
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"

import "./ProgressBar.css"

interface ICurrentProgressBarProps {
	selectedStep: number
	namesOfStep: string[]
}

const CustomProgressBar: FC<ICurrentProgressBarProps> = ({ selectedStep, namesOfStep }) => {
	return (
		<div className="mb-24">
			<ProgressBar percent={((selectedStep - 1) * 100) / (namesOfStep.length - 1)}>
				{namesOfStep.map((name, index) => (
					<Step key={name}>
						{({ accomplished }) => (
							<div>
								<div className={`indexedStep w-1/2 m-auto ${accomplished ? "accomplished" : null}`}>{index + 1}</div>
								<div className={`pt-3 ${accomplished ? "text-red-600" : "text-red-300"}`}>{name}</div>
							</div>
						)}
					</Step>
				))}
			</ProgressBar>
		</div>
	)
}

export default CustomProgressBar
