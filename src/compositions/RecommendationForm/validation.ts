import { array, object } from "yup"
import { ErrorMessages } from "../../constants/ErrorMessages"

export const validationSchema = object().shape({
	genres: array().required(ErrorMessages.REQUIRED_FIELD),
	releaseYear: array().required(ErrorMessages.REQUIRED_FIELD),
	languages: array().required(ErrorMessages.REQUIRED_FIELD),
	popularity: object().required(ErrorMessages.REQUIRED_FIELD),
})