import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
    server: {
        host: process.env.HOST || "localhost",
        port: process.env.PORT || 5010
    },
    db: {
        name: process.env.DATABASE_NAME || "rubix",
        username: process.env.DATABASE_USERNAME || "postgres",
        password: process.env.DATABASE_PASSWORD || "postgres",
        dialect: process.env.DATABASE_DIALECT || "postgres",
        host: process.env.DB_HOST || "localhost"
    },
    jwtSecret: process.env.JWT_SECRET || "secret",
    email: {
        emailProtocol: "smtp",
        emailPort: "587",
        emailHost: "smtp.ionos.de",
        emailUser: "awakeshkumarsingh@gmail.com",
        emailPass: "sonisingh123",
        emailCrypto: "tls",
        emailCharset: "utf-8",
        emailFrom: "test1234@gmail.com",
        encKey: "9Q7CM34P378078969Q7CMdsfdmfkjdfkdf34P37807896",
        frontSiteBaseUrl: "http://localhost:3001/"
    }
};
