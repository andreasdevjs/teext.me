import mongoose, { Schema, model, Types, Document } from "mongoose";

interface IMessage extends Document {
  content: string;
  recipient: Types.ObjectId;
  paymentStatus: "pending" | "paid";
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    content: { type: String, required: true },
    recipient: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message || model<IMessage>("Message", messageSchema);
export default Message;
