//the const's are holding out labels for our code we need to use to make a random number generator 
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

//our const min and max are set so there isn't a massive number for them to click and also for the code to have a boundaries 
const min = 1;
const max = 1000;
let randomNum;
//myButton.onclick = function() is gonna hold our main source of our random number generator
myButton.onclick = function()
{
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
//to set the function for our increment button
function incrementButton()
{ //we used var element to hold out incrementText
    var element = document.getElementById("incrementText");
    //var value is used to hold the value we want to display when the button is clicked and to set an identifier
    var value = element.innerHTML;
//++value; is just saying 1 + the value so as we click the value adds up by 1
    ++value;

    console.log(value)
    document.getElementById("incrementText").innerHTML = value
}



























