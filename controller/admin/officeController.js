  const Office = require("../../model/officeModel");

  //create a new office
  exports.createOffice = async (req, res) => {
    const { officeName, officeDescription } = req.body;
    console.log(req.body);
    if (!officeName || !officeDescription) {
      return res.status(400).json({
        message: "Please fill all above fields officeName and officeDescription",
      });
    }
    await Office.create({
      officeName: officeName,
      officeDescription: officeDescription,
    });
    res.status(201).json({
      message: "New office created successfully",
    });
  };

  //get list of all offices
  exports.getOffices = async (req, res) => {
    const offices = await Office.find();
    if (offices.length == 0) {
      return res.status(400).json({
        message: "No any offices found",
        offices: [],
      });
    }
    res.status(200).json({
      message: "offices fetched success",
      offices: offices,
    });
  };

  //singleOffice information
  exports.singleOffice = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Please provide id in URL Parameter",
      });
    }
    const singleOffice = await Office.find({ _id: id });
    if (singleOffice.length == 0) {
      return res.status(400).json({
        message: "No Office with that id is found",
        Office: [],
      });
    }
    res.status(200).json({
      message: "Office found",
      Office: singleOffice,
    });
  };

  //deleteOffice

  exports.deleteOffice = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "Please provide id of office",
      });
    }
    const officeExists = await Office.findById(id);
    if (!officeExists) {
      return res.status(400).json({
        message: "office with that id is not found",
      });
    }
    await Office.findByIdAndDelete(id);
    res.status(200).json({
      message: "Office deleted successfully",
    });
  };

  //update Office
  exports.updateOffice = async (req, res) => {
    const { id } = req.params;
    const { officeName, officeDescription } = req.body;
    if (!officeName || !officeDescription) {
      return res.status(400).json({
        message:
          "Please fill all the above fields Office Name and Office Description",
      });
    }
    const singleOffice = await Office.find({ _id: id });
    if (singleOffice.length == 0) {
      return res.status(400).json({
        message: "No Office with that id is found",
        Office: [],
      });
    }
    const updatedData = await Office.findByIdAndUpdate(
      id,
      {
        officeName: officeName,
        officeDescription: officeDescription,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      message: "Office updated successfully",
      data: updatedData,
    });
  };
