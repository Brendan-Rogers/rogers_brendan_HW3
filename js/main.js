// SEAF (Self Executing Anonymous Function)
(function(){ console.log("JS Check Check");

let years = document.querySelectorAll(".data-ref");

var waypoint = new Waypoint({
  element: document.getElementById('thing'),
  handler: function(direction) {
    
  }
});

function getData() {
	// we set up the URL with our Superglobal variable, which will be grabbed by our PHP to serve us content

	let targetURL = `./includes/connect.php?year=${this.id}`;  
    // THIS LINE OF CODE

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

// moves the data to the actual website
function showYearData(data) {
	const { year, description } = data;
    // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

    document.getElementById('tlHead').innerHTML = `${year}`;
    document.getElementById('tlDesc').innerHTML = `${description}`;
}

years.forEach( year =>  year.addEventListener('mouseover', getData));

})();