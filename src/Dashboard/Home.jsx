import React, { Fragment } from 'react'

import { Paper, makeStyles, Grid } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
	pageContent: {
		margin: theme.spacing(5),
		padding: theme.spacing(3),
		height:"150px"
		
	}

}))
const Home = () => {
	const classes = useStyles()
	return (
		<Fragment>
			<Grid container>
				<Grid item xs={4}>
					<Paper className={classes.pageContent}>
						<p>Hi</p>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.pageContent}>
						<p>Hi</p>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.pageContent}>
						<p>Hi</p>
					</Paper>
				</Grid>
			</Grid>
		</Fragment>
	)
}

export default Home
