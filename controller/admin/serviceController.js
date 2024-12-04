const Office = require("../../model/officeModel");
const Service = require("../../model/ServiceModel");

exports.createService = async (req, res) => {
  const { name, description, requiredDocuments } = req.body;
  const id = req.params.id;
  if (!name || !description || !requiredDocuments) {
    return res.status(400).json({
      message: "Please provide name,description and requiredDocuments",
    });
  }
  const singleOffice = await Office.find({ _id: id });
  if (singleOffice.length == 0) {
    return res.status(400).json({
      message: "No Office with that id is found",
      Office: [],
    });
  }
  const newService = await Service.create({
    serviceName: name,
    serviceDescription: description,
    requiredDocuments: requiredDocuments,
    office: id,
  });
  // Add the new service to the office's services array
  singleOffice[0].services.push(newService._id);
  await singleOffice[0].save();
  res.status(201).json({
    message: "Service added successfully",
    data: newService,
  });
};

// Get list of all services
exports.getServices = async (req, res) => {
  const services = await Service.find();
  if (services.length == 0) {
    return res.status(400).json({
      message: "No services found",
      services: [],
    });
  }
  res.status(200).json({
    message: "Services fetched successfully",
    services: services,
  });
};

// Get single service information
exports.singleService = async (req, res) => {
  const id = req.params.serviceId;
  console.log(id);
  if (!id) {
    return res.status(400).json({
      message: "Please provide serviceId in URL Parameter",
    });
  }
  const singleService = await Service.findById(id);
  if (!singleService) {
    return res.status(400).json({
      message: "No Service with that id is found",
      service: [],
    });
  }
  res.status(200).json({
    message: "Service found",
    service: singleService,
  });
};

// Delete service
exports.deleteService = async (req, res) => {
  const id = req.params.serviceId;
  if (!id) {
    return res.status(400).json({
      message: "Please provide id of service",
    });
  }
  const serviceExists = await Service.findById(id);
  if (!serviceExists) {
    return res.status(400).json({
      message: "service with that id is not found",
    });
  }
  await Service.findByIdAndDelete(id);
  res.status(200).json({
    message: "Service deleted successfully",
  });
};

// Update service
exports.updateService = async (req, res) => {
  const id = req.params.serviceId;
  const { serviceName, serviceDescription, requiredDocuments } = req.body;
  if (!serviceName || !serviceDescription || !requiredDocuments) {
    return res.status(400).json({
      message:
        "Please fill all the above fields: name, description, and requiredDocuments",
    });
  }
  const singleService = await Service.findById(id);
  if (!singleService) {
    return res.status(400).json({
      message: "No Service with that id is found",
      service: [],
    });
  }
  const updatedData = await Service.findByIdAndUpdate(
    id,
    {
      serviceName: serviceName,
      serviceDescription: serviceDescription,
      requiredDocuments: requiredDocuments,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    message: "Service updated successfully",
    data: updatedData,
  });
};
