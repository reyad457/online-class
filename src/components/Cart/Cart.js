import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Cart = (props) => {
	const { cart } = props;
	const total = cart.reduce((total, course) => total + course.price, 0);
	const discount = total * 0.2;
	const tax = total * 0.1;

	const getRoundFigure = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
	};

	return (
		<div className="cart">
			<div className="header">
				<h4>Enrolled Summary</h4>
				<div>Course enrolled: {cart.length}</div>
			</div>
			<div className="body">
				<div>
					<span>Total Price: </span>
					<span>${getRoundFigure(total)}</span>
				</div>
				<div>
					<span>Discount (20%): </span>
					<span>${getRoundFigure(discount)}</span>
				</div>
				<div>
					<span>Tax (10%): </span>
					<span>${getRoundFigure(tax)}</span>
				</div>
				<div>
					<span>Grand total: </span>
					<span>${getRoundFigure(total + tax - discount)}</span>
				</div>

				<Button variant="dark" size="sm" block>
					<FontAwesomeIcon icon={faShoppingBag} /> Checkout
				</Button>
			</div>
		</div>
	);
};

export default Cart;
