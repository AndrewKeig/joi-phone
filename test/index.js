var assert 	= require('assert');
var Joi 	= require('joi');

describe('e164 phone numbering', function() {

	Joi.phone = require('../');
	var schema 	= { phone: Joi.phone.e164() };

  	describe('phone number prefix', function() {

		describe('when validating phone number with + prefix', function() {
			it('should validate', function(done) {
				var input = { phone: '+1 234 567 8901' };
				var res = Joi.validate(input, schema);
				assert(!res.error);
				done();
			});
		});

		describe('when validating phone number without + prefix', function() {
			it('should not validate', function(done) {
				var input = { phone: '1 234 567 8901' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});

		describe('when validating phone number with other prefix', function() {
			it('should not validate', function(done) {
				var input = { phone: '-1 234 567 8901' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});
	});

	describe('phone number length', function() {
		describe('when validating phone number with a max of 15 numbers', function() {
			it('should validate', function(done) {	
				var input = { phone: '+123456789011011' };
				var res = Joi.validate(input, schema);
				assert(!res.error);
				done();
			});
		});

		describe('when validating phone number with too many numbers', function() {
			it('should not validate', function(done) {
				var input = { phone: '+1234567890110111' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});

		describe('when validating phone number with max of 15 numbers and separators', function() {
			it('should validate', function(done) {	
				var input = { phone: '+1 234 567 89012345' };
				var res = Joi.validate(input, schema);
				assert(!res.error);
				done();
			});
		});
	});

	describe('phone number contains alpha character', function() {
		describe('when validating phone number with alpha character', function() {
			it('should not validate', function(done) {	
				var input = { phone: '+1a3456789011011' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});
	});

	describe('phone number separators', function() {
		describe('when validating phone number with no separators', function() {
			it('should validate', function(done) {
				var input = { phone: '+12345678901' };
				var res = Joi.validate(input, schema);
				assert(!res.error);
				done();
			});
		});

		describe('when validating phone number with space separators', function() {
			it('should validate', function(done) {
				var input = { phone: '+1 234 567 8901' };
				var res = Joi.validate(input, schema);
				assert(!res.error);
				done();
			});
		});

		describe('when validating phone number with dash separators', function() {
			it('should not validate', function(done) {
				var input = { phone: '+1-234-567-8901' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});

		describe('when validating phone number with slash separators', function() {
			it('should not validate', function(done) {
				var input = { phone: '+1/234/567/8901' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});

		describe('when validating phone number with bracket separators', function() {
			it('should not validate', function(done) {
				var input = { phone: '+1 (234) 567 8901' };
				var res = Joi.validate(input, schema);
				assert(res.error);
				done();
			});
		});
	});
});