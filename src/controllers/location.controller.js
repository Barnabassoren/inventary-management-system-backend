import { Location } from "../models/location.model.js";



export const createLocation = async (req, res) => {
    try {
        const { locationName } = req.body;
        const newLocation = await Location.create({ locationName });
        res.status(201).json({
        success: true,
        message: "Location created successfully",
        data: newLocation,
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "Failed to create location",
        error: error.message,
        });
    }
}

export const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json({
            success: true,
            message: "Locations retrieved successfully",
            data: locations,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve locations",
            error: error.message,
        });
    }
}

export const updateLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const { locationName } = req.body;
        const updatedLocation = await Location.findByIdAndUpdate(
            id,
            { locationName },
            { new: true }
        );
        if (!updatedLocation) {
            return res.status(404).json({
                success: false,
                message: "Location not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Location updated successfully",
            data: updatedLocation,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update location",
            error: error.message,
        });
    }
}

export const deleteLocation = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLocation = await Location.findByIdAndDelete(id);
        if (!deletedLocation) {
            return res.status(404).json({
                success: false,
                message: "Location not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Location deleted successfully",
            data: deletedLocation,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete location",
            error: error.message,
        });
    }
}