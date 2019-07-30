$(document).ready(function(){
    var firebaseConfig = {
    apiKey: "AIzaSyASaXV3V9RdYCuES0pS1oDDczLKzGAfvSE",
    authDomain: "train-project-ommen.firebaseapp.com",
    databaseURL: "https://train-project-ommen.firebaseio.com",
    projectId: "train-project-ommen",
    storageBucket: "",
    messagingSenderId: "543103120084",
    appId: "1:543103120084:web:18bb227706d680bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database().ref();
  
  database.on('child_added', function(snapshot){
      //Designed to handle 1 object
      //Look at total minutes from when first train occured and now -- this difference
      //We will divide that number by our frequency
      //And look at the remainder(modulus)
      var totalMinutesSinceTrainStarted = moment(snapshot.val().firstTrain, 'H:m').diff(moment(), 'minutes');
      var timeDiff = totalMinutesSinceTrainStarted % snapshot.val().frequency;
      var nextArrival = moment().add(timeDiff, 'minutes');
      
      var html =  "<tr><td>" + snapshot.val().trainName + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().frequency + "</td><td>" + snapshot.val().firstTrain + "</td><td>" + nextArrival.format('H:mm') + "</td><td>" + (frequency - Math.abs(timeDiff)) + "</td></tr>" 
      $("#table-body").append(html)
    });
    
    //Time clock in the header using moment.js
    function update() {
        $('#currentTime').html(moment().format('D. MMMM YYYY H:mm:ss'));
    }
    setInterval(update, 1000);

    //Create a timestamp
    valof = moment().valueOf();          
    
    //create varaibles for each user input box
    var trainName=""
    var destination=""
    var firstTrain=""
    var frequency=""
    
    //submit button function so user input is added to the bottom of the table 
    $("#btnSubmit").on("click", function(event) {
        event.preventDefault();
        
        trainName = $("#trainName").val().trim();
        destination = $("#Destination").val().trim();
        firstTrain = $("#trainTime").val().trim();
        frequency = $("#frequency").val().trim();
        database.push({trainName, destination, firstTrain, frequency});
   
      });



});
