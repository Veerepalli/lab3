//array to store values
var stores = Array();
//input field text


var returnMsg;

//clear the storage
function clearStorage() {
    //clear the storage
    stores = Array();
    localStorage.clear("database");
    //visually cleared
    document.getElementById('write').innerHTML = "storage cleared.";
}

// save the string
function saveStatusLocally() {
    //grab the value of the text box
    var stringToSave = returnMsg;
    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('wrie').innerHTML = "nothing to store";
    } else {
        //push that value to the array
        stores.push(stringToSave);
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write
        document.getElementById('write').innerHTML = "data stored.";
        //clear message after 1s
        setTimeout(function() {
            document.getElementById('write').innerHTML = "";
        }, 1000);

    }
}

// read the string
function readStatus() {
          document.getElementById('write').innerHTML = window.localStorage.getItem("database");    
}
function findWeather() {
  
  var start = document.getElementById('start').value;  
 
 returnMsg= document.getElementById('write').innerHTML ='<center><iframe src="http://api.openweathermap.org/data/2.5/weather?q='+start+'&mode=html" name="targetframe" allowTransparency="true" scrolling="no" frameborder="0"  ></iframe></center>';          
}
