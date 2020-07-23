import React,{useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Paper, Avatar, Button, CssBaseline, Grid, Container, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '../../Common/SnackBar'
//styles
import useStyles from "./Style"
import Layout from '../../Layout/Layout';

//Redux

import { connect } from 'react-redux';
import { setAlert } from '../../Redux/actions/alert/alert'
import { register } from '../../Redux/actions/auth/auth'
import {loader} from '../../Redux/actions/loader/loader'

const Signup = ({ register, alert,  loading,load })=> {
	const classes = useStyles();
	const [formData,setFormData]= useState({
		name:"",
		email:"",
		password:""
	})

	const { name, email, password } = formData;

	const handleChange = name => event => {
		setFormData({ ...formData, [name]: event.target.value });
	};

	const clickSubmit = event => {
		event.preventDefault();
			register({ name, email, password })
	};

	return (
		<Layout>
		<SnackBar type={alert.type} message={alert.message} open={alert.open} onClose={alert.handleClose} />
		<Container component="main" maxWidth="xs">
			<Paper className={classes.pageContent}>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
        			</Typography>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete="fname"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									margin="dense"
									id="firstName"
									label="First Name"
									autoFocus
									value={name}
									onChange={handleChange("name")}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									margin="dense"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email}
									onChange={handleChange("email")}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									margin="dense"
									type="password"
									id="password"
									autoComplete="current-password"
									value={password}
									onChange={handleChange("password")}
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className={classes.submit}
							style={{ backgroundColor: "#1976d2", color: "white" }}
							onClick={clickSubmit}
						>
								{
									load ? (<CircularProgress size={25} style={{ color: "white" }} />) : "REgister"
								}
          				</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link to="/" variant="body2">
									Already have an account? Sign in
             					</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Paper>
		</Container>
		</Layout>
	);
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	alert: state.alert,
	load: state.loader.loading,
});

export default connect(mapStateToProps, { setAlert,  register, loader })(Signup);
