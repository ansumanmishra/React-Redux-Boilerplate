import React from 'react';

// Stateless component
const Header = () => {
	return(
		<div className="container">
			<header>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">Sample CRUD App</a>
						</div>
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;