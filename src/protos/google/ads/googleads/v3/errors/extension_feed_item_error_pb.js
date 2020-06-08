// source: google/ads/googleads/v3/errors/extension_feed_item_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.ExtensionFeedItemError', null, global);
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
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum';
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
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum}
 */
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum;
  return proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum}
 */
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.ExtensionFeedItemErrorEnum.ExtensionFeedItemError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  VALUE_OUT_OF_RANGE: 2,
  URL_LIST_TOO_LONG: 3,
  CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING: 4,
  CANNOT_SET_WITH_FINAL_URLS: 5,
  CANNOT_SET_WITHOUT_FINAL_URLS: 6,
  INVALID_PHONE_NUMBER: 7,
  PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY: 8,
  CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED: 9,
  PREMIUM_RATE_NUMBER_NOT_ALLOWED: 10,
  DISALLOWED_NUMBER_TYPE: 11,
  INVALID_DOMESTIC_PHONE_NUMBER_FORMAT: 12,
  VANITY_PHONE_NUMBER_NOT_ALLOWED: 13,
  INVALID_CALL_CONVERSION_ACTION: 14,
  CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING: 15,
  CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY: 16,
  CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED: 17,
  INVALID_APP_ID: 18,
  QUOTES_IN_REVIEW_EXTENSION_SNIPPET: 19,
  HYPHENS_IN_REVIEW_EXTENSION_SNIPPET: 20,
  REVIEW_EXTENSION_SOURCE_INELIGIBLE: 21,
  SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT: 22,
  INCONSISTENT_CURRENCY_CODES: 23,
  PRICE_EXTENSION_HAS_DUPLICATED_HEADERS: 24,
  PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION: 25,
  PRICE_EXTENSION_HAS_TOO_FEW_ITEMS: 26,
  PRICE_EXTENSION_HAS_TOO_MANY_ITEMS: 27,
  UNSUPPORTED_VALUE: 28,
  UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE: 29,
  INVALID_DEVICE_PREFERENCE: 30,
  INVALID_SCHEDULE_END: 31,
  DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE: 32,
  INVALID_SNIPPETS_HEADER: 33,
  CANNOT_OPERATE_ON_REMOVED_FEED_ITEM: 34,
  PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY: 35,
  CONFLICTING_CALL_CONVERSION_SETTINGS: 36,
  EXTENSION_TYPE_MISMATCH: 37,
  EXTENSION_SUBTYPE_REQUIRED: 38,
  EXTENSION_TYPE_UNSUPPORTED: 39,
  CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS: 40,
  CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES: 41,
  INVALID_PRICE_FORMAT: 42,
  PROMOTION_INVALID_TIME: 43,
  TOO_MANY_DECIMAL_PLACES_SPECIFIED: 44,
  CONCRETE_EXTENSION_TYPE_REQUIRED: 45,
  SCHEDULE_END_NOT_AFTER_START: 46
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
