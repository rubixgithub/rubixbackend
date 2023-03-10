const jwt = require("jsonwebtoken");

export class JsonWebToken {
    #serverSecret;

    constructor(serverSecret) {
        this.serverSecret = serverSecret;
    }

    static decode(token) {
        return jwt.decode(token);
    }

    generate(payload, tokenLifeTime) {
        return jwt.sign(payload, this.serverSecret, {
            expiresIn: tokenLifeTime
        });
    }
}
