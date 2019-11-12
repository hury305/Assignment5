var rd = document.getElementById("r-diag"); //identifies the elements and assigns to variables
var rn = document.getElementById("r-neg");
var ii = document.getElementById("i");
var e = document.getElementById("e");
var eOne = document.getElementById("e-one");
var eTwo = document.getElementById("e-two");

rd.addEventListener("mouseover", Slide); //triggers animation when cursor hovers
rn.addEventListener("mouseover", Slide);
rd.addEventListener("mouseout", Slidestop); //triggers animation when cursor leaves
rn.addEventListener("mouseout", Slidestop);
Changecolors(); //adds the function
Changecolorl();
i.addEventListener("click", MoveI); //triggers animation when element is clicked
e.addEventListener("mouseover", Extend);
e.addEventListener("mouseout", DeExtend);
e.addEventListener("click", MoveE);

function MoveI() {
    ii.classList.add("MoveI"); //applies animation to the element
}

function Slide() {
    rd.classList.add("rd");
    rn.classList.add("rn");
}

function Slidestop() {
    rd.classList.remove("rd"); //removes animation from the element
    rn.classList.remove("rn");
}

function Changecolors(){
    var ds = document.getElementById("d-semi"); //identifies the element and assigns to a variable
    var random = Math.random(); //randomizes the variable
    if (random > 0.5) {
        ds.style.border = "10px dotted #f16abf"; //border properties for 50% of the time
    }
    else {
        ds.style.border = "10px dotted #cb4dfc"; //border properties for when it does not fall under the 50%
    }
}

function Changecolorl(){
    var dl = document.getElementById("d-left");
    var random = Math.random();
    if (random > 0.5) {
        dl.style.borderLeft = "10px dotted #f16abf";
    }
    else {
        dl.style.borderLeft = "10px dotted #cb4dfc";
    }
}

function Extend() {
    eOne.classList.add("extend");
    eTwo.classList.add("extend");
}

function DeExtend() {
    eOne.classList.remove("extend");
    eTwo.classList.remove("extend");
}

function MoveE() {
    e.classList.add("moveE");
}

function createCloudDiv() {
    var div = document.createElement("cloud"); //create a new element "cloud"
    div.classList.add("cloud"); //add the css style "cloud" to the added element
    var container = document.getElementById("background"); //get the container element
    container.appendChild(div); //attach the element to the container
}
function noCloudDiv() {
    var div = document.createElement("nocloud");
    div.classList.add("nocloud");
    var container = document.getElementById("background");
    container.appendChild(div);
}

function initialize(){
    for(i = 0; i< 121; i++){ //when i equals to 1 or is less than 121
        if (i % 2 < 1){ //if the remainder of 2 divided by 2 is less than 1
            createCloudDiv(); //perform the function "createCloudDiv"
        }
    	noCloudDiv(); //if i % 2 is greater than 1, perform the function "noCloudDiv"
    	console.log("the loop runs" + i + "times");
    }
}

initialize();
