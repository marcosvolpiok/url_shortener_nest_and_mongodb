import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UrlService } from '../url.service';


@Injectable()
export class UrlSeed {
  constructor(
      private readonly urlService: UrlService,
  ) { }

  @Command({ command: 'create:url', describe: 'create a url' })
  async create() {
      const url = await this.urlService.createUrl({
        longUrl: "https://google.com",
        shortUrl: "abc",
        createdAt: new Date()
      });
  }
}
