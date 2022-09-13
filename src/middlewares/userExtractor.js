// Auth process
import jwt from "jsonwebtoken";

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;
  let token = null;

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  console.log("token", token);
  let decodedToken = {};

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    console.log(err);
  }

  console.log("decodedToken", decodedToken);

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }
  
  const {id:userid } = decodedToken; // we retrieve of the token the id of the userid
  console.log("userid", userid);
  req.userid = userid; // we add the userid to the request

  next();
};
