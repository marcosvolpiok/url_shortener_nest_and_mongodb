import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from './schemas/url.schema';
import { ResponseService } from '../response/response.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Url', schema: UrlSchema}])],
  providers: [UrlService, ResponseService],
  controllers: [UrlController]
})
export class UrlModule {}
