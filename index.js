
var Joi = require('joi');

module.exports = {
	e164 : function () {
	  return Joi.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/);
	}
}