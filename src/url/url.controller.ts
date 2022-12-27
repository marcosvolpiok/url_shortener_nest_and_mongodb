
import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseGuards } from '@nestjs/common';
import { UrlService } from "./url.service";
import { CreateUrlDTO } from "./dto/createUrl.dto";
import { ResponseService } from '../response/response.service';

@Controller('url')
export class UrlController {
    constructor(
        private urlService: UrlService,
        private responseService: ResponseService
    ) { }

    @Post('/')
    async createUrl(@Res() res, @Body() createUrlDTO: CreateUrlDTO) {
        let response;

        try {
            const url = await this.urlService.createUrl(createUrlDTO);
            
            response = res.status(HttpStatus.CREATED).json(
                this.responseService.getResponse(
                    {url, message: 'URL Successfully Created'}
                    , 'OK'
                )
            )
        } catch (error) {
            response = res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
              this.responseService.getResponse(error.message, 'ERROR')
            );
        }
        return response;
    }

    @Get('/')
    async getUrls(@Res() res) {
        
        let response;

        try {
        const urls = await this.urlService.getUrl();

        response = res.status(HttpStatus.OK).json(
            this.responseService.getResponse(
                urls,
                'OK')
        )
        } catch (error) {
            response = res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(
            this.responseService.getResponse(error.message, 'ERROR')
            );
        }

        return response;
    }
}