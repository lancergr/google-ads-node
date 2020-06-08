// source: google/ads/googleads/v3/errors/campaign_budget_error.proto
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
goog.exportSymbol('proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.CampaignBudgetError', null, global);
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
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.displayName = 'proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum';
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
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum}
 */
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum;
  return proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum}
 */
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.errors.CampaignBudgetErrorEnum.CampaignBudgetError = {
  UNSPECIFIED: 0,
  UNKNOWN: 1,
  CAMPAIGN_BUDGET_CANNOT_BE_SHARED: 17,
  CAMPAIGN_BUDGET_REMOVED: 2,
  CAMPAIGN_BUDGET_IN_USE: 3,
  CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE: 4,
  CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET: 6,
  CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED: 7,
  CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME: 8,
  CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED: 9,
  CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS: 10,
  DUPLICATE_NAME: 11,
  MONEY_AMOUNT_IN_WRONG_CURRENCY: 12,
  MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC: 13,
  MONEY_AMOUNT_TOO_LARGE: 14,
  NEGATIVE_MONEY_AMOUNT: 15,
  NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT: 16,
  TOTAL_BUDGET_AMOUNT_MUST_BE_UNSET_FOR_BUDGET_PERIOD_DAILY: 18
};

goog.object.extend(exports, proto.google.ads.googleads.v3.errors);
