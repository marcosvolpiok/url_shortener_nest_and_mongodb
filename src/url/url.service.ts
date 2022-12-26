import { Injectable } from "@nestjs/common";
import { Model, isValidObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Url } from "./interfaces/url.interface";
import { CreateUrlDTO } from "./dto/createUrl.dto";

@Injectable()
export class UrlService {

    constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

    async getUrl(): Promise<Url[]> {
        const urlFields = {
            longUrl: 1,
            shortUrl: 1,
        }
        const url = await this.urlModel.find({}, urlFields);

        return url;
    }
    
    async getUrlById(id: String): Promise<Url> {
        if(isValidObjectId(id) && await this.urlModel.findById(id)) {
            return await this.urlModel.findById(id);
        }

        return null;
    }
    
    async createUrl(createUrlDTO: CreateUrlDTO): Promise<Url> {
        const newUrl = new this.urlModel(createUrlDTO);

        return newUrl.save();
    }
}