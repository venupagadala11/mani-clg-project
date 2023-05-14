onload = start;

function start() {
    var i = 1;
    function Move() {
        i = (i % 4) + 1; // 4 is the Number of image in slider
        document.getElementById('i' + i).checked = true;
    }
    setInterval(Move, 6000); //change img in 6 sec
}



const button = document.querySelector('.btn');
function displayButton() {
    button.style.display = "block";
}

function cardDesc1() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: PG-13 <br> Directed by: David Yates <br> Written by: J.K. Rowling · Steve Kloves <br> Release date: April 15, 2022 (USA)";
}
function cardDesc2() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.9/10 <br> Content rating: PG-13 <br> Directed by: S.S. Rajamouli <br> Produced by: D.V.V. Danayya <br> Release date: March 25, 2022 (USA)";
}
function cardDesc3() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: Not Rated <br> Directed by: Sujoy Ghosh <br> Written by: Suresh Nair · Ritesh Shah <br> Release date: December 2, 2016 (USA)";
}
function cardDesc4() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 9.6/10 <br> Content rating: Not Rated <br> Directed by: Prashanth Neel <br> Produced by: Vijay Kiragandur <br> Release date: March 14, 2022 (USA)";
}
function cardDesc5() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.6/10 <br> Content rating: PG · TV-PG · TV-Y7-FV <br> Directed by: Gil Kenan <br> Produced by: Jack Rapke · Steve Starkeyr <br> Release date: July 21, 2006 (USA)";
}
function cardDesc6() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.3/10 <br> Content rating: Not Rated <br> Directed by: Vivek Agnihotri <br> Written by: Saurabh M. Pandey <br> Release date: March 11, 2022 (USA)";
}
function cardDesc7() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 6.5/10 <br> Content rating: R <br> Directed by: David Gordon Green <br> Produced by: Malek Akkad · Bill Block · Jason Blum <br> Release date: October 19, 2018 (USA)";
}
function cardDesc8() {
    document.querySelector('#movie-content').innerHTML = "IMDb rating: 8.8/10 <br> Content rating: Not Rated <br> Directed by: Christopher Nolan <br> Produced by: Legendary Entertainment <br> Release date: Jul 16, 2010 (USA)";
}


function confirmation(){
    window.alert("Thankyou for subscribing!");
}