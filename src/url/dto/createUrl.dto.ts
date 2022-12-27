import { IsNotEmpty } from 'class-validator';
import { IsUrlShortAlreadyExist } from '../validations/is-url-short-already-exist'

export class CreateUrlDTO {
  @IsNotEmpty()
  readonly longUrl: string;

  @IsNotEmpty()
  @IsUrlShortAlreadyExist({
    message: 'Url short $value already exists. Choose another one.',
  })
  readonly shortUrl: string;


  readonly createdAt: Date;
}