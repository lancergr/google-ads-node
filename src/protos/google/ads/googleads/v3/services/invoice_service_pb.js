// source: google/ads/googleads/v3/services/invoice_service.proto
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

var google_ads_googleads_v3_enums_month_of_year_pb = require('../../../../../google/ads/googleads/v3/enums/month_of_year_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_month_of_year_pb);
var google_ads_googleads_v3_resources_invoice_pb = require('../../../../../google/ads/googleads/v3/resources/invoice_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_resources_invoice_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.services.ListInvoicesRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.ListInvoicesResponse', null, global);
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
proto.google.ads.googleads.v3.services.ListInvoicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.ListInvoicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.ListInvoicesRequest.displayName = 'proto.google.ads.googleads.v3.services.ListInvoicesRequest';
}
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
proto.google.ads.googleads.v3.services.ListInvoicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.services.ListInvoicesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.ListInvoicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.ListInvoicesResponse.displayName = 'proto.google.ads.googleads.v3.services.ListInvoicesResponse';
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
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.ListInvoicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    billingSetup: jspb.Message.getFieldWithDefault(msg, 2, ""),
    issueYear: jspb.Message.getFieldWithDefault(msg, 3, ""),
    issueMonth: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.ListInvoicesRequest;
  return proto.google.ads.googleads.v3.services.ListInvoicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingSetup(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssueYear(value);
      break;
    case 4:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.MonthOfYearEnum.MonthOfYear} */ (reader.readEnum());
      msg.setIssueMonth(value);
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
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.ListInvoicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBillingSetup();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIssueYear();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIssueMonth();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} returns this
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string billing_setup = 2;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.getBillingSetup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} returns this
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.setBillingSetup = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string issue_year = 3;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.getIssueYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} returns this
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.setIssueYear = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.ads.googleads.v3.enums.MonthOfYearEnum.MonthOfYear issue_month = 4;
 * @return {!proto.google.ads.googleads.v3.enums.MonthOfYearEnum.MonthOfYear}
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.getIssueMonth = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.MonthOfYearEnum.MonthOfYear} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.MonthOfYearEnum.MonthOfYear} value
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesRequest} returns this
 */
proto.google.ads.googleads.v3.services.ListInvoicesRequest.prototype.setIssueMonth = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.repeatedFields_ = [1];



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
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.ListInvoicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invoicesList: jspb.Message.toObjectList(msg.getInvoicesList(),
    google_ads_googleads_v3_resources_invoice_pb.Invoice.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesResponse}
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.ListInvoicesResponse;
  return proto.google.ads.googleads.v3.services.ListInvoicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesResponse}
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v3_resources_invoice_pb.Invoice;
      reader.readMessage(value,google_ads_googleads_v3_resources_invoice_pb.Invoice.deserializeBinaryFromReader);
      msg.addInvoices(value);
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
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.ListInvoicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.ListInvoicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvoicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_ads_googleads_v3_resources_invoice_pb.Invoice.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.ads.googleads.v3.resources.Invoice invoices = 1;
 * @return {!Array<!proto.google.ads.googleads.v3.resources.Invoice>}
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.getInvoicesList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v3.resources.Invoice>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v3_resources_invoice_pb.Invoice, 1));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v3.resources.Invoice>} value
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesResponse} returns this
*/
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.setInvoicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.ads.googleads.v3.resources.Invoice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v3.resources.Invoice}
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.addInvoices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.ads.googleads.v3.resources.Invoice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.services.ListInvoicesResponse} returns this
 */
proto.google.ads.googleads.v3.services.ListInvoicesResponse.prototype.clearInvoicesList = function() {
  return this.setInvoicesList([]);
};


goog.object.extend(exports, proto.google.ads.googleads.v3.services);
