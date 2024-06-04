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
      default: 'https://res.cloudinary.com/dc7ycwd1u/image/upload/v1717428275/Anadir_un_titulo_2_zruph6.png'
    },
    role: {
      type: String,
      default: "user"
    }
  },
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User

