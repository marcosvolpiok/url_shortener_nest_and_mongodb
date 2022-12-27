import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from "@nestjs/common";
import { UrlService } from "../url.service";

@Injectable()
@ValidatorConstraint({ name: 'IsUrlShortAlreadyExist', async: true })
export class IsUrlShortAlreadyExistConstraint implements ValidatorConstraintInterface {
  constructor(
    private urlService: UrlService
  ) { }

  async validate(urlShort: String) {
    return false;

    console.log('validate')
    if (await this.urlService.getUrlByUrlShort(urlShort)) {
      console.log('found')
      return false;
    } else {
      console.log('NOT found')
      return true;
    }
  }
}

export function IsUrlShortAlreadyExist(validationOptions?: ValidationOptions) {
  console.log('validate 2222')
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUrlShortAlreadyExistConstraint,
    });
  };
}