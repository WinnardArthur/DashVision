import { dataUser } from "./data/index.js";
import User from "./models/User.js";

export const seedUsers = () => {
  User.deleteMany()
    .then(() => {
      console.log("Users removed");
      User.insertMany(dataUser)
        .then(() => {
          console.log("Users loaded successfully");
        })
        .catch((error) => {
          console.log("Failed to load users with error: ", error);
        });
    })
    .catch((error) => console.log("An error occured", error));
};
