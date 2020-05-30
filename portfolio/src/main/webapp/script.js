/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
    const greetings =
      ['We are all stories in the end. Just make it a good one, eh? (Doctor Who)', 'Your assumptions are your windows on the world. Scrub them off every once in a while, or the light will not come in. (Isaac Asimov)', 'If you wish to make an apple pie from scratch, you must first invent the universe. (Carl Sagan)', 'Time is an illusion. Lunchtime doubly so. (The Hitchhikers Guide to the Galaxy)'];

    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("movingcell").style.width = "100%";
        document.getElementById("mainHello").style.opacity = 0;
        document.getElementById("mainHello").style.width = "0%";
        document.getElementById("socialMediaLinksDiv").style.opacity = 0;
    } else {
        document.getElementById("movingcell").style.width = "45%";
        document.getElementById("mainHello").style.width = "45%";
        document.getElementById("mainHello").style.opacity = 1;
        document.getElementById("mainHello").style.display= "block";
        document.getElementById("socialMediaLinksDiv").style.opacity = 1;
        document.getElementById("socialMediaLinksDiv").style.display = "block";
    }


    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("miniBioText").style.opacity = 1;
        document.getElementById("bioWavyLine").style.opacity = 1;
        document.getElementById("miniBioHeader").style.opacity = 1;
        document.getElementById("gifPositionerDiv").style.opacity = 1;
        document.getElementById("mainHello").style.display= "none";
        document.getElementById("socialMediaLinksDiv").style.display = "none";
    } else {
        document.getElementById("miniBioText").style.opacity = 0;
        document.getElementById("bioWavyLine").style.opacity = 0;
        document.getElementById("miniBioHeader").style.opacity = 0;
        document.getElementById("gifPositionerDiv").style.opacity = 0;
    }

    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("miniBioText").style.opacity = 0;
        document.getElementById("bioWavyLine").style.opacity = 0;
        document.getElementById("miniBioHeader").style.opacity = 0;
        document.getElementById("gifPositionerDiv").style.opacity = 0;
    } else {
        document.getElementById("miniBioText").style.display= "block";
        document.getElementById("miniBioHeader").style.display= "block";
        document.getElementById("gifPositionerDiv").style.display = "block";
    }

    if ( document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("parallaxBlack").style.height = "0px";
        document.getElementById("miniBioText").style.display= "none";
        document.getElementById("miniBioHeader").style.display= "none";
        document.getElementById("gifPositionerDiv").style.display = "none";
        document.getElementById("projectHeader").style.opacity = 1;
        document.getElementById("projectDescription").style.opacity = 1;
        document.getElementById("galleryContainer").style.opacity = 1;
    } else {
        document.getElementById("parallaxBlack").style.height = "100vh";
        document.getElementById("projectHeader").style.opacity = 0;
        document.getElementById("projectDescription").style.opacity = 0;
        document.getElementById("galleryContainer").style.opacity = 0;
    }

}