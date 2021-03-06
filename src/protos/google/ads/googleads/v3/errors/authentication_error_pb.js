// source: google/ads/googleads/v3/errors/authentication_error.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.AuthenticationError', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum}
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum;
  return proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum}
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.AuthenticationErrorEnum.AuthenticationError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  AUTHENTICATION_ERROR: 2,
  CLIENT_CUSTOMER_ID_INVALID: 5,
  CUSTOMER_NOT_FOUND: 8,
  GOOGLE_ACCOUNT_DELETED: 9,
  GOOGLE_ACCOUNT_COOKIE_INVALID: 10,
  GOOGLE_ACCOUNT_AUTHENTICATION_FAILED: 25,
  GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH: 12,
  LOGIN_COOKIE_REQUIRED: 13,
  NOT_ADS_USER: 14,
  OAUTH_TOKEN_INVALID: 15,
  OAUTH_TOKEN_EXPIRED: 16,
  OAUTH_TOKEN_DISABLED: 17,
  OAUTH_TOKEN_REVOKED: 18,
  OAUTH_TOKEN_HEADER_INVALID: 19,
  LOGIN_COOKIE_INVALID: 20,
  USER_ID_INVALID: 22,
  TWO_STEP_VERIFICATION_NOT_ENROLLED: 23,
  ADVANCED_PROTECTION_NOT_ENROLLED: 24
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
