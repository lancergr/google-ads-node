// source: google/ads/googleads/v3/errors/query_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.QueryErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.QueryErrorEnum.QueryError', null, global);
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
proto.google.ads.googleads.v3.errors.QueryErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.QueryErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.QueryErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.QueryErrorEnum';
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
proto.google.ads.googleads.v3.errors.QueryErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.QueryErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.QueryErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.QueryErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.QueryErrorEnum}
 */
proto.google.ads.googleads.v3.errors.QueryErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.QueryErrorEnum;
  return proto.google.ads.googleads.v3.errors.QueryErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.QueryErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.QueryErrorEnum}
 */
proto.google.ads.googleads.v3.errors.QueryErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.QueryErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.QueryErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.QueryErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.QueryErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.QueryErrorEnum.QueryError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  QUERY_ERROR: 50,
  BAD_ENUM_CONSTANT: 18,
  BAD_ESCAPE_SEQUENCE: 7,
  BAD_FIELD_NAME: 12,
  BAD_LIMIT_VALUE: 15,
  BAD_NUMBER: 5,
  BAD_OPERATOR: 3,
  BAD_PARAMETER_NAME: 61,
  BAD_PARAMETER_VALUE: 62,
  BAD_RESOURCE_TYPE_IN_FROM_CLAUSE: 45,
  BAD_SYMBOL: 2,
  BAD_VALUE: 4,
  DATE_RANGE_TOO_WIDE: 36,
  DATE_RANGE_TOO_NARROW: 60,
  EXPECTED_AND: 30,
  EXPECTED_BY: 14,
  EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE: 37,
  EXPECTED_FILTERS_ON_DATE_RANGE: 55,
  EXPECTED_FROM: 44,
  EXPECTED_LIST: 41,
  EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE: 16,
  EXPECTED_SELECT: 13,
  EXPECTED_SINGLE_VALUE: 42,
  EXPECTED_VALUE_WITH_BETWEEN_OPERATOR: 29,
  INVALID_DATE_FORMAT: 38,
  INVALID_STRING_VALUE: 57,
  INVALID_VALUE_WITH_BETWEEN_OPERATOR: 26,
  INVALID_VALUE_WITH_DURING_OPERATOR: 22,
  INVALID_VALUE_WITH_LIKE_OPERATOR: 56,
  OPERATOR_FIELD_MISMATCH: 35,
  PROHIBITED_EMPTY_LIST_IN_CONDITION: 28,
  PROHIBITED_ENUM_CONSTANT: 54,
  PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE: 31,
  PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE: 40,
  PROHIBITED_FIELD_IN_SELECT_CLAUSE: 23,
  PROHIBITED_FIELD_IN_WHERE_CLAUSE: 24,
  PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE: 43,
  PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE: 48,
  PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE: 58,
  PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE: 49,
  PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE: 51,
  PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE: 53,
  LIMIT_VALUE_TOO_LOW: 25,
  PROHIBITED_NEWLINE_IN_STRING: 8,
  PROHIBITED_VALUE_COMBINATION_IN_LIST: 10,
  PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR: 21,
  STRING_NOT_TERMINATED: 6,
  TOO_MANY_SEGMENTS: 34,
  UNEXPECTED_END_OF_QUERY: 9,
  UNEXPECTED_FROM_CLAUSE: 47,
  UNRECOGNIZED_FIELD: 32,
  UNEXPECTED_INPUT: 11,
  REQUESTED_METRICS_FOR_MANAGER: 59
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
