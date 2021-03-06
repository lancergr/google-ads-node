// source: google/ads/googleads/v3/resources/bidding_strategy.proto
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

var google_ads_googleads_v3_common_bidding_pb = require('../../../../../google/ads/googleads/v3/common/bidding_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_bidding_pb);
var google_ads_googleads_v3_enums_bidding_strategy_status_pb = require('../../../../../google/ads/googleads/v3/enums/bidding_strategy_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_bidding_strategy_status_pb);
var google_ads_googleads_v3_enums_bidding_strategy_type_pb = require('../../../../../google/ads/googleads/v3/enums/bidding_strategy_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_bidding_strategy_type_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.BiddingStrategy', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.BiddingStrategy.SchemeCase', null, global);
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
proto.google.ads.googleads.v3.resources.BiddingStrategy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v3.resources.BiddingStrategy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.BiddingStrategy.displayName = 'proto.google.ads.googleads.v3.resources.BiddingStrategy';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_ = [[7,9,48,11,12]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.SchemeCase = {
  SCHEME_NOT_SET: 0,
  ENHANCED_CPC: 7,
  TARGET_CPA: 9,
  TARGET_IMPRESSION_SHARE: 48,
  TARGET_ROAS: 11,
  TARGET_SPEND: 12
};

/**
 * @return {proto.google.ads.googleads.v3.resources.BiddingStrategy.SchemeCase}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getSchemeCase = function() {
  return /** @type {proto.google.ads.googleads.v3.resources.BiddingStrategy.SchemeCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0]));
};



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
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.BiddingStrategy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.BiddingStrategy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 15, 0),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    campaignCount: (f = msg.getCampaignCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    nonRemovedCampaignCount: (f = msg.getNonRemovedCampaignCount()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    enhancedCpc: (f = msg.getEnhancedCpc()) && google_ads_googleads_v3_common_bidding_pb.EnhancedCpc.toObject(includeInstance, f),
    targetCpa: (f = msg.getTargetCpa()) && google_ads_googleads_v3_common_bidding_pb.TargetCpa.toObject(includeInstance, f),
    targetImpressionShare: (f = msg.getTargetImpressionShare()) && google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.toObject(includeInstance, f),
    targetRoas: (f = msg.getTargetRoas()) && google_ads_googleads_v3_common_bidding_pb.TargetRoas.toObject(includeInstance, f),
    targetSpend: (f = msg.getTargetSpend()) && google_ads_googleads_v3_common_bidding_pb.TargetSpend.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.BiddingStrategy;
  return proto.google.ads.googleads.v3.resources.BiddingStrategy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.BiddingStrategy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 15:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 13:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCampaignCount(value);
      break;
    case 14:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setNonRemovedCampaignCount(value);
      break;
    case 7:
      var value = new google_ads_googleads_v3_common_bidding_pb.EnhancedCpc;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.EnhancedCpc.deserializeBinaryFromReader);
      msg.setEnhancedCpc(value);
      break;
    case 9:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetCpa;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetCpa.deserializeBinaryFromReader);
      msg.setTargetCpa(value);
      break;
    case 48:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.deserializeBinaryFromReader);
      msg.setTargetImpressionShare(value);
      break;
    case 11:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetRoas;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetRoas.deserializeBinaryFromReader);
      msg.setTargetRoas(value);
      break;
    case 12:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetSpend;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetSpend.deserializeBinaryFromReader);
      msg.setTargetSpend(value);
      break;
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
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.BiddingStrategy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.BiddingStrategy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCampaignCount();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getNonRemovedCampaignCount();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getEnhancedCpc();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v3_common_bidding_pb.EnhancedCpc.serializeBinaryToWriter
    );
  }
  f = message.getTargetCpa();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetCpa.serializeBinaryToWriter
    );
  }
  f = message.getTargetImpressionShare();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.serializeBinaryToWriter
    );
  }
  f = message.getTargetRoas();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetRoas.serializeBinaryToWriter
    );
  }
  f = message.getTargetSpend();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetSpend.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v3.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus status = 15;
 * @return {!proto.google.ads.googleads.v3.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.BiddingStrategyStatusEnum.BiddingStrategyStatus} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType type = 5;
 * @return {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.protobuf.Int64Value campaign_count = 13;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getCampaignCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 13));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setCampaignCount = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearCampaignCount = function() {
  return this.setCampaignCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasCampaignCount = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Int64Value non_removed_campaign_count = 14;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getNonRemovedCampaignCount = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 14));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setNonRemovedCampaignCount = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearNonRemovedCampaignCount = function() {
  return this.setNonRemovedCampaignCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasNonRemovedCampaignCount = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.ads.googleads.v3.common.EnhancedCpc enhanced_cpc = 7;
 * @return {?proto.google.ads.googleads.v3.common.EnhancedCpc}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getEnhancedCpc = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.EnhancedCpc} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.EnhancedCpc, 7));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.EnhancedCpc|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setEnhancedCpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearEnhancedCpc = function() {
  return this.setEnhancedCpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasEnhancedCpc = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetCpa target_cpa = 9;
 * @return {?proto.google.ads.googleads.v3.common.TargetCpa}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getTargetCpa = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetCpa} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetCpa, 9));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetCpa|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setTargetCpa = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearTargetCpa = function() {
  return this.setTargetCpa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasTargetCpa = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetImpressionShare target_impression_share = 48;
 * @return {?proto.google.ads.googleads.v3.common.TargetImpressionShare}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getTargetImpressionShare = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetImpressionShare} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare, 48));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetImpressionShare|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setTargetImpressionShare = function(value) {
  return jspb.Message.setOneofWrapperField(this, 48, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearTargetImpressionShare = function() {
  return this.setTargetImpressionShare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasTargetImpressionShare = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetRoas target_roas = 11;
 * @return {?proto.google.ads.googleads.v3.common.TargetRoas}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getTargetRoas = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetRoas} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetRoas, 11));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetRoas|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setTargetRoas = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearTargetRoas = function() {
  return this.setTargetRoas(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasTargetRoas = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetSpend target_spend = 12;
 * @return {?proto.google.ads.googleads.v3.common.TargetSpend}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.getTargetSpend = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetSpend} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetSpend, 12));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetSpend|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
*/
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.setTargetSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.google.ads.googleads.v3.resources.BiddingStrategy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.BiddingStrategy} returns this
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.clearTargetSpend = function() {
  return this.setTargetSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.BiddingStrategy.prototype.hasTargetSpend = function() {
  return jspb.Message.getField(this, 12) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
