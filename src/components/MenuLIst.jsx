import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
export const mainListItems = (
	<div>
		<Link to="/dashboard" style={{ textDecoration: 'none', display: 'block', color: "white" }}>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon style={{ color: "white" }} />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		</Link>
		<Link to="/empolyee" style={{ textDecoration: 'none', display: 'block', color: "white" }}>
		<ListItem button>
			<ListItemIcon>
				<PersonAddIcon style={{color:"white"}} />
			</ListItemIcon>
			<ListItemText primary="Add Emp" />
		</ListItem>
		</Link>
	
	</div>
);



