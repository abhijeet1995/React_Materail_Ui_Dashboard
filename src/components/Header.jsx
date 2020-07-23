import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton,Badge } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles, withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import {logout} from '../Redux/actions/auth/auth'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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

const Header = ({ auth: { user }, logout }) => {
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
						<Avatar alt="Remy Sharp" src={user && user.avatar} />
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
							<Link onClick={logout} to="/">
								<PowerSettingsNewIcon  fontSize="small" />
							</Link>
							
							
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

const mapStateToProps = state => ({
	auth: state.auth //entire auth state,

})

export default connect(mapStateToProps, { logout })(Header);

