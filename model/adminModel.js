// const mongoose = require("mongoose");
// const schema = mongoose.Schema;

// //admin schema

// const adminSchema = new schema(
//   {
//     adminName: {
//       type: String,
//       required: [true, "Name is required"],
//     },
//     adminEmail: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//     },
//     adminPassword: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: 8,
//       select: false, 
//     },
//     adminPhoneNumber: {
//       type: Number,
//       required: [true, "Phone number is required"],
//     },
//     // role: {
//     //   type: String,
//     //   enum: ["superAdmin", "admin"],
//     //   default: "admin",
//     // },
//     otp: {
//       type: Number,
//       select: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // const admin = mongoose.models.admin || mongoose.model("admin", adminSchema); //FIRST COndition check if the admin model already exist copilot
// const Admin = mongoose.model("admin", adminSchema); //FIRST COndition check if the admin model already exist copilot
// module.exports = admin;