
# joi-phone

A phone validator for Joi.

`joi-phone` validates that a value is a valid international phone number complying to `E.164` numbering format

[![Build Status](https://travis-ci.org/andrewkeig/joi-phone.svg?branch=master)](https://travis-ci.org/andrewkeig/joi-phone)

## Introduction

An international E.164 number is designed to include all of the necessary information to 
successfully route a call to an individual subscriber on a nation's public telephone network. 
Here's how the E.164 numbering plan works:

- A telephone number can have a maximum of 15 digits
- The first part of the telephone number is the country code (one to three digits)
- The second part is the national destination code (NDC)
- The last part is the subscriber number (SN)
- The NDC and SN together are collectively called the national (significant) number

```
[+][country code][subscriber number including area code or national (significant) number]
```

## Use

```
var Joi = require('joi');
Joi.phone = require('joi-phone');

var schema = {
  phone: Joi.phone.e164()
}

```

### Installation

```
npm install joi-phone --save
```

### Tests


- `make test` runs tests


## License

[MIT](https://github.com/andrewkeig/joi-phone/blob/master/LICENSE)