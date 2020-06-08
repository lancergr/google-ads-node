// source: google/ads/googleads/v3/errors/criterion_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.CriterionErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.CriterionErrorEnum.CriterionError', null, global);
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
proto.google.ads.googleads.v3.errors.CriterionErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.CriterionErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.CriterionErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.CriterionErrorEnum';
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
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.CriterionErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.CriterionErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.CriterionErrorEnum}
 */
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.CriterionErrorEnum;
  return proto.google.ads.googleads.v3.errors.CriterionErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.CriterionErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.CriterionErrorEnum}
 */
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.CriterionErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.CriterionErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.CriterionErrorEnum.CriterionError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  CONCRETE_TYPE_REQUIRED: 2,
  INVALID_EXCLUDED_CATEGORY: 3,
  INVALID_KEYWORD_TEXT: 4,
  KEYWORD_TEXT_TOO_LONG: 5,
  KEYWORD_HAS_TOO_MANY_WORDS: 6,
  KEYWORD_HAS_INVALID_CHARS: 7,
  INVALID_PLACEMENT_URL: 8,
  INVALID_USER_LIST: 9,
  INVALID_USER_INTEREST: 10,
  INVALID_FORMAT_FOR_PLACEMENT_URL: 11,
  PLACEMENT_URL_IS_TOO_LONG: 12,
  PLACEMENT_URL_HAS_ILLEGAL_CHAR: 13,
  PLACEMENT_URL_HAS_MULTIPLE_SITES_IN_LINE: 14,
  PLACEMENT_IS_NOT_AVAILABLE_FOR_TARGETING_OR_EXCLUSION: 15,
  INVALID_TOPIC_PATH: 16,
  INVALID_YOUTUBE_CHANNEL_ID: 17,
  INVALID_YOUTUBE_VIDEO_ID: 18,
  YOUTUBE_VERTICAL_CHANNEL_DEPRECATED: 19,
  YOUTUBE_DEMOGRAPHIC_CHANNEL_DEPRECATED: 20,
  YOUTUBE_URL_UNSUPPORTED: 21,
  CANNOT_EXCLUDE_CRITERIA_TYPE: 22,
  CANNOT_ADD_CRITERIA_TYPE: 23,
  INVALID_PRODUCT_FILTER: 24,
  PRODUCT_FILTER_TOO_LONG: 25,
  CANNOT_EXCLUDE_SIMILAR_USER_LIST: 26,
  CANNOT_ADD_CLOSED_USER_LIST: 27,
  CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_ONLY_CAMPAIGNS: 28,
  CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SEARCH_CAMPAIGNS: 29,
  CANNOT_ADD_DISPLAY_ONLY_LISTS_TO_SHOPPING_CAMPAIGNS: 30,
  CANNOT_ADD_USER_INTERESTS_TO_SEARCH_CAMPAIGNS: 31,
  CANNOT_SET_BIDS_ON_CRITERION_TYPE_IN_SEARCH_CAMPAIGNS: 32,
  CANNOT_ADD_URLS_TO_CRITERION_TYPE_FOR_CAMPAIGN_TYPE: 33,
  INVALID_CUSTOM_AFFINITY: 96,
  INVALID_CUSTOM_INTENT: 97,
  INVALID_IP_ADDRESS: 34,
  INVALID_IP_FORMAT: 35,
  INVALID_MOBILE_APP: 36,
  INVALID_MOBILE_APP_CATEGORY: 37,
  INVALID_CRITERION_ID: 38,
  CANNOT_TARGET_CRITERION: 39,
  CANNOT_TARGET_OBSOLETE_CRITERION: 40,
  CRITERION_ID_AND_TYPE_MISMATCH: 41,
  INVALID_PROXIMITY_RADIUS: 42,
  INVALID_PROXIMITY_RADIUS_UNITS: 43,
  INVALID_STREETADDRESS_LENGTH: 44,
  INVALID_CITYNAME_LENGTH: 45,
  INVALID_REGIONCODE_LENGTH: 46,
  INVALID_REGIONNAME_LENGTH: 47,
  INVALID_POSTALCODE_LENGTH: 48,
  INVALID_COUNTRY_CODE: 49,
  INVALID_LATITUDE: 50,
  INVALID_LONGITUDE: 51,
  PROXIMITY_GEOPOINT_AND_ADDRESS_BOTH_CANNOT_BE_NULL: 52,
  INVALID_PROXIMITY_ADDRESS: 53,
  INVALID_USER_DOMAIN_NAME: 54,
  CRITERION_PARAMETER_TOO_LONG: 55,
  AD_SCHEDULE_TIME_INTERVALS_OVERLAP: 56,
  AD_SCHEDULE_INTERVAL_CANNOT_SPAN_MULTIPLE_DAYS: 57,
  AD_SCHEDULE_INVALID_TIME_INTERVAL: 58,
  AD_SCHEDULE_EXCEEDED_INTERVALS_PER_DAY_LIMIT: 59,
  AD_SCHEDULE_CRITERION_ID_MISMATCHING_FIELDS: 60,
  CANNOT_BID_MODIFY_CRITERION_TYPE: 61,
  CANNOT_BID_MODIFY_CRITERION_CAMPAIGN_OPTED_OUT: 62,
  CANNOT_BID_MODIFY_NEGATIVE_CRITERION: 63,
  BID_MODIFIER_ALREADY_EXISTS: 64,
  FEED_ID_NOT_ALLOWED: 65,
  ACCOUNT_INELIGIBLE_FOR_CRITERIA_TYPE: 66,
  CRITERIA_TYPE_INVALID_FOR_BIDDING_STRATEGY: 67,
  CANNOT_EXCLUDE_CRITERION: 68,
  CANNOT_REMOVE_CRITERION: 69,
  PRODUCT_SCOPE_TOO_LONG: 70,
  PRODUCT_SCOPE_TOO_MANY_DIMENSIONS: 71,
  PRODUCT_PARTITION_TOO_LONG: 72,
  PRODUCT_PARTITION_TOO_MANY_DIMENSIONS: 73,
  INVALID_PRODUCT_DIMENSION: 74,
  INVALID_PRODUCT_DIMENSION_TYPE: 75,
  INVALID_PRODUCT_BIDDING_CATEGORY: 76,
  MISSING_SHOPPING_SETTING: 77,
  INVALID_MATCHING_FUNCTION: 78,
  LOCATION_FILTER_NOT_ALLOWED: 79,
  INVALID_FEED_FOR_LOCATION_FILTER: 98,
  LOCATION_FILTER_INVALID: 80,
  CANNOT_ATTACH_CRITERIA_AT_CAMPAIGN_AND_ADGROUP: 81,
  HOTEL_LENGTH_OF_STAY_OVERLAPS_WITH_EXISTING_CRITERION: 82,
  HOTEL_ADVANCE_BOOKING_WINDOW_OVERLAPS_WITH_EXISTING_CRITERION: 83,
  FIELD_INCOMPATIBLE_WITH_NEGATIVE_TARGETING: 84,
  INVALID_WEBPAGE_CONDITION: 85,
  INVALID_WEBPAGE_CONDITION_URL: 86,
  WEBPAGE_CONDITION_URL_CANNOT_BE_EMPTY: 87,
  WEBPAGE_CONDITION_URL_UNSUPPORTED_PROTOCOL: 88,
  WEBPAGE_CONDITION_URL_CANNOT_BE_IP_ADDRESS: 89,
  WEBPAGE_CONDITION_URL_DOMAIN_NOT_CONSISTENT_WITH_CAMPAIGN_SETTING: 90,
  WEBPAGE_CONDITION_URL_CANNOT_BE_PUBLIC_SUFFIX: 91,
  WEBPAGE_CONDITION_URL_INVALID_PUBLIC_SUFFIX: 92,
  WEBPAGE_CONDITION_URL_VALUE_TRACK_VALUE_NOT_SUPPORTED: 93,
  WEBPAGE_CRITERION_URL_EQUALS_CAN_HAVE_ONLY_ONE_CONDITION: 94,
  WEBPAGE_CRITERION_NOT_SUPPORTED_ON_NON_DSA_AD_GROUP: 95,
  CANNOT_TARGET_USER_LIST_FOR_SMART_DISPLAY_CAMPAIGNS: 99,
  LISTING_SCOPE_TOO_MANY_DIMENSION_TYPES: 100,
  LISTING_SCOPE_TOO_MANY_IN_OPERATORS: 101,
  LISTING_SCOPE_IN_OPERATOR_NOT_SUPPORTED: 102,
  DUPLICATE_LISTING_DIMENSION_TYPE: 103,
  DUPLICATE_LISTING_DIMENSION_VALUE: 104,
  CANNOT_SET_BIDS_ON_LISTING_GROUP_SUBDIVISION: 105
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
