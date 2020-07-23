import React, { Fragment } from 'react'
import HomeNavbar from '../Home/HomeNavbar'
const Layout = (props) => {
	return (
		<Fragment>
			<HomeNavbar/>
			<div className="bodydiv">
				{props.children}
			</div>
		</Fragment>
	)
}

export default Layout
