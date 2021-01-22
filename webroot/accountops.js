function createAccount() {
  var givenEmail = document.getElementById("CreateInputEmail");
  var givenName = document.getElementById("CreateName");
  var givenSurname = document.getElementById("CreateSurname");
  var givenPass = document.getElementById("CreateInputPassword1");
  var givenPassCheck = document.getElementById("CreateInputPassword2");
  var givenSozlesme = document.getElementById("Check1");
  var givenNotify = document.getElementById("Check2");
  document.getElementById("kayitButton").disabled = true;
  
  var totalAJAX = "/accountops/signup?email=" + givenEmail.value + "&name=" + givenName.value + "&surname=" + givenSurname.value + "&pass=" + givenPass.value + "&passCheck=" + givenPassCheck.value;
  var xhttp = new XMLHttpRequest(); 
  xhttp.open("POST", totalAJAX, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
     var responseJson = JSON.parse(this.responseText);
     if(responseJson.actionStatus == "true"){
      $('#accountCarouselControls').carousel('next');
      document.getElementById("resultantEmail").innerHTML = responseJson.accountEmail;
      document.getElementById("kayitButton").disabled = false;
     }
     else{
	     console.log(responseJson.feedback);
      document.getElementById("kayitButton").disabled = false;
     }
    }
  };
}
function loginAccount() {
  var xhttp = new XMLHttpRequest(); 
  var givenEmail = document.getElementById("LoginInputEmail");
  var givenPass = document.getElementById("LoginInputPass");
  
  var totalAJAX = "/accountops/login?email=" + givenEmail.value + "&pass=" + givenPass.value;
  xhttp.open("POST", totalAJAX, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var responseJson = JSON.parse(this.responseText);
     $('#feedbackWindow').modal('show');
     console.log(responseJson.feedback);
    }
  };
}
