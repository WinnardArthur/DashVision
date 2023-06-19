import { dataUser, dataProduct, dataProductStat } from "./data/index.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";

// Seed users
export const seedUsers = () => {
  User.deleteMany()
    .then(() => {
      console.log("Unmounting users...");
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

// Seed Products
export const seedProducts = () => {
  Product.deleteMany()
    .then(() => {
      console.log("Unmounting products...");
      Product.insertMany(dataProduct)
        .then(() => {
          console.log("Products loaded successfully");
        })
        .catch((error) => console.log("Failed to load products", error));
    })
    .catch((error) => console.log("An error occured", error));
};

// Seed Product Stats
export const seedProductStats = () => {
  ProductStat.deleteMany()
    .then(() => {
      console.log("Unmounting product stats...");
      ProductStat.insertMany(dataProductStat)
        .then(() => {
          console.log("Product stats loaded successfully");
        })
        .catch((error) => console.log("Failed to load product stats", error));
    })
    .catch((error) => console.log("An error occured", error));
};
