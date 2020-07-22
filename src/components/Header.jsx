import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton,Badge } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles, withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
const useStyles =makeStyles({
	root:{
		backgroundColor:"#ffffff",
		
	},
	serachInput:{
		opacity:"0.6",
		padding:"0px 8px",
		fontSize:"0.8 rem",
		'&:hover':{
			backgroundColor:"red"
		},
		'& .MuiSvgIcon-root':{
			marginRight:"8px"
		}
	},
	imageSize:{
		paddingTop	:"2px"
	}
})

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container alignItems="center">
					<Grid item>
						<InputBase
						placeholder="Search-Item"
						className={classes.serachInput}
						startAdornment={<SearchIcon fontSize="small"/>}
						/>
					</Grid>
					<Grid item sm></Grid>
					<Grid item className={classes.imageSize}>
						<Avatar alt="Remy Sharp" src="https://s3.us-east-2.amazonaws.com/activa.one/abhijeetshikhar_1593579037271/avatars/1595252857518_abhi.jpg" />
					</Grid>
					<Grid item>
						<IconButton>
							<Badge badgeContent={4} color="secondary">
								<NotificationsNoneIcon fontSize="small"/>
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent={4} color="primary">
								<ChatBubbleOutlineIcon fontSize="small"/>
							</Badge>
						</IconButton>
						<IconButton>
							
							<PowerSettingsNewIcon fontSize="small"/>
							
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Header
