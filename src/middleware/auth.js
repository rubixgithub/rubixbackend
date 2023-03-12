const jwt = require("jsonwebtoken");
import config from '../config'
import { getUserService } from "../services/user";
import { postUserLogService } from "../services/userlog";

module.exports = async (req, res, next) => {
    const token = req.header("authorization");
    const addLogs = true;
    let ipAddress =
        req.header("x-forwarded-for") || req.connection.remoteAddress;
    if (!token)
        return res.status(401).send("Access denied. No token provided.");
    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        const user = await getUserService.byEmail(decoded.user.email);
        if (!user) {
            res.status(401).send("Invalid token.");
        }
        if (addLogs) {
            var logArr = {
                user_id: user.dataValues.id,
                log_action_id: 0,
                message: "",
                ip_address: ipAddress,
                request_uri: req.originalUrl,
                sessionId: req.header("authorization")
            };
            console.log(logArr);
            // req.logData = await postUserLogService.create(logArr)
            decoded.user.id = user.dataValues.id;
            req.decoded = decoded;
            return next();
        }
    } catch (ex) {
        res.status(401).send("Invalid token.");
    }
};
