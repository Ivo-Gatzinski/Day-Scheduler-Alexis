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
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var rowHour = parseInt($(this).attr("id").split("hour"));
            console.log(rowHour, currentTime)

            if (rowHour < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (rowHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourSaved();

    setInterval(hourSaved, 60000)
    
})