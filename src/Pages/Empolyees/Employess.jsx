import React, { Fragment } from 'react'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import  PageHeader from '../../components/PageHeader'
import { Paper,makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
		pageContent:{
			margin: theme.spacing(5),
			padding: theme.spacing(3)
		}

}))
const Employess = () => {
	const classes = useStyles()
	return (
		<Fragment>
			<PageHeader
				title="Page-Header"
				subtitle="Page -Desc"
				icon={<PeopleOutlineIcon />}
			/>
			<Paper className={classes.pageContent}>
				<EmployeeForm />
			</Paper>
		</Fragment>
	)
}

export default Employess
