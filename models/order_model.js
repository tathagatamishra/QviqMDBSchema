const mongoose = require("mongoose");

// Define the full schema for the entire order structure
const orderSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },

    razorpay_order_id: { type: String, required: true, trim: true },
    razorpay_payment_id: { type: String, required: true, trim: true },
    razorpay_signature: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    now: { type: Date, required: true },

    address: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      addressLine1: { type: String, required: true },
      addressLine2: { type: String, trim: true },
      city: {
        label: { type: String, trim: true },
        name: { type: String, trim: true },
        countryCode: { type: String, trim: true },
        stateCode: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
      },
      state: {
        label: { type: String, trim: true },
        value: { type: String, trim: true },
        name: { type: String, trim: true },
        isoCode: { type: String, trim: true },
        countryCode: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
      },
      pincode: { type: String, required: true },
      country: {
        label: { type: String, trim: true },
        value: { type: String, trim: true },
        name: { type: String, trim: true },
        isoCode: { type: String, trim: true },
        flag: { type: String, trim: true },
        phonecode: { type: String, trim: true },
        currency: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
        timezones: [
          {
            zoneName: { type: String, trim: true },
            gmtOffset: { type: Number },
            gmtOffsetName: { type: String, trim: true },
            abbreviation: { type: String, trim: true },
            tzName: { type: String, trim: true },
          },
        ],
      },
    },

    paymentMethod: { type: String, required: true, trim: true },

    cart: [
      {
        _id: { type: String, required: true },
        title: { type: String, trim: true },
        description: { type: String, trim: true },
        color: { type: String, trim: true },
        price: { type: Number, required: true },
        category: { type: String, trim: true },
        productCoupons: [{ type: String, trim: true }],
        similarProductIds: [{ type: String, trim: true }],
        images: [{ type: String }],
        coverimages: [{ type: String }],
        isCustomizable: { type: Boolean, default: false },
        horizontal: { type: Boolean, default: false },
        vertical: { type: Boolean, default: true },
        nameFontStyle: { type: String, trim: true },
        nameFontSize: { type: String, trim: true },
        nameFontWeight: { type: String, trim: true },
        designationFontStyle: { type: String, trim: true },
        designationFontSize: { type: String, trim: true },
        designationFontWeight: { type: String, trim: true },
        contentAlignment: { type: String, default: "center", trim: true },
        material: { type: String, trim: true },
        productId: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],

    totalAmount: { type: Number, required: true },
    totalDiscount: { type: Number, default: 0 },
    sameBillingAddress: { type: Boolean, default: true },
    billingAddress: {
      fullName: { type: String, trim: true },
      email: { type: String, trim: true },
      phoneNumber: { type: String, trim: true },
      addressLine1: { type: String, trim: true },
      addressLine2: { type: String, trim: true },
      city: {
        label: { type: String, trim: true },
        name: { type: String, trim: true },
        countryCode: { type: String, trim: true },
        stateCode: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
      },
      state: {
        label: { type: String, trim: true },
        value: { type: String, trim: true },
        name: { type: String, trim: true },
        isoCode: { type: String, trim: true },
        countryCode: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
      },
      pincode: { type: String, trim: true },
      country: {
        label: { type: String, trim: true },
        value: { type: String, trim: true },
        name: { type: String, trim: true },
        isoCode: { type: String, trim: true },
        flag: { type: String, trim: true },
        phonecode: { type: String, trim: true },
        currency: { type: String, trim: true },
        latitude: { type: String, trim: true },
        longitude: { type: String, trim: true },
        timezones: [
          {
            zoneName: { type: String, trim: true },
            gmtOffset: { type: Number },
            gmtOffsetName: { type: String, trim: true },
            abbreviation: { type: String, trim: true },
            tzName: { type: String, trim: true },
          },
        ],
      },
    },

    shipRocket: {
      order_id: { type: Number, required: true },
      channel_order_id: { type: String, trim: true },
      shipment_id: { type: Number, required: true },
      status: { type: String, trim: true },
      status_code: { type: Number },
      onboarding_completed_now: { type: Boolean, default: false },
      awb_code: { type: String, trim: true },
      courier_company_id: { type: String, trim: true },
      courier_name: { type: String, trim: true },
      packaging_box_error: { type: String, trim: true },
    },

    order_status: { type: String, default: "Pending", trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
