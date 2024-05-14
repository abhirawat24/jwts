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
