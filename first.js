 const jwt = require('jsonwebtoken');

const value ={
  name: "Abhishek",
  accountNumber: 606060
}
//jwt
const token = jwt.sign(value, "secret");
console.log(token);
