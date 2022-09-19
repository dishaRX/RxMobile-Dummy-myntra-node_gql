import Admin from "../../domains/models/Admin";
import Users from "../../domains/models/Users";

var jwt = require("jsonwebtoken");

const auth = async (tokenData: any) => {
  try {
    const token = tokenData.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role == "user") {
      const user = await Users.findOne({
        _id: decoded.userId,
        "tokens.token": token,
      });

      if (!user) {
        throw new Error();
      }
      return user;
    } else {
      console.log("hey");
      const admin = await Admin.findOne({
        _id: decoded.adminId,
        "tokens.token": token,
      });
      if (!admin) {
        throw new Error();
      }
      return admin;
    }
  } catch (error) {
    return undefined;
  }
};

export default auth;
