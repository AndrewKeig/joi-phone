
// epp : function phoneEpp() {
//   return Joi.string().regex(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/);
// }	

// Validate international phone numbers in EPP format

// This regular expression follows the international phone number notation 
// specified by the Extensible Provisioning Protocol (EPP). EPP is a relatively recent 
// protocol (finalized in 2004), designed for communication between domain name registries and registrars. 
// It is used by a growing number of domain name registries, including .com, .info, .net, .org, and .us. 
// The significance of this is that EPP-style international phone numbers are increasingly used and recognized, 
// and therefore provide a good alternative format for storing (and validating) international phone numbers.

// EPP-style phone numbers use the format +CCC.NNNNNNNNNNxEEEE, where C is the 1–3 digit country code, 
// N is up to 14 digits, and E is the (optional) extension. The leading plus sign and the dot following 
// the country code are required. The literal “x” character is required only if an extension is provided.
