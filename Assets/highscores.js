//create a for loop that cycles through the array
// that is pulled from local storage


//check if script is runing
console.log('high scores script is running!');

//parse the JSON data into js object so we can use it
var getLocalData = JSON.parse(localStorage.getItem('savedScore'));
console.log("getLocalData: ",getLocalData);

//loop through array and create list item
for (var i = 0; i < getLocalData.length; i++) {
    //create a list item html
    var listItem = document.createElement('li');
    listItem.classList.add("score-data-container");
    //populate data
    listItem.innerHTML =
        '<div class="score-data-initials">'+ getLocalData[i].playerInitials +'</div>'+
        '<div class="score-data-points">'+ getLocalData[i].points +'</div>';
    //apprend the created list item
    document.querySelector('#highscores').append(listItem);
}
document.querySelector('#clear').addEventListener('click', function(event){
    localStorage. clear(event);
})

