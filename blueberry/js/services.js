console.log('loading services');

function request (options, callback) {
    options = options || {};

    var host        = options.host          || 'localhost';
    var port        = options.port          || '1337';
    var controller  = options.controller    || callback('No model key provided in the options object.');
    var query       = options.query         || {};
    var action      = options.action        || '';

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:1337/'+model+'/'+action, false);

    callback(null, xhr.responseText);

    xhr.send();

}