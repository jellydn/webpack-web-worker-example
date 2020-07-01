const doubleWorker = new Worker("./worker.js", {type: "module"});
doubleWorker.onmessage = (event) => {
	console.log(`double: ${event.data}`);
};
doubleWorker.postMessage(42);
