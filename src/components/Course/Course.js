import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
	const { thumb, title, author, rating, price } = props.course;
	return (
		<Col lg={4} md={6}>
			<Card>
				<img src={thumb} alt="" />
				<Card.Body>
					<div>
						<strong>{title}</strong>
					</div>
					<div>
						<strong>Author:</strong> {author}
					</div>
					<div>
						<strong>Rating:</strong> {rating}
					</div>
					<p>
						<strong>Price:</strong> ${price}
					</p>
					<Button variant="dark" size="sm" block onClick={() => props.handleEnrollNow(props.course)}>
						<FontAwesomeIcon icon={faShoppingCart} /> Enroll now
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Course;
