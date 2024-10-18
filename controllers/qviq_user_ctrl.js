const QviqUserModel = require("../models/qviq_user_model");

// Get all items
exports.getQviqUser = async (req, res, next) => {
  try {
    const users = await QviqUserModel.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.createQviqUser = async (req, res, next) => {
  try {
    const data = req.body;
    const createdUser = await QviqUserModel.create(data);
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

// Get a single item by ID
exports.getQviqUserById = async (req, res, next) => {
  try {
    const user = await QviqUserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update an item
exports.updateQviqUser = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const updatedUser = await QviqUserModel.findByIdAndUpdate(
      req.params.id,
      { name, description, price },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete an item
exports.deleteQviqUser = async (req, res, next) => {
  try {
    await QviqUserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
};
