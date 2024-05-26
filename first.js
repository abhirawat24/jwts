//jwts generate a token which is useful in maintaining security
//as the specific token can only specify a specific connection
const jwt = require('jsonwebtoken');

const value ={
  name: "Abhishek",
  accountNumber: 606060
}
//jwt
const token = jwt.sign(value, "secret");
console.log(token);
// the token generated using this secret or we can say the token can only be varified using this secret
//even if we loose the name and the accountNumber still the 'secret' token will not varify, only the server that signed it can varify it
