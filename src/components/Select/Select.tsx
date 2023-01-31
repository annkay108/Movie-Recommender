import React, { FC } from "react"
import ReactSelect from "react-select"
import { Field, FieldProps, useField } from "formik"

interface ISelect {
	name: string
	options: {
		value: number | string
		label: string
	}[]
	isMulti?: boolean
	closeMenuOnSelect?: boolean
	onChange?: () => void
	placeholder?: string | null
}

const Select: FC<ISelect> = ({ placeholder, ...props }) => {
	const { isMulti = true, name, options, closeMenuOnSelect = false, onChange } = props
	const [field] = useField(props)
	return (
		<Field
			name={name}
			render={({ form }: FieldProps) => (
				<ReactSelect
					{...field}
					isMulti={isMulti}
					closeMenuOnSelect={closeMenuOnSelect}
					options={options}
					placeholder={placeholder}
					onChange={(value) => {
						form.setFieldValue(name, value)
						onChange?.()
					}}
				/>
			)}
		/>
	)
}

export default Select
