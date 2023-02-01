import { array, object } from "yup"
import { ErrorMessages } from "../../constants/ErrorMessages"

export const validationSchema = object().shape({
	genres: array().required(ErrorMessages.REQUIRED_FIELD),
	releaseYear: object().required(ErrorMessages.REQUIRED_FIELD),
	languages: object().required(ErrorMessages.REQUIRED_FIELD),
	popularity: object().required(ErrorMessages.REQUIRED_FIELD),
})