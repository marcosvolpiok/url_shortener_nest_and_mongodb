import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { UrlSeed } from '../../url/seeds/url.seed';
import { UrlService } from '../../url/url.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlSchema } from '../../url/schemas/url.schema';

@Module({
    imports: [CommandModule, MongooseModule.forFeature([{name: 'Url', schema: UrlSchema}])],
    providers: [UrlSeed, UrlService],
    exports: [UrlSeed, UrlService],
})
export class SeedsModule {}