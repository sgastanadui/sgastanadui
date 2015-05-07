//populateDropdown = function (data) {
//    var Username, IdUsername, Name, Rol;
//    Username = this.Username;
//    IdUsername = this.IdUsername;
//    Name = this.Name;
//    Rol = this.Rol;
//    $("#results").html("");
//    $("#results").append("<span>" + data.Name + "</span><br/><span>" + data.IdUsername + "</span><br/><span>" + data.Username + "</span><br/><span>" + data.Rol + "</span><br/>");
//};

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    var wcfServiceUrl = "http://localhost:43070/Autentication.svc/";


    function onSuccess(position) {

                var longitude = position.coords.longitude;
                var latitude = position.coords.latitude;
                var latLong = new google.maps.LatLng(27.985856, -81.959907);

                var mapOptions = {
                    zoom: 14,
                    center: latLong,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    backgroundColor: '#ffffff',
                    noClear: true,
                    disableDefaultUI: false,
                    keyboardShortcuts: true,
                    disableDoubleClickZoom: false,
                    draggable: true,
                    scrollwheel: true,
                    draggableCursor: 'pointer',
                    draggingCursor: 'crosshair',
                    mapTypeControl: true,
                    //mapTypeControlOptions: {
                    //    style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU,
                    //    position: google.maps.ControlPosition.TOP_LEFT,
                    //    mapTypeIds: [
                    //        google.maps.MapTypeId.ROADMAP
                    //    ]
                    //},
                    navigationControl: true,
                    streetViewControl: true,
                    navigationControlOptions: {
                        position: google.maps.ControlPosition.TOP_LEFT,
                        style: google.maps.NavigationControlStyle.ANDROID
                    },
                    scaleControl: true,
                    scaleControlOptions: {
                        position: google.maps.ControlPosition.TOP_LEFT,
                        style: google.maps.ScaleControlStyle.DEFAULT
                    }
                };

                var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                var marker = new google.maps.Marker({
                    position: latLong,
                    map: map,
                    animation: google.maps.Animation.BOUNCE,
                    title: 'Insight Risk Technologies, LLC',
                    icon: 'https://www.chancesrmis.com/um-usa/img/Logos/chancesr.jpg',
                    cursor: 'pointer',
                    draggable: true
                });

            }

            function onError  (error) {
                alert("the code is " + error.code + ". \n" + "message: " + error.message);
            }


    //function LoginUser() {
    //    //var Data1 = '{"UserName": "' + $("#txtUsername").val() + '"}';
    //    var Data1 = '{UserName: Santi}';
    //    //var Data2 = '{"Password": "' + $("#txtPassword").val() + '"}';
    //    var Data2 = '{Password: gretta}';

    //    var jsonString1 = JSON.stringify(Data1);
    //    var jsonString2 = JSON.stringify(Data2);
    //    var urlk1 = wcfServiceUrl + "Login/UserName=" + jsonString1 + '/Password=' + jsonString2;

    //    $.ajax({
    //        url: urlk1,
    //        type: "GET",
    //        contentType: "application/javascript",
    //        dataType: "jsonp",
    //        //jsonpCallback: "OrderResponse",
    //        error: function () {
    //            alert("Order failed!");
    //        },
    //        success: function (confirmation) {
    //            alert(confirmation.toString());
    //        }
    //    });
    //}

})();