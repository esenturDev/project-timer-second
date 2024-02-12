import { useState } from "react";
import scss from "./Timout2.module.scss";
import { useEffect } from "react";
export const Timout2 = () => {
	const [time2, setTime2] = useState(5 * 60);
	const [isRunning2, setIsRunning2] = useState(false);

	useEffect(() => {
		let intervalId;
		if (isRunning2) {
			intervalId = setInterval(() => {
				setTime2((prev) => {
					if (prev === 0) {
						clearInterval(intervalId);
						return 0;
					}
					return prev - 1;
				});
			}, 1000);
		} else {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isRunning2]);
	function toggleTimer() {
		setIsRunning2((prev) => !prev);
	}
	function formatTime2(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes < 10 ? "0" : ""}${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	}
	return (
		<div className={scss.Timout2}>
			<div className="container">
				<div className={scss.div1}>
					<div className={scss.div2}>
						<p>{formatTime2(time2)}</p>
						<button onClick={toggleTimer}>
							{isRunning2 ? "Pause" : "Start"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
