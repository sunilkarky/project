const Office = require("../../model/officeModel");

exports.getServices = async (req, res) => {
  const id = req.params.id; //officeId
  if (!id) {
    return res.status(400).json({
      message: "Please provide office id in URL parameter",
    });
  }
  const officeExisted = await Office.findById(id);
  console.log(officeExisted);
  if (!officeExisted) {
    return res.status(400).json({
      message: "Office with that id doesn't exist",
    });
  }
  
};
