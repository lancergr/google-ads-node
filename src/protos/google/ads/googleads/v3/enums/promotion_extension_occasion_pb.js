// source: google/ads/googleads/v3/enums/promotion_extension_occasion.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.PromotionExtensionOccasion', null, global);
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
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.displayName = 'proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum';
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
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum}
 */
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum;
  return proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum}
 */
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.enums.PromotionExtensionOccasionEnum.PromotionExtensionOccasion = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  NEW_YEARS: 2,
  CHINESE_NEW_YEAR: 3,
  VALENTINES_DAY: 4,
  EASTER: 5,
  MOTHERS_DAY: 6,
  FATHERS_DAY: 7,
  LABOR_DAY: 8,
  BACK_TO_SCHOOL: 9,
  HALLOWEEN: 10,
  BLACK_FRIDAY: 11,
  CYBER_MONDAY: 12,
  CHRISTMAS: 13,
  BOXING_DAY: 14,
  INDEPENDENCE_DAY: 15,
  NATIONAL_DAY: 16,
  END_OF_SEASON: 17,
  WINTER_SALE: 18,
  SUMMER_SALE: 19,
  FALL_SALE: 20,
  SPRING_SALE: 21,
  RAMADAN: 22,
  EID_AL_FITR: 23,
  EID_AL_ADHA: 24,
  SINGLES_DAY: 25,
  WOMENS_DAY: 26,
  HOLI: 27,
  PARENTS_DAY: 28,
  ST_NICHOLAS_DAY: 29,
  CARNIVAL: 30,
  EPIPHANY: 31,
  ROSH_HASHANAH: 32,
  PASSOVER: 33,
  HANUKKAH: 34,
  DIWALI: 35,
  NAVRATRI: 36,
  SONGKRAN: 37,
  YEAR_END_GIFT: 38
};

goog.object.extend(exports, proto.google.ads.googleads.v3.enums);
