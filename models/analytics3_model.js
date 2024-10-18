const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  uniqueView: {
    header: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    ip: { type: String, required: true },
    country: { type: String, required: true },
    countryCode: { type: String },
    state: { type: String },
    city: { type: String },
    browser: { type: String },
    platform: { type: String },
    device: { type: String },
    isOn: { type: Boolean, default: true }
  },
  dailyAnalytics: {
    header: { type: String, required: true },
    date: { type: String, required: true },
    profiledownloads: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    browserStats: {
      chrome: { type: Number, default: 0 },
      safari: { type: Number, default: 0 },
      edge: { type: Number, default: 0 },
      otherBrowser: { type: Number, default: 0 }
    },
    deviceStats: {
      mobile: { type: Number, default: 0 },
      desktop: { type: Number, default: 0 },
      tablet: { type: Number, default: 0 }
    },
    osStats: {
      macOS: { type: Number, default: 0 },
      windows: { type: Number, default: 0 },
      otherOS: { type: Number, default: 0 }
    },
    connectCount: { type: Number, default: 0 },
    isOn: { type: Boolean, default: true }
  }
});

module.exports = mongoose.model('Analytics3', AnalyticsSchema);
