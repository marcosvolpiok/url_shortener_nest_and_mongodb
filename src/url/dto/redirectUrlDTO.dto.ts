import { IsNotEmpty } from 'class-validator';

export class RedirectUrlDTO {
  @IsNotEmpty()
  readonly shortUrl: string;
}