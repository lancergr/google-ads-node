// source: google/ads/googleads/v3/resources/campaign_extension_setting.proto
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

var google_ads_googleads_v3_enums_extension_setting_device_pb = require('../../../../../google/ads/googleads/v3/enums/extension_setting_device_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_extension_setting_device_pb);
var google_ads_googleads_v3_enums_extension_type_pb = require('../../../../../google/ads/googleads/v3/enums/extension_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_extension_type_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.CampaignExtensionSetting', null, global);
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
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.CampaignExtensionSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.displayName = 'proto.google.ads.googleads.v3.resources.CampaignExtensionSetting';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.repeatedFields_ = [4];



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
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    extensionType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    campaign: (f = msg.getCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    extensionFeedItemsList: jspb.Message.toObjectList(msg.getExtensionFeedItemsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    device: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.CampaignExtensionSetting;
  return proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType} */ (reader.readEnum());
      msg.setExtensionType(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaign(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addExtensionFeedItems(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice} */ (reader.readEnum());
      msg.setDevice(value);
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
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtensionType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCampaign();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getExtensionFeedItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType extension_type = 2;
 * @return {!proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.getExtensionType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.ExtensionTypeEnum.ExtensionType} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.setExtensionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue campaign = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.getCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated google.protobuf.StringValue extension_feed_items = 4;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.getExtensionFeedItemsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
*/
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.setExtensionFeedItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.addExtensionFeedItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.clearExtensionFeedItemsList = function() {
  return this.setExtensionFeedItemsList([]);
};


/**
 * optional google.ads.googleads.v3.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice device = 5;
 * @return {!proto.google.ads.googleads.v3.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice}
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.getDevice = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.ExtensionSettingDeviceEnum.ExtensionSettingDevice} value
 * @return {!proto.google.ads.googleads.v3.resources.CampaignExtensionSetting} returns this
 */
proto.google.ads.googleads.v3.resources.CampaignExtensionSetting.prototype.setDevice = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
