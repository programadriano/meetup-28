const express = require("express");
var redis = require("redis");

const app = express();
var client = redis.createClient();

var User = require("./db");

app.get("/", (req, res) => {
  client.get("meetup_25", function(err, reply) {
    if (reply) {
      res.status(200).send({
        title: "redis",
        result: JSON.parse(reply) 
      });
    } else {
      User.find().then(function(doc) {
        client.set("meetup_25", JSON.stringify(doc));
        client.expire("meetup_25", 20);

        res.status(200).send({
            title: "db",
            result: doc
          });

      });
    }
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
