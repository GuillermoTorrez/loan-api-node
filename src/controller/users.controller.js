import bcrypt from "bcrypt";
import User from "../models/Users.js";
import Role from "../models/Roles.js";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  await User.find({}).populate("role", {name: 1})
  .then((users) => res.json(users))
  .catch((err) => res.status(400).json({ error: err }));;
};

export const createUsers = async (req, res) => {
  const { body } = req;
  const { username, name, phone_number, email, role, password } = body;

  /// Auth process
  const authorization = req.get('authorization');
  let token = null;
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    token = authorization.substring(7)
  }
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
  if(!token || !decodedToken.id){
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const find_role = await Role.findOne({ name: role });
  if (!find_role) {
    return res
      .status(400)
      .json({
        error: "Role not found",
      })
      .end();
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({
    username: username,
    name: name,
    phone_number: phone_number,
    email: email,
    role: find_role._id,
    passwordHash: passwordHash,
  });

  await user
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json({ error: err }));
};
