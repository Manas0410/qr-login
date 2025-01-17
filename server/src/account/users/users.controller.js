import { UserModel } from "./users.model.js";

export const signupUser = async (req, res) => {
  try {
    // Check if the following email is already in use
    const hasEmailExists = await UserModel.find({ email: req.body.email });
    if (hasEmailExists) {
      // Return email is already in use
      return res.send({
        data: {},
        meta: { message: "This email is already in use" },
      });
    }

    const user = new UserModel(req.body);
    const response = await user.save();
    const results = {
      userId: response._id,
      userName: response.userName,
      email: response.email,
    };
    res.send({ data: results, meta: { message: "Signup successful" } });
  } catch (err) {
    console.log("Err: ", err);
    res.send({
      data: {},
      meta: { message: "Unable to create user at this moment" },
    });
  }
};

export const signinUser = async (req, res) => {};
