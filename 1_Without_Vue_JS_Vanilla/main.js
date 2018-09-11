let url = "https://api.myjson.com/bins/8zpvs";

getData();

function getData() {
  fetch(url)
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      printBooks(data);
      activateListener();
      hideLoader();
    });
}

function printBooks(data) {

  document.getElementById("books").innerHTML = "";

  var template = "";

  data.books.forEach(function(book) {

    template += `
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flipper">
                    <div class="front">
                        <img src="${book.cover}" alt="${book.title}">
                    </div>
                    <div class="back">
                        <h2>${book.title}</h2>
                        <span>${book.description}</span>
                        <a data-fancybox="gallery" href="${book.detail}"><button class="btn">More Info</button></a>
                    </div>
                </div>
            </div>
            `;
  })
  document.getElementById("books").innerHTML = template;
}

function activateListener() {
  let searchValue = document.getElementById("searchInput");
  let searchButton = document.getElementById("searchButton");

  searchValue.addEventListener("keyup", () => {
    var result = Array.from(document.getElementsByClassName("flip-container"))
      .forEach(function(item) {
        var match = item.innerHTML.toUpperCase().includes(searchValue.value.toUpperCase());
        match ? item.setAttribute("class", "flip-container") : item.classList += " hidden";
      })
  })
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
}