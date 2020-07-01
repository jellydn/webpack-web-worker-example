import {double} from "./math.mjs";

addEventListener(
	"message",
	(event) => {
		postMessage(double(event.data));
	},
);
