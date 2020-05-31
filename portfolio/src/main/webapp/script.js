
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
        document.getElementById("miniBioDiv").style.opacity = 1;
        document.getElementById("gifPositionerDiv").style.opacity = 1;
        document.getElementById("mainHello").style.display= "none";
        document.getElementById("socialMediaLinksDiv").style.display = "none";
    } else {
        document.getElementById("miniBioDiv").style.opacity = 0;
        document.getElementById("gifPositionerDiv").style.opacity = 0;
    }

    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("miniBioDiv").style.opacity = 0;
        document.getElementById("gifPositionerDiv").style.opacity = 0;
    } else {
        document.getElementById("miniBioDiv").style.display= "block";
        document.getElementById("gifPositionerDiv").style.display = "block";
    }

    if ( document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        document.getElementById("parallaxDiv").style.height = "0px";
        document.getElementById("miniBioDiv").style.display= "none";
        document.getElementById("gifPositionerDiv").style.display = "none";
        document.getElementById("projectHeader").style.opacity = 1;
        document.getElementById("projectDescription").style.opacity = 1;
        document.getElementById("galleryContainer").style.opacity = 1;
    } else {
        document.getElementById("parallaxDiv").style.height = "100vh";
        document.getElementById("projectHeader").style.opacity = 0;
        document.getElementById("projectDescription").style.opacity = 0;
        document.getElementById("galleryContainer").style.opacity = 0;
    }

}

function eraseAllFigures() {
    var x = document.querySelectorAll(".galleryItem");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
        x[i].style.display = "none";
    }
}

function selectFigure(className) {
    eraseAllFigures();
    var x = document.querySelectorAll(className);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
        x[i].style.opacity = "1";
    }
}