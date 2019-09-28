var ourTeam = JSON.parse(teamMembers); 

for (var i = 0; i < ourTeam.length; i++) {
	var teamName = ourTeam[i];
	var print_name = document.getElementsByClassName("printName");
	print_name[i].innerHTML = teamName.name;
}

for (var i = 0; i < ourTeam.length; i++) {
	var teamEmail = ourTeam[i];
	var print_email = document.getElementsByClassName("printEmail");
	print_email[i].innerHTML = teamEmail.email;
}

for (var i = 0; i < ourTeam.length; i++) {
	var teamImg = ourTeam[i];
	var print_img = document.getElementsByClassName("printImg");
	print_img[i].src = teamImg.image;
}
