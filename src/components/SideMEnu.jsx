import React from 'react'
import { withStyles, MenuList,List, Grid}from '@material-ui/core'
import {mainListItems} from '../components/MenuLIst'
const style ={
	sideMenu: {
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		left: "0px",
		width: "220px",
		height: "100%",
		backgroundColor: "#1976d2"
	}
}
	

const SideMEnu = (props) => {
	const {classes} = props
	console.log(classes)
	return (
		<div className={classes.sideMenu}>
			{/* <Grid item>
				DashBoard <hr/>
			</Grid> */}
			<MenuList>
				<List>{mainListItems}</List>
			</MenuList>
		</div>
	)
}

export default withStyles(style)(SideMEnu)
