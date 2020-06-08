// source: google/ads/googleads/v3/resources/click_view.proto
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

var google_ads_googleads_v3_common_click_location_pb = require('../../../../../google/ads/googleads/v3/common/click_location_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_click_location_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.ClickView', null, global);
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
proto.google.ads.googleads.v3.resources.ClickView = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.ClickView, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.ClickView.displayName = 'proto.google.ads.googleads.v3.resources.ClickView';
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
proto.google.ads.googleads.v3.resources.ClickView.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.ClickView.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.ClickView} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.ClickView.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    gclid: (f = msg.getGclid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    areaOfInterest: (f = msg.getAreaOfInterest()) && google_ads_googleads_v3_common_click_location_pb.ClickLocation.toObject(includeInstance, f),
    locationOfPresence: (f = msg.getLocationOfPresence()) && google_ads_googleads_v3_common_click_location_pb.ClickLocation.toObject(includeInstance, f),
    pageNumber: (f = msg.getPageNumber()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    adGroupAd: (f = msg.getAdGroupAd()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v3.resources.ClickView}
 */
proto.google.ads.googleads.v3.resources.ClickView.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.ClickView;
  return proto.google.ads.googleads.v3.resources.ClickView.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.ClickView} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView}
 */
proto.google.ads.googleads.v3.resources.ClickView.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setGclid(value);
      break;
    case 3:
      var value = new google_ads_googleads_v3_common_click_location_pb.ClickLocation;
      reader.readMessage(value,google_ads_googleads_v3_common_click_location_pb.ClickLocation.deserializeBinaryFromReader);
      msg.setAreaOfInterest(value);
      break;
    case 4:
      var value = new google_ads_googleads_v3_common_click_location_pb.ClickLocation;
      reader.readMessage(value,google_ads_googleads_v3_common_click_location_pb.ClickLocation.deserializeBinaryFromReader);
      msg.setLocationOfPresence(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPageNumber(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAdGroupAd(value);
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
proto.google.ads.googleads.v3.resources.ClickView.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.ClickView.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.ClickView} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.ClickView.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGclid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAreaOfInterest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_ads_googleads_v3_common_click_location_pb.ClickLocation.serializeBinaryToWriter
    );
  }
  f = message.getLocationOfPresence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_ads_googleads_v3_common_click_location_pb.ClickLocation.serializeBinaryToWriter
    );
  }
  f = message.getPageNumber();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getAdGroupAd();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue gclid = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getGclid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
*/
proto.google.ads.googleads.v3.resources.ClickView.prototype.setGclid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.clearGclid = function() {
  return this.setGclid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.hasGclid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v3.common.ClickLocation area_of_interest = 3;
 * @return {?proto.google.ads.googleads.v3.common.ClickLocation}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getAreaOfInterest = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.ClickLocation} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_click_location_pb.ClickLocation, 3));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.ClickLocation|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
*/
proto.google.ads.googleads.v3.resources.ClickView.prototype.setAreaOfInterest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.clearAreaOfInterest = function() {
  return this.setAreaOfInterest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.hasAreaOfInterest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.ads.googleads.v3.common.ClickLocation location_of_presence = 4;
 * @return {?proto.google.ads.googleads.v3.common.ClickLocation}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getLocationOfPresence = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.ClickLocation} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_click_location_pb.ClickLocation, 4));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.ClickLocation|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
*/
proto.google.ads.googleads.v3.resources.ClickView.prototype.setLocationOfPresence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.clearLocationOfPresence = function() {
  return this.setLocationOfPresence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.hasLocationOfPresence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int64Value page_number = 5;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getPageNumber = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
*/
proto.google.ads.googleads.v3.resources.ClickView.prototype.setPageNumber = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.clearPageNumber = function() {
  return this.setPageNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.hasPageNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue ad_group_ad = 7;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.getAdGroupAd = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 7));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
*/
proto.google.ads.googleads.v3.resources.ClickView.prototype.setAdGroupAd = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.ClickView} returns this
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.clearAdGroupAd = function() {
  return this.setAdGroupAd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.ClickView.prototype.hasAdGroupAd = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
