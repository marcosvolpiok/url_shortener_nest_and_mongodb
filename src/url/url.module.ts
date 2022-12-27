import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from './schemas/url.schema';
import { ResponseService } from '../response/response.service';
import { IsUrlShortAlreadyExistConstraint } from './validations/is-url-short-already-exist'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Url', schema: UrlSchema}])],
  providers: [UrlService, ResponseService, IsUrlShortAlreadyExistConstraint],
  controllers: [UrlController],
  exports: [UrlService, ResponseService]
})
export class UrlModule {}
