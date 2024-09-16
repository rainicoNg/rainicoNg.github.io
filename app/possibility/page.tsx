let result;

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function Guess({provided, actual, guess}: {provided: number, actual: number, guess: "higher" | "lower" | "draw"}) {
	function generateResult(provided: number, actual: number, guess: "higher" | "lower" | "draw") {
		switch(guess) {
			case "higher":
				result = provided < actual;
				break;
			case "lower":
				result = provided > actual;
				break;
			case "draw":
				result = provided === actual;
				break;
		}
	}

	return (
		<button onClick={generateResult(provided, actual, guess)}></button>
	)
}

function Result({result}: {result: boolean}) {
	return (
		<div>{result ? "Correct" : "Incorrect"}</div>
	)
}

export default function Page() {
  return (
	<div>
		<div>Guess</div>
		<div>number</div>
		<div>Your guess</div>
		<button>Higher</button>
		<button>Lower</button>
		<Result result={result} />
	</div>
  );
}