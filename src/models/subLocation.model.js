import mongoose,{Schema} from "mongoose";


const subLocationSchema = new Schema({
    location : {
        type: String,
        required : true,
        
    },
    subLocation : {
        type : String,
        required : true,
    }
},{timestamps: true})


export const SubLocation  = mongoose.model("SubLocation", subLocationSchema)