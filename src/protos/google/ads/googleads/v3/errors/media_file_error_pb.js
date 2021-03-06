// source: google/ads/googleads/v3/errors/media_file_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.MediaFileErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.MediaFileError', null, global);
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
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.MediaFileErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.MediaFileErrorEnum';
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
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.MediaFileErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.MediaFileErrorEnum}
 */
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.MediaFileErrorEnum;
  return proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.MediaFileErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.MediaFileErrorEnum}
 */
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.MediaFileErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.MediaFileErrorEnum.MediaFileError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  CANNOT_CREATE_STANDARD_ICON: 2,
  CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES: 3,
  CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA: 4,
  DUPLICATE_MEDIA: 5,
  EMPTY_FIELD: 6,
  RESOURCE_REFERENCED_IN_MULTIPLE_OPS: 7,
  FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE: 8,
  INVALID_MEDIA_FILE_ID: 9,
  INVALID_MEDIA_SUB_TYPE: 10,
  INVALID_MEDIA_FILE_TYPE: 11,
  INVALID_MIME_TYPE: 12,
  INVALID_REFERENCE_ID: 13,
  INVALID_YOU_TUBE_ID: 14,
  MEDIA_FILE_FAILED_TRANSCODING: 15,
  MEDIA_NOT_TRANSCODED: 16,
  MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE: 17,
  NO_FIELDS_SPECIFIED: 18,
  NULL_REFERENCE_ID_AND_MEDIA_ID: 19,
  TOO_LONG: 20,
  UNSUPPORTED_TYPE: 21,
  YOU_TUBE_SERVICE_UNAVAILABLE: 22,
  YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION: 23,
  YOU_TUBE_VIDEO_NOT_FOUND: 24
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
