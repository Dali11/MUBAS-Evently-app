import { Document } from "mongodb";
import mongoose, { model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: String;
  title: string;
  description?: string;
  location: string;
  createdAt: Date; // Changed property name from 'createdArt' to follow naming conventions
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: String, name: String }; // Reference to Category model
  organizer: { _id: String, firstName: String, lastName: String }; // Reference to User model
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdArt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
