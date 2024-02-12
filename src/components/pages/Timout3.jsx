import { useState } from "react";
import scss from "./Timout3.module.scss";
import { useEffect } from "react";

const Timout3 = () => {
	const [time3, setTime3] = useState(15 * 60);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		let intervalId3;
		if (isRunning) {
			intervalId3 = setInterval(() => {
				setTime3((prev2) => {
					if (prev2 === 0) {
						clearInterval(intervalId3);
						return 0;
					}
					return prev2 - 1;
				});
			}, 1000);
		} else {
			clearInterval(intervalId3);
		}

		return () => clearInterval(intervalId3);
	}, [isRunning]);

	function toggleTimer() {
		setIsRunning((prev2) => !prev2);
	}
	function formatTime2(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	}
	return (
		<div className={scss.Timout3}>
			<div className="container">
				<div className={scss.div1}>
					<div className={scss.div2}>
						<p>{formatTime2(time3)}</p>
						<button onClick={toggleTimer}>
							{isRunning ? "pause" : "Start"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timout3;
