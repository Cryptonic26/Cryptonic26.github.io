gapi.hangout.onApiReady.add(function (eventObj) {
    console.log('api ready');

    console.log(gapi.hangout.getStartData());

});

gapi.hangout.onAppVisible.add(function(eventObj) {
    console.log('app visible');

    console.log(gapi.hangout.getStartData());


});


setTimeout(function () {
    console.log(gapi.hangout.getStartData());
}, 4000);

/*console.log('host user:', getHostUser());
request({
    controller: 'hangout'

}, function (error, results) {

    console.log(error||results);

});*/