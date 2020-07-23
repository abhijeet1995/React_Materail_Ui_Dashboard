import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Paper, Avatar, Button, CssBaseline, Grid, Container, TextField } from '@material-ui/core'
import { Link,Redirect } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '../../Common/SnackBar'
//styles
import useStyles from "./Style"
import Layout from '../../Layout/Layout';

//Redux

import { connect } from 'react-redux';
import { setAlert } from '../../Redux/actions/alert/alert'
import { login } from '../../Redux/actions/auth/auth'
import { loader } from '../../Redux/actions/loader/loader'

const Login = ({isAuthenticated, login, alert, loading, load }) => {
	const classes = useStyles();
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	const {  email, password } = formData;

	const handleChange = name => event => {
		setFormData({ ...formData, [name]: event.target.value });
	};

	const clickSubmit = event => {
		event.preventDefault();
		login({  email, password })
	};

	//Redirect
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />
	}

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
								style={{ backgroundColor: "#20B2AA", color: "white" }}
								onClick={clickSubmit}
							>
								{
									load ? (<CircularProgress size={25} style={{ color: "white" }} />) : "LOgin"
								}
							</Button>
							<Grid container justify="flex-end">
								<Grid item>
									<Link to="/register" variant="body2">
										Not have an account? Register
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

export default connect(mapStateToProps, { setAlert, login, loader })(Login);
