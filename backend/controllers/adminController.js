import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import fs from "fs";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";

const addDoctor = async (req, res) => {
  let imagePath = null;

  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    const imageFile = req.file;

    console.log("Received data:", {
      ...req.body,
      password: "[HIDDEN]",
      imageFile: imageFile ? imageFile.path : "Missing",
    });

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");
    if (!speciality) missingFields.push("speciality");
    if (!degree) missingFields.push("degree");
    if (!experience) missingFields.push("experience");
    if (!about) missingFields.push("about");
    if (!fees) missingFields.push("fees");
    if (!address) missingFields.push("address");
    if (!imageFile) missingFields.push("image");

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing Required Fields",
        missingFields,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    imagePath = imageFile.path;

    let imageUrl = "";
    try {
      const imageUpload = await cloudinary.uploader.upload(imagePath, {
        resource_type: "image",
        folder: "doctors",
      });
      imageUrl = imageUpload.secure_url;
      console.log("Image uploaded to Cloudinary:", imageUrl);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(400).json({
        success: false,
        message: "Error uploading image",
      });
    }

    let parsedAddress;
    try {
      parsedAddress =
        typeof address === "string" ? JSON.parse(address) : address;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid address format. Must be valid JSON",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const parsedFees = Number(fees);
    if (isNaN(parsedFees)) {
      return res.status(400).json({
        success: false,
        message: "Fees must be a valid number",
      });
    }

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees: parsedFees,
      address: parsedAddress,
      date: Date.now(),
    };

    console.log("Attempting to save doctor data:", doctorData);

    const newDoctor = new doctorModel(doctorData);
    const savedDoctor = await newDoctor.save();

    console.log("Doctor saved successfully:", savedDoctor);

    if (imagePath && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    res.status(201).json({
      success: true,
      message: "Doctor Added Successfully",
      doctor: savedDoctor,
    });
  } catch (error) {
    if (imagePath && fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    console.error("Error in addDoctor:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//API for Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credintials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get all doctors list for admin Panel
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get all appointments list
const appointmentsAdmin = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);

    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    // releasing doctor slot
    const { docId, slotDate, slotTime } = appointmentData;

    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});

    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addDoctor,
  loginAdmin,
  allDoctors,
  appointmentsAdmin,
  appointmentCancel,
  adminDashboard,
};
