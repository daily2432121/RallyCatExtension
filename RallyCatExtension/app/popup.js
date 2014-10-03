var token;
$(document).ready(function () {
    if (localStorage["token"] === undefined) {
        return;
    }
    var token = localStorage["token"];
    var auth = $.ajax
                  ({
                      type: "GET",
                      url: "https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize",
                      dataType: 'json',
                      dataType: 'json',
                      async: false,
                      headers: { "Authorization": "Basic " + token },
                      success: function () {

                      }
                  }).responseText;

    console.log(auth);
    auth = JSON.parse(auth);
    token = auth.OperationResult.SecurityToken;
    console.log(token);
})