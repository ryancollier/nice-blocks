//= require_tree .

$(document).ready(function() {

 //Slide out menus 
 $('.sliding-panel-button,.sliding-panel-close,.sliding-panel-fade-screen,.btn-close').on('click touchstart',function (e) {
 	//console.log($(this).attr("data-panel-id"));
    $('.' + $(this).attr("data-panel-name") + '.sliding-panel-content').toggleClass('is-visible');
    console.log($(this).attr('class'));	

    $("body").toggleClass("overlay-is-visible");

    //$('li.nav-link a.active').removeClass("active");
    //$(this).toggleClass("active");


    //Some hacky shit for toggling the menu active state. 
    // Show / hide the block menu active state

    // Need to handle the toggle: 

		  /*  Given a slide menu is visibile
		    When I click another slide menu
		    Then the first one goes away
		    And the second one is displayed*/

    if ($('.block-menu').hasClass('is-visible')) {
    	$('a.sliding-panel-button[data-panel-name="block-menu"]').addClass('active');
    }	else {
    	$('a.sliding-panel-button[data-panel-name="block-menu"]').removeClass('active');
    }

    // Show / hide the stye menu active state
    if ($('.style-menu').hasClass('is-visible')) {
    	$('a.sliding-panel-button[data-panel-name="style-menu"]').addClass('active');
    }	else {
    	$('a.sliding-panel-button[data-panel-name="style-menu"]').removeClass('active');
    }


    if ($(this).attr('data-panel-name') == 'settings-menu') {
    	$('.sliding-panel-fade-screen').toggleClass('is-visible');
    }

    e.preventDefault();

  });

 
});


// Settings Interactions

$(document).ready(function(){

	var storyTitle = $('input#title').val();
	var newStoryTitle;

	$('input#title').hover(function() {
		$('.rename-story.hint').toggleClass('is-visible');
	})

	$('input#title').on('click touchstart', function(e) {
		$(this).select();
		$('.rename-story.hint').hide();

	})

	$('input#title').on('focus', function(e) {
		$('.rename-story.button, .rename-story.cancel').addClass('is-visible');

	})

	//Rename the story kinda
	$('.rename-story.button').on("click", function(e) {
			$(this).toggleClass('is-visible');
			$('.rename-story.cancel').toggleClass('is-visible');
			$('.rename-story.hint').show();

			storyTitle = $('input#title').val();
			$('.story-title #theStoryTitle').text(storyTitle);

	})	

	// Rename on enter key
	$('input#title').on('keyup', function(e) {
    	if (e.keyCode == 13) {
        	$('.rename-story.button').click();
        	$(this).blur();
        	//console.log("Enter Key");
			return false;

    	}
	})

	//Cancel 
	$(".rename-story.cancel").on("click", function(e) {
		$(this).toggleClass('is-visible');
		$('.rename-story.button').toggleClass('is-visible');
		$('.rename-story.hint').show();
		$('input#title').val(storyTitle);

	})

/*	$('.rename-story').on('click touchstart', function(e){

		//Focus and select the text
		$('input#title').focus().select();

		console.log("clicked");
		e.preventDefault();
	})*/

});

