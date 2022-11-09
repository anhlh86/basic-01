const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    // Id: Exist in Mongo database.
    Email: String,
    FullName: String,
    MobilePhone: String,
    Paid: Boolean,
    WalletAddress: String,
    RegistrationDate: Date
});
module.exports = mongoose.model('Student', studentSchema);