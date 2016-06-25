// Lets crush this!
var totalNumClicks = 14;
var actualClicks = 0;
var button = document.getElementById("imgDisplay");
var allItems = [];

function CatalogItem(name, path) {
  this.name = name;
  this.filepath = path;
  this.numClicks = 0;
  this.timeShown = 0;
  allItems.push(this);
 }
// I want a method that creates a random ? index
//Do I want the event handler here?
  // CatalogItem.prototype.handleImgClick = function() {
  //   for (var i = 0; i < totalNumClicks; i++) {
  //     // button event listener for image clicks?
  //     button.addEventListener("click", handleImgClick);
  //     alert("Work");
  //     // ranomize?
  //     // create a button and insert it into the html
  //     // handle review answer button click
  //   }
  //
  // };

var pen = new CatalogItem("pen", "img/pen.png");
//Is this the correct way to path an image ^ ********
div.appendChild(imgOne);
//can I put the append child inside of the construtor ? *********

handleImgClick.catalogItem();

// event handler on click

// button.addEventListener("click", handleButtonClick);
