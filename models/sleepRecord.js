import mongoose from 'mongoose';
const Sleeprecord = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Hours: {
        type: Number,
        required: [true, "Please enter the hours slept"],
    },
    time:{
        type: Date,  
    },
},{timestamps: true});
const Record = mongoose.model("Sleeprecord", Sleeprecord);
export default Record;