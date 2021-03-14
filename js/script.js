'use strict'


var form = document.querySelector('#form');

form.addEventListener('submit', function(){


	var nombre = document.querySelector('#nombre').value;
	var web = document.querySelector('#web').value;
	var correo = document.querySelector('#email').value;


	var nom_p = document.querySelector('#nombre_p span');
	var web_p = document.querySelector('#web_p span');
	var email_p = document.querySelector('#email_p span');

	nom_p.innerHTML = nombre;
	web_p.innerHTML = web;
	email_p.innerHTML = correo;

	console.log(nom_p);

});