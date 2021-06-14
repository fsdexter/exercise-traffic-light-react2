import React, { useState } from "react";

//create your first component

export function Home() {
	const [sinal, setSinal] = useState("red");
	return (
		<div className="semaforo">
			<div
				onClick={() => setSinal("red")}
				className={
					"sinal red " + (sinal === "red" ? "glow" : "")
				}></div>
			<div
				onClick={() => setSinal("yelow")}
				className={
					"sinal yelow " + (sinal === "yelow" ? "glow blinck" : "")
				}></div>
			<div
				onClick={() => setSinal("green")}
				className={
					"sinal green " + (sinal === "green" ? "glow" : "")
				}></div>
		</div>
	);
}
