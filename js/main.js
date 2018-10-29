// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Initialized");

let years = document.querySelectorAll(".data-ref");

function getData() {
	// we set up the URL with our Superglobal variable, which will be grabbed by our PHP to serve us content
	let targetURL = `./includes/connect.php?year=${this.id}`;

	fetch(targetURL) //go get the data and bring it back
    .then(res => res.json()) //Turn the result into a plain JS object
    .then(data => {
        //Run a function to parse our data
        showYearData(data[0]);
    }) //Lets see what we got
    .catch(function(error) {
        console.log(error); //If anything broke, log it into the console
    });
}

function showYearData(data) {
	const { year, description } = data; // destructuring assignment => MDN JS destructuring
										// we'll have to research this!

	console.log(year);
	console.log(description);
}





years.forEach( year =>  year.addEventListener('click', getData));

}) ();