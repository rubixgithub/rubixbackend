const jwt = require("jsonwebtoken");
const config = require("../../config/default.json");
const { throwError } = require("../../util/helper");
const {TOKEN_NOT_FOUND_ERROR} = require("../../constants/errorMessages")

const  generateJwtToken = async(profile) => {
	
	const { username,
		email,
		language,
		profile_picture,
		is_admin,
		is_active } = profile;
	const secretkey = config.jwtPrivateKey ? config.jwtPrivateKey : throwError(TOKEN_NOT_FOUND_ERROR);
	const user = {
		username,
		email,
		language,
		profile_picture,
		is_admin,
		is_active
	};
	return  jwt.sign({ user }, secretkey, { expiresIn: "1y" });
}

module.exports = {
	generateJwtToken
};