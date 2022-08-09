const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    accountNum: {
        type: Number,
    },
    bank: {
        type: String,
    },
    branch: {
        type: String,
    },
    accountType: {
        type: String,
    },
    status: {
        type: String,
    },

    studentID: {
        type: mongoose.SchemaTypes.ObjectId,
        unique: true,
        ref: 'Student',
    }
  },
  {
    collection: "accounts",
  }
);

AccountSchema.pre(/^find/, function (next) {
    this.populate('studentID');
    next();
})

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
