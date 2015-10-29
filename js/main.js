$(document).on('ready', function(){

	//add listener to our form

	$('#number_form').on('submit', function(){
		var product = $('#num1').val() * $('#num2').val() * $('#num3').val() 
		$('.main').html(product);

		return false;

	});

	$('#painting_form').on('submit', function(){
		var imgUrl = $('#img_url').val();
		var paintingName = $('#painting_name').val();
		addPainting(222, imgUrl, paintingName);

		return false;

	});

	$('#user_form').on('submit', function(){
		var fname = $('#firstname').val();
		var lname = $('#lastname').val();
		var password = $('#password').val();
		var email = $('#email').val();
		createUser(fname, lname, password, email);

		return false;

	});




});