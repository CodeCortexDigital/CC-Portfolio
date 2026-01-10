const Service = require("../models/Service");

// CREATE service
const createService = async (req, res) => {
  try {
    const serviceData = { ...req.body };
    if (req.file) {
      serviceData.image = `/uploads/${req.file.filename}`;
    }
    // Handle features - FormData sends arrays as multiple fields with same name
    if (req.body.features) {
      if (Array.isArray(req.body.features)) {
        serviceData.features = req.body.features;
      } else if (typeof req.body.features === 'string') {
        serviceData.features = req.body.features.split(',').map(f => f.trim()).filter(f => f);
      }
    }
    const service = await Service.create(serviceData);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET all services
const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single service
const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE service
const updateService = async (req, res) => {
  try {
    const serviceData = { ...req.body };
    if (req.file) {
      serviceData.image = `/uploads/${req.file.filename}`;
    }
    // Handle features - FormData sends arrays as multiple fields with same name
    if (req.body.features) {
      if (Array.isArray(req.body.features)) {
        serviceData.features = req.body.features;
      } else if (typeof req.body.features === 'string') {
        serviceData.features = req.body.features.split(',').map(f => f.trim()).filter(f => f);
      }
    }
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      serviceData,
      { new: true, runValidators: true }
    );
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE service
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
};
