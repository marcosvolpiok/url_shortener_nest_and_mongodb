import { Schema } from "mongoose";

export const UrlSchema = new Schema({
  longUrl: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now }
});