import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = (props) => {
	return (
		<header className="bg-dark">
			<Container>
				<Navbar expand="" variant="dark">
					<div className="main-nav">
						<Navbar.Brand href="#home">Online Class</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
					</div>
					<div className="cart-icon">
						<FontAwesomeIcon icon={faShoppingCart} />
						{props.cart.length ? <sup>{props.cart.length}</sup> : ""}
					</div>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</header>
	);
};

export default Header;
