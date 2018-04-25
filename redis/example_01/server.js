const express = require('express')
var redis = require('redis');

const app = express()
var client = redis.createClient();

var User = require('./db');


app.get('/', (req, res) => {

    client.get('meetup_25', function (err, reply) {

        if (reply) {
            console.log('redis');
            res.send(reply)
        } else {
            console.log('db');

            User.find()
                .then(function (doc) {

                    client.set('meetup_25', JSON.stringify(doc));
                    client.expire('meetup_25', 20);
                    res.send(doc)
                });
        }
    });

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))