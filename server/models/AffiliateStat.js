import mongoose from "mongoose";

const affiliateSchema = new mongoose.Schema(
  {
        userId: {
          type: mongoose.Types.ObjectId,
            ref: "User"
        },
        affiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transaction"
      }
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", affiliateSchema);

export default AffiliateStat;
