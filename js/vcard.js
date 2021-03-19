<script>
	var count = 1; // Number of remaining seconds.
	var counter; // Handle for the countdown event.
			
	function start() {
		counter = setInterval(timer, 1000);
	}

	function timer() {
		// Show the number of remaining seconds on the web page.
		var output = document.getElementById("displaySeconds");
		//output.innerHTML = count;
				
		// Decrease the remaining number of seconds by one.
		count--;
				
		// Check if the counter has reached zero.
		if (count < 0) { // If the counter has reached zero...
			// Stop the counter.
			clearInterval(counter);

			// Start the download.
			window.location.href = "https://kim.tholstorf.dk/personal_vcard.vcf";
			return;
		}
	}		
	// Start the countdown timer when the page loads. 
	window.addEventListener("load", start, false);
</script>
