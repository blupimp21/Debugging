$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFactsArray.length));
	$("#factText").text(booFactsArray[number])
})
// This array holds all of our Boo the dog facts!
var booFactsArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16 making him a Pisces", "Boo's favourite food is grass, Boo has released two books" ]

// when the textPink button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange
	$("#funText").css("color", "orange")
})

$("#textPink").on("click", function() {
$("#funText").css("color", "pink")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

// when the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})