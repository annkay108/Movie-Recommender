import React, { FC, PropsWithChildren } from "react"

interface IButton {
	onClick: () => void
	disabled?: boolean
}

const Button: FC<PropsWithChildren<IButton>> = ({ onClick, disabled = false, children }) => {
	return (
		<div>
			<button className="bg-red-300 px-16 py-5 rounded-lg" disabled={disabled} onClick={onClick}>
				<div className="text-2xl text-zinc-600">{children}</div>
			</button>
		</div>
	)
}

export default Button
