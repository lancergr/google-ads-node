// source: google/ads/googleads/v3/resources/campaign_bid_modifier.proto
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

var google_ads_googleads_v3_common_criteria_pb = require('../../../../../google/ads/googleads/v3/common/criteria_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_criteria_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.CampaignBidModifier', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.CampaignBidModifier.CriterionCase', null, global);
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
proto.google.ads.googleads.v3.resources.CampaignBidModifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v3.resources.CampaignBidModifier.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v3.resources.CampaignBidModifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.CampaignBidModifier.displayName = 'proto.google.ads.googleads.v3.resources.CampaignBidModifier';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.oneofGroups_ = [[5]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.CriterionCase = {
  CRITERION_NOT_SET: 0,
  INTERACTION_TYPE: 5
};

/**
 * @return {proto.google.ads.googleads.v3.resources.CampaignBidModifier.CriterionCase}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getCriterionCase = function() {
  return /** @type {proto.google.ads.googleads.v3.resources.CampaignBidModifier.CriterionCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v3.resources.CampaignBidModifier.oneofGroups_[0]));
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
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.CampaignBidModifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaign: (f = msg.getCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    criterionId: (f = msg.getCriterionId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    bidModifier: (f = msg.getBidModifier()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    interactionType: (f = msg.getInteractionType()) && google_ads_googleads_v3_common_criteria_pb.InteractionTypeInfo.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.CampaignBidModifier;
  return proto.google.ads.googleads.v3.resources.CampaignBidModifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCriterionId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setBidModifier(value);
      break;
    case 5:
      var value = new google_ads_googleads_v3_common_criteria_pb.InteractionTypeInfo;
      reader.readMessage(value,google_ads_googleads_v3_common_criteria_pb.InteractionTypeInfo.deserializeBinaryFromReader);
      msg.setInteractionType(value);
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
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.CampaignBidModifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCriterionId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getBidModifier();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getInteractionType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_ads_googleads_v3_common_criteria_pb.InteractionTypeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue campaign = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int64Value criterion_id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getCriterionId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.setCriterionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.clearCriterionId = function() {
  return this.setCriterionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.hasCriterionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.DoubleValue bid_modifier = 4;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getBidModifier = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 4));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.setBidModifier = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.clearBidModifier = function() {
  return this.setBidModifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.hasBidModifier = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v3.common.InteractionTypeInfo interaction_type = 5;
 * @return {?proto.google.ads.googleads.v3.common.InteractionTypeInfo}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.getInteractionType = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.InteractionTypeInfo} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_criteria_pb.InteractionTypeInfo, 5));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.InteractionTypeInfo|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.setInteractionType = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.google.ads.googleads.v3.resources.CampaignBidModifier.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignBidModifier} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.clearInteractionType = function() {
  return this.setInteractionType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.CampaignBidModifier.prototype.hasInteractionType = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
