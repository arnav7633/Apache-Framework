const client = require("../src/index");

const Client = new client({
  defaultPrefix: "!",
  intents: "All",
});
console.log(Client);
Client.login("ODIxNjkzNTA0MzYyNjQzNTA2.YFHbtQ.D8Cn0_6126rEbQJqamR0cqyPhag");
