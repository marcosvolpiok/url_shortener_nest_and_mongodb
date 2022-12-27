import { IsNotEmpty, IsAlpha } from 'class-validator';
import { IsUrlShortAlreadyExist } from '../validations/is-url-short-already-exist'

export class CreateUrlDTO {
  @IsNotEmpty()
  readonly longUrl: string;

  
  @IsNotEmpty()
  @IsAlpha()
  @IsUrlShortAlreadyExist({
    message: 'Url short $value already exists. Choose another one.',
  })
  readonly shortUrl: string;


  readonly createdAt: Date;
}