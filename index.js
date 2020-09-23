var express = require("express");
var request = require("request");

var app = express();

app.use(express.json());

app.post("/orders", function (req, res) {
  //request vtex
  console.log(req.body.OrderId);

  let order = req.body.OrderId;

  let appKey = "";
  let appToken = "";
  var options = {
    method: "GET",
    url: "https://hiringcoders14.myvtex.com/api/oms/pvt/orders/" + order,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-VTEX-API-AppKey": appKey,
      "X-VTEX-API-AppToken": appToken,
      Cookie: "janus_sid=3f0982b7-1f01-404f-b37c-4c7a964ea0fe",
    },
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });

  res.end("yes");
});

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
