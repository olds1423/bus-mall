// Lets crush this!
var totalNumClicks = 14;
var actualClicks = 0;
var allItems = [];
var randArr = [];
var clickImgOne = document.getElementById("imgOne");
var clickImgTwo = document.getElementById("imgTwo");
var clickImgThree = document.getElementById("imgThree");


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
  var randOne = Math.floor(Math.random() * allItems.length);
  var randTwo;
  var randThree;
  randArr.push(randOne);

  do {
    randTwo = Math.floor(Math.random() * allItems.length);
  } while (randTwo === randOne);
  randArr.push(randTwo);

  do {
    randThree = Math.floor(Math.random() * allItems.length);
  } while (randOne === randThree || randTwo === randThree);
  randArr.push(randThree);
}

function addImages(indexOne, indexTwo, indexThree){
  imgOne.src = allItems[indexOne].filepath;
  imgOne.name = allItems[indexOne].name;
  // I am setting the image source equal to an allItem index passed in as a parameter and then drilling down to its element with .filepath
  imgTwo.src = allItems[indexTwo].filepath;
  imgTwo.name = allItems[indexTwo].name;
  // I need the property of an index in allItems
  imgThree.src = allItems[indexThree].filepath;
  imgThree.name = allItems[indexThree].name;
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
randomImg();
addImages(randArr[0], randArr[1], randArr[2]);
console.log(randArr);



function handleImgClick(event){
  event.preventDefault();
  randArr = [];
  randomImg();
  addImages(randArr[0], randArr[1], randArr[2]);
}

clickImgOne.addEventListener("click", handleImgClick);
clickImgTwo.addEventListener("click", handleImgClick);
clickImgThree.addEventListener("click", handleImgClick);



//Is this the correct way to path an image ^ ********
// div.appendChild(imgOne);
//can I put the append child inside of the construtor ? *********

// handleImgClick.catalogItem();

// event handler on click

// button.addEventListener("click", handleButtonClick);
