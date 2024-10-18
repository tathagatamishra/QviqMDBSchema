const mongoose = require('mongoose');

// Schema for business hours per day
const dayScheduleSchema = new mongoose.Schema({
  start: { type: String },
  end: { type: String }
});

// Main Profile Schema - combining all into a single document
const profileSchema = new mongoose.Schema({
  // Basic details
  basicDetail: {
    header: { type: String },
    type: { type: String },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    mobileNumber: { type: String },
    newMobileNumber: { type: String },
    selectedCode: { type: Number },
    selectedCountry: { type: String },
    companyName: { type: String },
    jobTitle: { type: String },
    description: { type: String },
    profileImage: { type: String },
    coverImage: { type: String },
    isOn: { type: Boolean, default: true },
    isWhatsappNumber: mongoose.Schema.Types.Mixed
  },

  // Template settings
  template: {
    header: { type: String },
    type: { type: String },
    access: { type: Boolean, default: false },
    shared: { type: Boolean, default: false },
    reviewButtonSwitch: { type: Boolean, default: false },
    starSwitch: { type: Boolean, default: false },
    businessHoursSwitch: { type: Boolean, default: false },
    productSwitch: { type: Boolean, default: false },
    productCount: { type: Number },
    serviceSwitch: { type: Boolean, default: false },
    serviceCount: { type: Number },
    contactForm: { type: Boolean, default: false },
    productLabel: { type: String },
    customizedTemplate: {
      buttonStyle: { type: String },
      backgroundStyle: { type: String },
      fontStyle: { type: String },
      buttonColor: { type: String },
      backgroundColor: { type: String },
      color1: { type: String },
      color2: { type: String },
      bgImage: { type: String }
    },
    quickSelect: { type: Boolean, default: false },
    isOn: { type: Boolean, default: true },
    logoSwitch: { type: Boolean, default: false },
    businessHoursLabelList: [{ type: String }],
    availabilitySwitch: { type: Boolean, default: false }
  },

  // QR settings
  qr: {
    header: { type: String },
    personName: { type: String },
    qrCode: { type: String },
    colour: { type: String },
    image: { type: String },
    isOn: { type: Boolean, default: true },
    counter: { type: Number, default: 0 }
  },

  // Contact information
  contact: {
    header: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    services: { type: String },
    message: { type: String },
    phone: { type: String },
    date: { type: String },
    isOn: { type: Boolean, default: true }
  },

  // Social media platforms
  socialApp: [{
    platform: { type: String },
    userName: { type: String },
    label: { type: String },
    highlighted: { type: String },
    link: { type: String },
    isOn: { type: Boolean, default: true }
  }],

  // Custom links
  customLink: [{
    websiteUrl: { type: String },
    customLinkImage: { type: String },
    label: { type: String },
    isOn: { type: Boolean, default: true }
  }],

  // Products
  product: [{
    productName: { type: String },
    productPrice: { type: String },
    productDescription: { type: String },
    image: [{ type: String }],
    label: { type: String },
    link: { type: String },
    productButton: { type: Boolean, default: false }
  }],

  // Services
  service: [{
    serviceName: { type: String },
    serviceDescription: { type: String },
    image: [{ type: String }]
  }],

  // Business hours
  businessHours: {
    monday: dayScheduleSchema,
    tuesday: dayScheduleSchema,
    wednesday: dayScheduleSchema,
    thursday: dayScheduleSchema,
    friday: dayScheduleSchema,
    saturday: dayScheduleSchema,
    sunday: dayScheduleSchema,
    isOn: { type: Boolean, default: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile2', profileSchema);
