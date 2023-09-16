import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    industryname: { type: String, required: true }
}, {
    // add createdAt and updatedAt timestamps
    timestamps: true
});

export default mongoose.models.User || mongoose.model('User', schema)