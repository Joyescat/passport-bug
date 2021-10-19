import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy } from 'passport-http-bearer';

export class Strategy extends PassportStrategy(BearerStrategy, 'okta') {
  constructor() {
    super();
  }

  validate(payload: string): any {
    console.log(payload);
    return payload;
  }
}
