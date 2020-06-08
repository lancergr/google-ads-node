// source: google/ads/googleads/v3/resources/domain_category.proto
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

var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.DomainCategory', null, global);
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
proto.google.ads.googleads.v3.resources.DomainCategory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.DomainCategory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.DomainCategory.displayName = 'proto.google.ads.googleads.v3.resources.DomainCategory';
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
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.DomainCategory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.DomainCategory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.DomainCategory.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    campaign: (f = msg.getCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    category: (f = msg.getCategory()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    languageCode: (f = msg.getLanguageCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    domain: (f = msg.getDomain()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    coverageFraction: (f = msg.getCoverageFraction()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    categoryRank: (f = msg.getCategoryRank()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    hasChildren: (f = msg.getHasChildren()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    recommendedCpcBidMicros: (f = msg.getRecommendedCpcBidMicros()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.DomainCategory;
  return proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.DomainCategory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDomain(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setCoverageFraction(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setCategoryRank(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setHasChildren(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setRecommendedCpcBidMicros(value);
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
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.DomainCategory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.DomainCategory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.DomainCategory.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDomain();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCoverageFraction();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getCategoryRank();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getHasChildren();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getRecommendedCpcBidMicros();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue campaign = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCampaign = function() {
  return this.setCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCampaign = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue category = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCategory = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue language_code = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getLanguageCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setLanguageCode = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearLanguageCode = function() {
  return this.setLanguageCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasLanguageCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue domain = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getDomain = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setDomain = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearDomain = function() {
  return this.setDomain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasDomain = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.DoubleValue coverage_fraction = 6;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCoverageFraction = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 6));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCoverageFraction = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCoverageFraction = function() {
  return this.setCoverageFraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCoverageFraction = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Int64Value category_rank = 7;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getCategoryRank = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 7));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setCategoryRank = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearCategoryRank = function() {
  return this.setCategoryRank(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasCategoryRank = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.BoolValue has_children = 8;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getHasChildren = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 8));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setHasChildren = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearHasChildren = function() {
  return this.setHasChildren(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasHasChildren = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Int64Value recommended_cpc_bid_micros = 9;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.getRecommendedCpcBidMicros = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 9));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
*/
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.setRecommendedCpcBidMicros = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.DomainCategory} returns this
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.clearRecommendedCpcBidMicros = function() {
  return this.setRecommendedCpcBidMicros(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.DomainCategory.prototype.hasRecommendedCpcBidMicros = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
