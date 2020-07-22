import React, { useState, useEffect } from 'react'
import {  makeStyles } from '@material-ui/core'




export function UseForm (initailValues) {
	const [values, setValues] = useState(initailValues)
	const handleChange = (e) => {
		const { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}
	return {
		values,
		setValues,
		handleChange
	}
}


const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiFormControl-root': {
			width: '80%',
			margin: theme.spacing(1)
		},
	},
}))


export function Form(props) {
	const classes = useStyles()
	return (
			<form className={classes.root}>
			{props.children}
			</form>
		
	)
}



