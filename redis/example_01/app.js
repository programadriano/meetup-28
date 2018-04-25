var redis = require('redis');
var client = redis.createClient();

// client.on('connect', function () {
//     console.log('connected');
// });
//13

//client.set('meetup_25', '99 jobs');
client.expire('meetup_25', 2);

client.get('meetup_25', function (err, reply) {
    // console.log(reply);

    if (reply) {
        console.log('I live: ', reply);
    } else {
        console.log('I not live: ', reply);
    }
});