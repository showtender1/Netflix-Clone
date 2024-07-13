function searchMovie() {
    const movieLinks = [
        "https://www.youtube.com/watch?v=TNhwFvfySe0",
        "https://www.youtube.com/watch?v=QtBtRHLSjJw",
        "https://www.youtube.com/watch?v=XDPte4SAS3A",
        "https://www.youtube.com/watch?v=900X9fDFLc4",
        "https://www.youtube.com/watch?v=pH_1TbrFZB8",
        "https://www.youtube.com/watch?v=2c7mEizMufI"
    ];

    const searchInput = document.getElementById("search-input").value;
    const movieIndex = parseInt(searchInput, 10) - 1;

    if (movieIndex >= 0 && movieIndex < movieLinks.length) {
        window.location.href = movieLinks[movieIndex];
    } else {
        alert("1에서 6 사이의 숫자를 입력하세요.");
    }
}

function changeImage(element, newSrc) {
    element.src = newSrc;
}

function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollLeft(button) {
    const rowInner = button.parentElement.querySelector('.row-inner');
    rowInner.scrollBy({ left: -241.128, behavior: 'smooth' });
}

function scrollRight(button) {
    const rowInner = button.parentElement.querySelector('.row-inner');
    rowInner.scrollBy({ left: 241.128, behavior: 'smooth' });
}


