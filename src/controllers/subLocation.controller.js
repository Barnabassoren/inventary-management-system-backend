import { SubLocation } from "../models/subLocation.model.js";

export const createSubLocation = async (req, res) => {
  try {
    const { location, sub_location } = req.body;

    // console.log("Received:", location, sub_location);

    if (!location || !sub_location) {
      return res.status(400).json({
        success: false,
        message: "Location and Sub-location are required",
      });
    }

    const newSubLocation = await SubLocation.create({
      location,
      subLocation: sub_location,
    });

    return res.status(201).json({
      success: true,
      message: "Sub-Location created successfully",
      data: newSubLocation,
    });
  } catch (error) {
    console.error("Error creating sub-location:", error); // ✅ helpful for debugging
    return res.status(500).json({
      success: false,
      message: "Failed to create sub-location",
    });
  }
};

export const getAllSubLocations = async (req, res) => {
  try {
    const alldata = await SubLocation.find();
    if (alldata.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No sub-locations found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Sub-Location retrived successfully",
      data: alldata,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrive sub-locations",
      error: error?.message,
    });
  }
};

export const updateSubLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { location, sub_location } = req.body;
    console.log(req.body);

    if (!location || !sub_location) {
      return res.status(400).json({
        success: false,
        message: "Location and Sub-location are required",
      });
    }

    const newData = await SubLocation.findByIdAndUpdate(
      id,
      { location, subLocation: sub_location },
      { new: true }
    );

    if (!newData) {
      return res.status(404).json({
        success: false,
        message: "Sub-location not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Sub-location updated successfully",
      data: newData,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update sub-location",
      error: error?.message,
    });
  }
};

export const deleteSubLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubLocation = await SubLocation.findByIdAndDelete(id);
    if (!deletedSubLocation) {
      return res.status(404).json({
        success: false,
        message: "Sub-location not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Sub-location deleted successfully",
      data: deletedSubLocation,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete sub-location",
      error: error.message,
    });
  }
};
