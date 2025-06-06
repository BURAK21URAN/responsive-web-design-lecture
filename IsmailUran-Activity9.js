$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// Store the clicked link for use in the callback
		var clickedLink = $(this);
		
		// fade out the image and caption
		$("#image, #caption").fadeOut(1000, function() {
			// Get new image URL and caption from the clicked link
			var imageURL = clickedLink.attr("href");
			var caption = clickedLink.attr("title");
			
			// Set new image and caption
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);
			
			// Fade in the image and caption
			$("#image, #caption").fadeIn(1000);
		});
				
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready