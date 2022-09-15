import { error } from "console";
import Users from "../../domains/models/Users";

var jwt = require("jsonwebtoken");

const auth = async (tokenData: any) => {
  try {
    if (tokenData) {
      const token = tokenData.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      let user;
      if (decoded.role === "user") {
        user = await Users.findOne({
          _id: decoded.userId,
          "tokens.token": token,
        });
      } else {
      }
      if (!user) {
        throw new Error();
      }
      user._id = decoded.userId;
      return user;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export default auth;
