import React, { useState, useEffect } from 'react'
import { Grid, container, TextField, makeStyles, FormControl, FormLabel, Checkbox, RadioGroup, FormControlLabel,Radio, InputLabel,Select, MenuItem } from '@material-ui/core'
import { UseForm, Form } from '../../components/UseForm'
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

const initailValues = {
	id: 0,
	fullname: "",
	email: "",
	mobile: "",
	city: "",
	gender: "",
	departmentId: "",
	hireDate: new Date(),
	isParmanent: false
}



const EmployeeForm = () => {

	const { values, setValues, handleChange } = UseForm(initailValues)


	return (
		<div>
			<Form>
				<Grid container >
					<Grid item xs={6}>
						<TextField
							variant="outlined"
							margin="dense"
							label="Full Name"
							name="fullname"
							value={values.fullname}
							onChange={handleChange}
						/>
						<TextField
							variant="outlined"
							margin="dense"
							label="Email"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<FormControl>
							<FormLabel>Gender</FormLabel>
							<RadioGroup row
							name="gender"
							value={values.gender}
							onChange={handleChange}
							>
								<FormControlLabel value="male" control={<Radio />} label="Male"/>
								<FormControlLabel value="Female" control={<Radio />} label="FeMale" />
								<FormControlLabel value="Other" control={<Radio />} label="Other" />
							</RadioGroup>
						</FormControl>
						<FormControl
						variant="outlined"
						margin="dense"
						>
						<InputLabel>Deparment</InputLabel>
						<Select
						label="Deparment"
						name="departmentId"
						value={values.departmentId}
						onChange={handleChange}
						>
						<MenuItem value="">None</MenuItem>
								{currencies.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
						</Select>
						</FormControl>
						<FormControl>
							<FormControlLabel
								control= {<Checkbox
								name="isParmanent"
								value={values.isParmanent}
								onChange={handleChange}
								color="primary"
							/>}
								label="Permanent Employee`"
							/>
						</FormControl>
						<FormControl>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									inputVariant="outlined"
									label="Date"
									format="MM/dd/yyyy"
									name="hireDate"
									value={values.hireDate}
									onChange={handleChange}
									KeyboardButtonProps={{
										'aria-label': 'change time',
									}}
									
								>
								</KeyboardDatePicker>
							</MuiPickersUtilsProvider>
						</FormControl>
					</Grid>
				</Grid>
			</Form>
		</div>
	)
}

export default EmployeeForm
