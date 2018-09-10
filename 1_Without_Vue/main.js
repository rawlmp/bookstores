//OOP
function BookStore() {

  var that = this;
  //Variables
  this.url = "https://api.myjson.com/bins/udbm5";

  //Functions / Methods
  //You can use this arrow ()=>{} or the traditional function(){}
  this.getData = () => {
    fetch(this.url)
      .then(function(response) {
        return response.json()
      }).then(function(data) {
        that.printBooks(data);
        that.activateListener();
        that.hideLoader();
      });
  }

  this.printBooks = (data) => {

    document.getElementById("books").innerHTML = "";

    var template = "";

    data.books.forEach(function(book) {

      template += `
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flipper">
                    <div class="front">
                        <img src="${book.portada}" alt="${book.portada}">
                    </div>
                    <div class="back">
                        <h2>${book.titulo}</h2>
                        <span>${book.descripcion}</span>
                        <a data-fancybox="gallery" href="${book.detalle}"><button class="btn">More Info</button></a>
                    </div>
                </div>
            </div>
            `;
    })
    document.getElementById("books").innerHTML = template;
  }

  this.activateListener = function() {
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

  this.hideLoader = () => {
    document.getElementById("loader").style.display = "none";
  }
}

var store = new BookStore();

store.getData();