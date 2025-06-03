import mongoose, {Schema} from "mongoose";
const locationSchema = new Schema({
    locationName : {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});


export const Location = mongoose.model("Location", locationSchema);