const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [5, 'Username needs at least 5 characters']
    },
    postalCode: {
      type: String,
      require: [true, 'Postal Code is required']
    },
    country: {
      type: String,
      require: [true, 'Country is required']
    },
    profilePic: {
      type: String,
      default: 'https://res.cloudinary.com/dtetsfefb/image/upload/v1716733834/logo_default_gvqpb4.png'
    }
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User

