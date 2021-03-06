// source: google/ads/googleads/v3/errors/url_field_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.UrlFieldError', null, global);
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
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum';
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
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum}
 */
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum;
  return proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum}
 */
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.UrlFieldErrorEnum.UrlFieldError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  INVALID_TRACKING_URL_TEMPLATE: 2,
  INVALID_TAG_IN_TRACKING_URL_TEMPLATE: 3,
  MISSING_TRACKING_URL_TEMPLATE_TAG: 4,
  MISSING_PROTOCOL_IN_TRACKING_URL_TEMPLATE: 5,
  INVALID_PROTOCOL_IN_TRACKING_URL_TEMPLATE: 6,
  MALFORMED_TRACKING_URL_TEMPLATE: 7,
  MISSING_HOST_IN_TRACKING_URL_TEMPLATE: 8,
  INVALID_TLD_IN_TRACKING_URL_TEMPLATE: 9,
  REDUNDANT_NESTED_TRACKING_URL_TEMPLATE_TAG: 10,
  INVALID_FINAL_URL: 11,
  INVALID_TAG_IN_FINAL_URL: 12,
  REDUNDANT_NESTED_FINAL_URL_TAG: 13,
  MISSING_PROTOCOL_IN_FINAL_URL: 14,
  INVALID_PROTOCOL_IN_FINAL_URL: 15,
  MALFORMED_FINAL_URL: 16,
  MISSING_HOST_IN_FINAL_URL: 17,
  INVALID_TLD_IN_FINAL_URL: 18,
  INVALID_FINAL_MOBILE_URL: 19,
  INVALID_TAG_IN_FINAL_MOBILE_URL: 20,
  REDUNDANT_NESTED_FINAL_MOBILE_URL_TAG: 21,
  MISSING_PROTOCOL_IN_FINAL_MOBILE_URL: 22,
  INVALID_PROTOCOL_IN_FINAL_MOBILE_URL: 23,
  MALFORMED_FINAL_MOBILE_URL: 24,
  MISSING_HOST_IN_FINAL_MOBILE_URL: 25,
  INVALID_TLD_IN_FINAL_MOBILE_URL: 26,
  INVALID_FINAL_APP_URL: 27,
  INVALID_TAG_IN_FINAL_APP_URL: 28,
  REDUNDANT_NESTED_FINAL_APP_URL_TAG: 29,
  MULTIPLE_APP_URLS_FOR_OSTYPE: 30,
  INVALID_OSTYPE: 31,
  INVALID_PROTOCOL_FOR_APP_URL: 32,
  INVALID_PACKAGE_ID_FOR_APP_URL: 33,
  URL_CUSTOM_PARAMETERS_COUNT_EXCEEDS_LIMIT: 34,
  INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_KEY: 39,
  INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_VALUE: 40,
  INVALID_TAG_IN_URL_CUSTOM_PARAMETER_VALUE: 41,
  REDUNDANT_NESTED_URL_CUSTOM_PARAMETER_TAG: 42,
  MISSING_PROTOCOL: 43,
  INVALID_PROTOCOL: 52,
  INVALID_URL: 44,
  DESTINATION_URL_DEPRECATED: 45,
  INVALID_TAG_IN_URL: 46,
  MISSING_URL_TAG: 47,
  DUPLICATE_URL_ID: 48,
  INVALID_URL_ID: 49,
  FINAL_URL_SUFFIX_MALFORMED: 50,
  INVALID_TAG_IN_FINAL_URL_SUFFIX: 51,
  INVALID_TOP_LEVEL_DOMAIN: 53,
  MALFORMED_TOP_LEVEL_DOMAIN: 54,
  MALFORMED_URL: 55,
  MISSING_HOST: 56,
  NULL_CUSTOM_PARAMETER_VALUE: 57
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
