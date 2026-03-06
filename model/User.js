const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        require: true,
    },

    documentUrls: [
        {
            type: String
        }
    ]
});

const User = new mongoose.model("User", userSchema);
export default User;