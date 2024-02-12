import scss from "./Layout.module.scss";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Timout1 } from "../pages/Timout1";
import { Timout2 } from "../pages/Timout2";
import Timout3 from "../pages/Timout3";
import { Header } from "./header/Header";
// import Footer from "./footer/Footer";

const Layout = () => {
	const [state, setState] = useState(`${scss.div1}`);
	const [stylesColor, setStylesColor] = useState(`${scss.navlink}`);
	const result = () => {
		setState(`${scss.div1}`);
		setStylesColor(`${scss.navlink}`);
	};
	function result2() {
		setState(`${scss.div2}`);
		setStylesColor(`${scss.navlink2}`);
	}
	function result3() {
		setState(`${scss.div3}`);
		setStylesColor(`${scss.navlink3}`);
	}
	return (
		<div className={`${state}`}>
			<Header />
			<main className={scss.main}>
				<nav className={scss.navbar}>
					<ul>
						<NavLink className={`${stylesColor}`} onClick={result} to="/">
							Pomodoro
						</NavLink>
						<NavLink className={`${stylesColor}`} onClick={result2} to="/timo2">
							Short Break
							
						</NavLink>
						<NavLink className={`${stylesColor}`} onClick={result3} to="/timo3">
							Long Break
						</NavLink>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Timout1 />} />
					<Route path="/timo2" element={<Timout2 />} />
					<Route path="/timo3" element={<Timout3 />} />
				</Routes>
				<div className={scss.section}>
					<p>#3</p>
					<p>Time to focus!</p>
					<h3>Tasks</h3>
					<div></div>
					<button>Add Task</button>
				</div>
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
