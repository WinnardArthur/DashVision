import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";

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

// Seed Transaction Stats
export const seedTransactions = () => {
  Transaction.deleteMany()
    .then(() => {
      console.log("Unmounting transactions...");
      Transaction.insertMany(dataTransaction)
        .then(() => {
          console.log("Transactions loaded successfully");
        })
        .catch((error) => console.log("Failed to load transactions", error));
    })
    .catch((error) => console.log("An error occured", error));
};

// Seed OverallStats
export const seedOverallStat = () => {
  OverallStat.deleteMany()
    .then(() => {
      console.log("Unmounting overall statistics...");
      OverallStat.insertMany(dataOverallStat)
        .then(() => {
          console.log("Overall stats loaded successfully");
        })
        .catch((error) => console.log("Failed to load OverallStats", error));
    })
    .catch((error) => console.log("An error occured", error));
};

// Seed AffiliateStats
export const seedAffiliateStat = () => {
  AffiliateStat.deleteMany()
    .then(() => {
      console.log("Unmounting affiliate statistics...");
      AffiliateStat.insertMany(dataAffiliateStat)
        .then(() => {
          console.log("Affiliate stats loaded successfully");
        })
        .catch((error) => console.log("Failed to load AffiliateStats", error));
    })
    .catch((error) => console.log("An error occured", error));
};
