import { error } from "console";
import Users from "../../domains/models/Users";

var jwt = require("jsonwebtoken");

const auth = async (tokenData: any) => {
  try {
    const token = tokenData.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user;
    if (decoded.role === "user") {
      console.log("User token");
      user = await Users.findOne({
        _id: decoded.userId,
        "tokens.token": token,
      });
    } else {
      console.log("Admin token");
    }
    if (!user) {
      throw new Error();
    }
    return user;
  } catch (error) {
    return undefined;
  }
};

export default auth;
