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
    if (await this.urlService.getUrlByUrlShort(urlShort)) {
      return false;
    } else {
      return true;
    }
  }
}

export function IsUrlShortAlreadyExist(validationOptions?: ValidationOptions) {
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