//Makes each button independent from other buttons
$(document).ready(function () {

    // Displays current date 
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    //Function to save user input into local storage
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    //Saves user input for each hour
    $("#9am .description").val(localStorage.getItem("9am"));

    $("#10am .description").val(localStorage.getItem("10am"));

    $("#11am .description").val(localStorage.getItem("11am"));

    $("#12pm .description").val(localStorage.getItem("12pm"));

    $("#1pm .description").val(localStorage.getItem("1pm"));

    $("#2pm .description").val(localStorage.getItem("2pm"));

    $("#3pm .description").val(localStorage.getItem("3pm"));

    $("#4pm .description").val(localStorage.getItem("4pm"));

    $("#5pm .description").val(localStorage.getItem("5pm"));

    //Funtion to color code time blocks to indicate whether it is in the past, present, or future
    function hourSaved() {

        for (i = 9; i < 18; i++) {

        var rowHour = i;

        currentTime = moment().format('H');

        console.log(rowHour, currentTime);
            
            if (rowHour < currentTime) {
                $("#" + i).addClass("past");
                
            }
            else if (rowHour > currentTime) {
                $("#" + i).addClass("future");
                }
            else {
                $("#" + i).addClass("present");
            }
        }}
    hourSaved();

    setInterval(hourSaved, 60000)
    
})