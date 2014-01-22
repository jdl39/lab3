'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var numclicks = 0;
	$("#testjs").click(function(e) {
		numclicks += 1;
		$('.jumbotron h1').text("You clicked the button " + numclicks + " times...");
		$('#testjs').text("DO IT AGAIN!!!!!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject); 
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       if ($(description).is(":visible")) $(description).fadeOut();
       else $(description).fadeIn();
    }
}

function updateProject(e) {
   $($('#project').val()).animate({ width: $('#width').val() });
   $($('#project').val() + " .project-description").text($('#description').val());
}