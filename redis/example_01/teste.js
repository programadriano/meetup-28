
var User = require('./db');


var u = new User({
    name: 'thiago',
    username: 'tadriano',
    password: '102030'
});

u.save(function (err) {
    if (err) throw err;
    console.log('User saved successfully!');
});

