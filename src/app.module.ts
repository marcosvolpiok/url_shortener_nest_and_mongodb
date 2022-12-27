import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import { UrlController } from './url/url.controller';
import { UrlModule } from './url/url.module'; 
import { SeedsModule } from './seeds/module/seeds.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`, {
       useNewUrlParser: true
    }),
    UrlModule,
    SeedsModule
  ],
  controllers: [AppController, UrlController],
  providers: [AppService],
})
export class AppModule {}
