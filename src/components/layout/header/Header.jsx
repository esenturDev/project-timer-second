// import { useState } from "react";
import scss from "./Header.module.scss";

export const Header = () => {
  // const [bakColor, setBacColor] = useState(`${scss.button1}`);
  // function colorResults () {
  //   setBacColor(`${scss.button1}`)
  // }
  // function colorResults () {
  //   setBacColor(`${scss.button1}`)
  // }
  // function colorResults () {
  //   setBacColor(`${scss.button1}`)
  // }
	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.div1}>
						<img
							src="https://pomofocus.io/images/icon-white2.png"
							alt="photos"
						/>
						<p>Pomofocus</p>
					</div>
					<div className={scss.div2}>
						<button>Report</button>
						<button>Setting</button>
						<button>Login</button>
					</div>
				</div>
			</div>
		</header>
	);
};
