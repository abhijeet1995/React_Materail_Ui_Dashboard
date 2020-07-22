import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Paper,Avatar,Button,CssBaseline,Link,Grid,Container,TextField } from '@material-ui/core'


//styles
import useStyles from "./Style"


export default function Signup() {
	const classes = useStyles();

	return (
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
								/>
							</Grid>

						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className={classes.submit}
							style={{ backgroundColor: "#1976d2", color: "white" }}
						>
							Sign Up
          				</Button>
						<Grid container justify="flex-end">
							<Grid item>
								<Link href="#" variant="body2">
									Already have an account? Sign in
             					</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Paper>
		</Container>
	);
}