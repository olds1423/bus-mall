// Lets crush this!
var totalNumClicks = 14;
var actualClicks = 0;
var allItems = [];
var randArr = [];

function CatalogItem(name) {
  this.name = name;
  //img/[name].jpg
  this.filepath = "img/" + name + ".jpg";
  this.numClicks = 0;
  this.timeShown = 0;
  allItems.push(this);
}

var pen = new CatalogItem("pen");
var bubblegum = new CatalogItem("bubblegum");
var dogDuck = new CatalogItem("dogDuck");
var pen = new CatalogItem("bag");
var banana = new CatalogItem("banana");
var bathroom = new CatalogItem("bathroom");
var boots = new CatalogItem("boots");
var breakfast = new CatalogItem("breakfast");
var chair = new CatalogItem("chair");
var cthulhu = new CatalogItem("cthulhu");
var dragon = new CatalogItem("dragon");
var petSweep = new CatalogItem("petSweep");
var scissors = new CatalogItem("scissors");
var shark = new CatalogItem("shark");
var sweep = new CatalogItem("sweep");
var tauntaun = new CatalogItem("tauntaun");
var unicorn = new CatalogItem("unicorn");
var usb = new CatalogItem("usb");
var waterCan = new CatalogItem("waterCan");
var wineGlass = new CatalogItem("wineGlass");

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
// var imgOne = document.getElementById("imgOne");
function randomImg() {
  var randOne = allItems.indexOf(Math.ceil(Math.random() * 10));
  randArr.push(randOne);
  var randTwo = Math.ceil(Math.random() * 10);
  randArr.push(randTwo);
  var randThree = Math.ceil(Math.random() * 10);
  randArr.push(randThree);
}

function addImages(objOne, objTwo, objThree){
  imgOne.src = objOne;
  imgTwo.src = objTwo;
  imgThree.src = objThree;
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

addImages(pen.filepath, bubblegum.filepath, dogDuck.filepath);
randomImg();

console.log(addImages);

// I need the property of an index in allItems

//Is this the correct way to path an image ^ ********
// div.appendChild(imgOne);
//can I put the append child inside of the construtor ? *********

// handleImgClick.catalogItem();

// event handler on click

// button.addEventListener("click", handleButtonClick);
