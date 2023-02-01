import React, { PropsWithChildren, FC, Fragment } from "react"
import { Transition } from "@headlessui/react"

const PageAnimation: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Transition
			as={Fragment}
			appear
			show
			enter="transform transition ease-in-out duration-500 sm:duration-700"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transform transition ease-in-out duration-500 sm:duration-700"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
		>
			{children}
		</Transition>
	)
}

export default PageAnimation
