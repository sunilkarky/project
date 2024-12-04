const Office = require("../../model/officeModel");

exports.getOffices = async (req, res) => {
  const offices = await Office.find().select("officeName officeDescription");
  if (offices.length == 0) {
    return res.status(400).json({
      message: "No offices found",
    });
  }
  res.status(200).json({
    message: "Office fetched success",
    offices: offices,
  });
};
