// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    let nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
    let displayMoment = document.getElementById('currentDay');
    displayMoment.innerHTML = nowMoment;
    console.log(nowMoment);
    let currentHour = moment().format('H');
  
  
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    }); 
  
    
    $(".time-block").each(function () {
  
      var timeBlock = $(this).attr("id").split("-")[1];
  
      if (currentHour == timeBlock) {
        $(this).addClass("present");
  
      } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
  
      } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
  });
  
  
  
  
  $(".saveBtn").click( function() {
    Event.preventDefault();
    var timeBlock = $(this).attr("id").split("-")[1];
    var textArea = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, textArea);
  });
  
  
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  