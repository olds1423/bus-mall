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
var bag = new CatalogItem("bag");
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

//below I will create my tracker, it will have an empty array for the votes per name
// maybe instead of a tracker,a  helper function?

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
  imgOne.numClicks = allItems[indexOne].numClicks;
  imgOne.timeShown = allItems[indexOne].timeShown += 1;
  // I am setting the image source equal to an allItem index passed in as a parameter and then drilling down to its element with .filepath
  imgTwo.src = allItems[indexTwo].filepath;
  imgTwo.name = allItems[indexTwo].name;
  imgTwo.timeShown = allItems[indexTwo].timeShown += 1;

  // I need the property of an index in allItems
  imgThree.src = allItems[indexThree].filepath;
  imgThree.name = allItems[indexThree].name;
  imgThree.timeShown = allItems[indexThree].timeShown += 1;
}


function addVote(x){
  for (var i = 0; i < allItems.length; i++) {
    if (allItems[i].name === x) {
      allItems[i].numClicks++;
    }
  }
}

function handleImgClick(event){
//I think I want to wrap this in a for loop
  if (actualClicks !== totalNumClicks){
    event.preventDefault();
    randArr = [];
    var clickedName = event.target.name;
    addVote(clickedName);
    randomImg();
    addImages(randArr[0], randArr[1], randArr[2]);
    actualClicks++;
    // voteThis()
    // below is what im adding as we review wills code
  } else {
    // show me a new button that displays results
    event.preventDefault();
    var voteButtonArea = document.getElementById("displayVotesArea");
    var voteButton = document.createElement("p");
    voteButton.id = "voteButton";
    voteButton.textContent = "Click here for results";
    voteButtonArea.appendChild(voteButton);
  }
}

clickImgOne.addEventListener("click", handleImgClick);
clickImgTwo.addEventListener("click", handleImgClick);
clickImgThree.addEventListener("click", handleImgClick);

//**why is it adding the vote to the next item instatiated?
// .id or .class or .src
randomImg();
addImages(randArr[0], randArr[1], randArr[2]);
console.log(randArr);

// div.appendChild(imgOne);

// handleImgClick.catalogItem();

// event handler on click

// button.addEventListener("click", handleButtonClick);
