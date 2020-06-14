function getComments() {
    fetch('/data').then(response => response.json()).then((comments) => { 
        const commentElement = document.getElementById('commentCell');
        comments.forEach((comment) => {
            commentElement.appendChild(createListElement(comment));
        })
    });
}

function createListElement(comment) {

    const divElement = document.createElement('div');
    divElement.setAttribute("id", "commentDiv");
    divElement.innerText = comment.message + " ";

    return divElement;
}