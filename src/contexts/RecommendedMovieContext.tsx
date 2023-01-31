import React, { createContext, useContext, PropsWithChildren, FC, ReactNode } from "react"

import { IReturnType } from "../hooks/useRecommendedMovie"

type RecommendedMovieContextProviderProps = {
	children: ReactNode
	data: IReturnType
}

const RecommendedMovieContext = createContext<IReturnType>({} as IReturnType)

export const useRecommendedMovieContext = (): IReturnType => useContext<IReturnType>(RecommendedMovieContext)

export const RecommendedMovieContextProvider: FC<PropsWithChildren<RecommendedMovieContextProviderProps>> = ({
	children,
	data,
}) => <RecommendedMovieContext.Provider value={data}>{children}</RecommendedMovieContext.Provider>
