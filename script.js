// Declare your arrays here

let pic = document.querySelector('#pic');
let sweets = ["cin2.webp", "pan3.jpg"];
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
});

