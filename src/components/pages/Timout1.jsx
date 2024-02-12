import React, { useState, useEffect } from "react";
import scss from "./Timout1.module.scss";
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

export const Timout1 = () => {
  const navigate =  useNavigate();
	const [time1, setTime1] = useState(25 * 60); // время в секундах
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let intervalId;

		if (isRunning) {
			intervalId = setInterval(() => {
				setTime1((prevTime) => {
					if (prevTime === 0) {
						clearInterval(intervalId);
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
		}
    

		return () => clearInterval(intervalId); 
	}, [isRunning]);
  // function timout2 () {
  //   <Link to='/timout2'/>
  // }
	function toggleTimer() {
		setIsRunning((prevState) => !prevState); 
	}
	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	}

	return (
		<div className={scss.Timout1}>
      <div className="container">

			<div className={scss.div1}>
				<div className={scss.div2}>
					<p>{formatTime(time1)}</p>
					<button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
				</div>
			</div>
      </div>
		</div>
	);
};
