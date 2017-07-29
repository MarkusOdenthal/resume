var name = "Markus Odenthal";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Student in Sustainable Electrical Power Supply";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// var awesomeThoughts = "I am Markus and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace(["AWESOME"], ["FUN"])

// $("body").append(funThoughts);

// console.log(awesomeThoughts);

