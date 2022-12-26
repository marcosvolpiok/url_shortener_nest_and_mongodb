import { Document } from "mongoose";

export interface Url extends Document {
    readonly longUrl: string;
    readonly shortUrl: string;
    readonly createdAt: Date;
}