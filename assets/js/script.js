$(document).ready(function () {
  var today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
  var currentHour = dayjs().format("H");
  // let nowMoment = moment().format('MMMM Do YYYY');
  // let displayMoment = document.getElementById('currentDay');
  // displayMoment.innerHTML = nowMoment;
  // console.log(nowMoment);
  // let currentHour = moment().format('H');

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

  $(function () {
    $(".saveBtn").click(function () {
      event.preventDefault();
      var timeBlock = $(this).parent();
      var textArea = $(this).siblings(".description").val();
      localStorage.setItem(timeBlock, textArea);
    });
  });

  $("#hour-9 .time-block").val(localStorage.getItem("9"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});
