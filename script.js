// Declare your arrays here

let pic = document.querySelector('#pic');
let sweets = ["cin2.webp", "pan3.jpg"];
let spicys = ["ramen.webp", "wings.jpg"];
let mexicans = ["tac.jpg", "tam.jpg"];
// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {

let user = document.querySelector("input").value;
if (user === "Sweet"){
    sweets.forEach(function(sweets){
    let image = document.createElement("img");
    image.src = sweets;
pic.appendChild(image);
    });
}
if (user === "Spicy"){
    spicys.forEach(function(spicys){
    let image = document.createElement("img");
    image.src = spicys;
pic.appendChild(image);
    });
}

if (user === "Mexican"){
    mexicans.forEach(function(mexicans){
    let image = document.createElement("img");
    image.src = mexicans;
pic.appendChild(image);
    });
}

});

