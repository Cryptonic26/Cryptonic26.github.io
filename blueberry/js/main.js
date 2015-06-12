console.log('host user:', getHostUser());
request({
    controller: 'hangout'

}, function (error, results) {

    console.log(error||results);

});