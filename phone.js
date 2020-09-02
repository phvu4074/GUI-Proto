$(document).ready(function() { // do this when the document is loaded
	$("#phone_dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
	$("#add_contact").hide(); 
});

$("#phone_button").click(function() { // when "phone_button" is clicked
	$("#phone_dialer").show(); // show the element with ID "element"
	$("#contact_list").hide(); // hide the element with ID "otherElement"
	$("#add_contact").hide();
});

$("#list_button").click(function() { // when "list_button" is clicked
	$("#contact_list").show();
	$("#phone_dialer").hide(); 
	$("#add_contact").hide();
});

$("#add_button").click(function() { // when "add_button" is clicked
	$("#add_contact").show();
	$("#contact_list").hide();
	$("#phone_dialer").hide(); 
});