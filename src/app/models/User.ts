import mongoose, { Schema, model, Types, Document } from "mongoose";

// Define the IUser interface
export interface IUser extends Document {
  _id?: Types.ObjectId;
  createdAt: Date;

  username: string;
  email: string;
  password: string;

  messagesEmail: string;
  messagePrice: number;

  isActive: boolean;
  isAdmin: boolean;
  isVerified: boolean;
  isBlocked: boolean;

  balance: number;

  smsConfig?: {
    isActive: boolean;
    phone: string;
  };

  donationConfig?: {
    isActive: boolean;
    cause: string;
  };
}

// Define the schema for the User model
const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    messagesEmail: { type: String },
    messagePrice: { type: Number, default: 0 },

    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

    balance: { type: Number, default: 0 },

    smsConfig: {
      type: {
        isActive: { type: Boolean, default: false },
        phone: { type: String },
      },
      default: {},
    },

    donationConfig: {
      type: {
        isActive: { type: Boolean, default: false },
        cause: { type: String },
      },
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || model<IUser>("User", userSchema);

export default User;
