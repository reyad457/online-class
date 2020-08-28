import React from "react";
import "./App.css";
import CourseList from "./components/CourseList/CourseList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useState } from "react";

function App() {
	const [cart, setCart] = useState([]);
	const handleEnrollNow = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};

	return (
		<div className="App">
			<Header cart={cart} handleEnrollNow={handleEnrollNow}></Header>
			<main>
				<CourseList cart={cart} handleEnrollNow={handleEnrollNow}></CourseList>
			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
