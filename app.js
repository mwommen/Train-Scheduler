
//Time clock in the header 
function update() {
  $('#currentTime').html(moment().format('D. MMMM YYYY H:mm:ss'));
}
setInterval(update, 1000);


valof = moment().valueOf();          
console.log(valof)
$("#btnSubmit").html
valof.preventDefault();

// $('#btnSubmit').html

var trainName=""
var destination=""
var firstTrain=""
var frequency=""

//Create a button and log a message to the console to make sure every click sends the message 
$("#btnSubmit").on("click", function(clickSubmit) {
    clickSubmit.preventDefault();

    console.log("button clicked")
   
     trainName = $("#trainName").val().trim();
     destination = $("#Destination").val().trim();
     firstTrain = $("#trainTime").val().trim();
     frequency = $("#frequency").val().trim();

consolelog(trainName,destination,firstTrain.frequency)

    //   database.ref().set({
    //     name: name,
    //     email: email,
    //     age: age,
    //     comment: comment
      });
