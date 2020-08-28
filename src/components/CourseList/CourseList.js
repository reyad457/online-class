import React from "react";
import fakeData from "../../fakeData";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import "./CourseList.css";

const CourseList = (props) => {
	const courseData = fakeData.slice(0, 12);
	const [courses, setCourses] = useState(courseData);
	const handleSearchItem = (e) => {
		const searchField = e.target.value.trim();
		const filterCourse = courses.filter((course) => course.title.toLowerCase().includes(searchField.toLowerCase()));
		if (searchField.length) {
			setCourses(filterCourse);
		} else {
			setCourses(courseData);
		}
	};
	return (
		<div>
			<Container>
				<div className="course-list">
					<Row>
						<Col sm={9}>
							<div className="search-section">
								<h4>Available Courses </h4>
								<Form.Control
									size="sm"
									onChange={(e) => handleSearchItem(e)}
									type="search"
									placeholder="Search course"
								/>
							</div>
							<Row>
								{courses.map((course) => (
									<Course
										course={course}
										handleEnrollNow={props.handleEnrollNow}
										key={Math.random() + 100}
									/>
								))}
							</Row>
						</Col>
						<Col sm={3}>
							<Cart cart={props.cart}></Cart>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default CourseList;
