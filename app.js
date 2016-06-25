// Lets crush this!
var totalNumClicks = 14;
var actualClicks = 0;
var allItems = [];

function CatalogItem(name) {
  this.name = name;
  //img/[name].jpg
  this.filepath = "img/" + name + ".jpg";
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

// next steps are going to be getting a few images done, then im going to get the images to display on screen, once I have a couple different images displaying on screen lets start working on a random variable from the index of all pictures.
var imgOne = document.getElementById("imgOne");

function addImages(filepath){
  imgOne.src = "";
}
// function addImages(filepath) {
//   var image = document.createElement("div");
//   var insertImage = document.createElement("img");
//   imagesElement.appendChild(image);
//   insertImage.src = this.filepath
  // pull only one and get the filepath property and change that into the HTML, got back to using IDs with a classed section of the total - using img.src or something similar top change the filepath
  // image.appendChild(insertImage);
// }

// .id or .class or .src

addImages(pen);

var pen = new CatalogItem("pen");
var bubblegum = new CatalogItem("bubblegum");
var dogDuck = new CatalogItem("dogDuck");



//Is this the correct way to path an image ^ ********
// div.appendChild(imgOne);
//can I put the append child inside of the construtor ? *********

// handleImgClick.catalogItem();

// event handler on click

// button.addEventListener("click", handleButtonClick);
