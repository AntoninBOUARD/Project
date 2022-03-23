'use strict';

// Pas besoin d'évenement window.onload puisqu'on utilise l'attribut defer
// lorsque l'on charge notre script


var genre = data["genres"];
var artist = data["artists"];
var select = document.querySelector("select");



function loadGenre() {
    var genreAajouter;


    for(var i = 0; i<genre.length; i++){

        
        var genreAajouter = document.createElement("option");
        genreAajouter.value = genre[i].id;
        genreAajouter.text = genre[i].name;
        select.appendChild(genreAajouter);

    }
    var mySelect = document.getElementById("mySelect");
    mySelect.addEventListener("change", genreChanged);
    loadArtists(genre);
}


function genreChanged(){

    var value = select.value;
    console.log(value);

    var info = genre.find(genre => genre.id == value).description;
    console.log(info);
    
    loadArtists(genre);
}

function loadArtists(genre){

    var topArtist = document.getElementById("topArtist");
    topArtist.textContent = "Top " + select.value + " artist"

    var desc = document.getElementById("desc");
    desc.textContent = genre.find(genre => genre.id == select.value).description;

    var selectArtist = document.getElementById("selectArtists");

    var filtre = artist.filter(artist => artist.genreId == select.value);
    console.log(filtre);
    filtre.forEach(addArtist =>{
        var genreArtist = document.createElement("a");
        genreArtist.value = addArtist.id;
        genreArtist.text = addArtist.name;
        selectArtist.appendChild(genreArtist);
    });

   

    //var genreArtist = artist.find(artist => artist.genreId == select.value).id;
    //console.log(genreArtist);
     
}

loadGenre();

