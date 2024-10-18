const mongoose = require("mongoose");

const QviqUserSchema = new mongoose.Schema(
  {
    // this is the collection that is allocated
    collectionName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    // we can concate firstName and lastName to get fullName
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNumber: { type: String, trim: true },
    // if user is pro then this will be true else false (because a user can be either pro or basic, and there is no starter plan)
    pro: {
      type: Boolean,
      required: true,
      default: false,
    },
    // this should be profile specific
    // contactForm: {
    //   type: Boolean,
    //   default: false,
    // },
    // quickSelect: {
    //   type: Boolean,
    //   default: false,
    // },
    // don't know why we need this
    hasAnalytics: { type: Boolean },
    // don't know if we need this anymore
    blocked: { type: Boolean },
    emailVerified: { type: Boolean },
    // this should be profile specific
    // qrId: { type: String },
    // productCount: { type: Number },
    // serviceCount: { type: Number },
    // serviceLabelList: {
    //   type: [String],
    //   required: true,
    //   default: [],
    // },
    // productLabelList: {
    //   type: [String],
    //   required: true,
    //   default: [],
    // },
    hasGotPro: { type: Boolean },
    planDate: { type: Date },
    proExpDate: { type: Date },
    progress: { type: Number },
    // don't know why we need these
    recoveryCode: { type: Number },
    notificationCount: { type: Number },
    qrIdList: [mongoose.Schema.Types.Mixed],
    googleTokens: {
      access_token: {
        type: String,
        required: true,
      },
      refresh_token: {
        type: String,
        required: true,
      },
      scope: {
        type: String,
        required: true,
      },
      token_type: {
        type: String,
        required: true,
      },
      id_token: {
        type: String,
        required: true,
      },
      expiry_date: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QviqUsers", QviqUserSchema);
