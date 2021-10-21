import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    ContactName: String,
    ContactNumber: String,
    emailAddress: String
}, {
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);

export default Model;