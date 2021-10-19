"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_http_bearer_1 = require("passport-http-bearer");
class Strategy extends (0, passport_1.PassportStrategy)(passport_http_bearer_1.BearerStrategy, 'okta') {
    constructor() {
        super();
    }
    validate(payload) {
        console.log(payload);
        return payload;
    }
}
exports.Strategy = Strategy;
//# sourceMappingURL=strategy.js.map