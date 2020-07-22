import React from 'react'
import {Paper,card, Typography, makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
	root:{
		backgroundColor:"#fdfdff"
	},
	pageHeader:{
		padding:theme.spacing(2),
		display:"flex",
		marrginBottom:theme.spacing(2)
	},
	pageIcon:{
		display:"inline-block",
		padding:theme.spacing(2),
		color:"#3c44b1",
	},
	pageTitle:{
		paddingLeft:theme.spacing(4),
		'& .Typography-subtitle2':{
			opacity:"0.6"
		}
	}
}))
const PageHeader = (props) => {
	const classes = useStyles()
	const {title,subtitle,icon}=props
	return (
		<Paper elevation={0} square ={classes.root}>
			<div className={classes.pageHeader}>
				<card className={classes.pageIcon}>
					{icon}
				</card>
				<div className={classes.pageTitle}>
					<Typography
					variant="h6"
					component="div">
					{title}	
					</Typography>
					<Typography
						variant="h6"
						component="div">
						{subtitle}
					</Typography>
				</div>
			</div>

		</Paper>
	)
}

export default PageHeader
