/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var eventArray = [];
 
class Event {

  constructor(title, description, image,  pageURL, startDateTime, endDateTime, special ) {
    this.pageURL = pageURL;
    this.image = image;
    this.title = title; 
    this.description = description;
    this.startDatetime = startDateTime;
    this.endDateTime = endDateTime;
    this.special = special;

  }

  sayHi() {
    alert(this.name);
  }

}
function compare(a, b)
{
    var result = 0;
    if (a.startDatetime >= b.startDatetime) {
        result = 1;
    }
    return result;
}
function getAllSpecialEvents()
{
    var specialEventArray = [];
    var today = new Date();
    
    //sort array
    eventArray.sort(compare);
    //points.sort(function(a, b){return b - a});
    var arrayLength = eventArray.length;
    //loop thru
    for (var i = 0; i < arrayLength; i++) {
        if (eventArray[i].startDatetime >= today && eventArray[i].special == "true") {
            specialEventArray.push(eventArray[i]);
        }
    //Do something
     }
    return specialEventArray;
}

function getWeekEvents()
{
    var weekEventArray = [];
    var today = new Date();
     var result = new Date();
    result.setDate(today.getDate() + 7);
    //sort array
    eventArray.sort(compare);
    //points.sort(function(a, b){return b - a});
    var arrayLength = eventArray.length;
    //loop thru
    for (var i = 0; i < arrayLength; i++) {
        if (eventArray[i].startDatetime >= today 
               && result <= eventArray[i].startDatetime
                && eventArray[i].special != "true") {
            weekEventArray.push(eventArray[i]);
        }
    //Do something
     }
    return weekEventArray;
}