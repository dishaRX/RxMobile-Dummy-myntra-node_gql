import Users from "../../domains/models/Users";

var jwt = require("jsonwebtoken");

const auth = async (tokenData: any) => {
  // console.log(`request keys ${tokenData}`);
  try {
    const token = tokenData.replace("Bearer ", "");
    // console.log(`token: ${token}`);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("decoded token: " + decoded);
    const user = await Users.findOne({
      _id: decoded._id,
    });
    // console.log(`user: ${user}`);

    if (!user) {
      throw new Error();
    }
    // console.log(token);
    // req.token = token;
    // req.user = user;
    return user;
  } catch (error) {
    return { error: "Unauthorized user" };
  }
};

export default auth;
