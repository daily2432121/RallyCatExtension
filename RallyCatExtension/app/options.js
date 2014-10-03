function saveOptions() {
    var user = document.getElementById("user");
    var password = document.getElementById("password");
    var t = btoa(user + ":" + password);
    localStorage["token"] = t;

}