function loadNav() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/pxc/navbar.html");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("limnav").innerHTML = this.responseText;
        }
    };
}
function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/pxc/footer.html");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         document.getElementById("limfooter").innerHTML = this.responseText;
        }
    };
}
loadNav();
loadFooter();
