// source: google/ads/googleads/v3/services/media_file_service.proto
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

var google_ads_googleads_v3_resources_media_file_pb = require('../../../../../google/ads/googleads/v3/resources/media_file_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_resources_media_file_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
goog.object.extend(proto, google_api_client_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.services.GetMediaFileRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.MediaFileOperation', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.MediaFileOperation.OperationCase', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.MutateMediaFileResult', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.MutateMediaFilesRequest', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.services.MutateMediaFilesResponse', null, global);
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
proto.google.ads.googleads.v3.services.GetMediaFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.GetMediaFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.GetMediaFileRequest.displayName = 'proto.google.ads.googleads.v3.services.GetMediaFileRequest';
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
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.MutateMediaFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.displayName = 'proto.google.ads.googleads.v3.services.MutateMediaFilesRequest';
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
proto.google.ads.googleads.v3.services.MediaFileOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.ads.googleads.v3.services.MediaFileOperation.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v3.services.MediaFileOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.MediaFileOperation.displayName = 'proto.google.ads.googleads.v3.services.MediaFileOperation';
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
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.MutateMediaFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.displayName = 'proto.google.ads.googleads.v3.services.MutateMediaFilesResponse';
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
proto.google.ads.googleads.v3.services.MutateMediaFileResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.services.MutateMediaFileResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.services.MutateMediaFileResult.displayName = 'proto.google.ads.googleads.v3.services.MutateMediaFileResult';
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
proto.google.ads.googleads.v3.services.GetMediaFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.GetMediaFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.GetMediaFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.ads.googleads.v3.services.GetMediaFileRequest}
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.GetMediaFileRequest;
  return proto.google.ads.googleads.v3.services.GetMediaFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.GetMediaFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.GetMediaFileRequest}
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.services.GetMediaFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.GetMediaFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.GetMediaFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.GetMediaFileRequest} returns this
 */
proto.google.ads.googleads.v3.services.GetMediaFileRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.repeatedFields_ = [2];



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
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operationsList: jspb.Message.toObjectList(msg.getOperationsList(),
    proto.google.ads.googleads.v3.services.MediaFileOperation.toObject, includeInstance),
    partialFailure: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    validateOnly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.MutateMediaFilesRequest;
  return proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.ads.googleads.v3.services.MediaFileOperation;
      reader.readMessage(value,proto.google.ads.googleads.v3.services.MediaFileOperation.deserializeBinaryFromReader);
      msg.addOperations(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPartialFailure(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setValidateOnly(value);
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
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v3.services.MediaFileOperation.serializeBinaryToWriter
    );
  }
  f = message.getPartialFailure();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getValidateOnly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string customer_id = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.getCustomerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.setCustomerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated MediaFileOperation operations = 2;
 * @return {!Array<!proto.google.ads.googleads.v3.services.MediaFileOperation>}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.getOperationsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v3.services.MediaFileOperation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v3.services.MediaFileOperation, 2));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v3.services.MediaFileOperation>} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} returns this
*/
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.setOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v3.services.MediaFileOperation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v3.services.MediaFileOperation}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.addOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v3.services.MediaFileOperation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};


/**
 * optional bool partial_failure = 3;
 * @return {boolean}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.getPartialFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.setPartialFailure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool validate_only = 4;
 * @return {boolean}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.getValidateOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesRequest} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesRequest.prototype.setValidateOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.OperationCase = {
  OPERATION_NOT_SET: 0,
  CREATE: 1
};

/**
 * @return {proto.google.ads.googleads.v3.services.MediaFileOperation.OperationCase}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.getOperationCase = function() {
  return /** @type {proto.google.ads.googleads.v3.services.MediaFileOperation.OperationCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v3.services.MediaFileOperation.oneofGroups_[0]));
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
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.MediaFileOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.MediaFileOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    create: (f = msg.getCreate()) && google_ads_googleads_v3_resources_media_file_pb.MediaFile.toObject(includeInstance, f)
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
 * @return {!proto.google.ads.googleads.v3.services.MediaFileOperation}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.MediaFileOperation;
  return proto.google.ads.googleads.v3.services.MediaFileOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.MediaFileOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.MediaFileOperation}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_ads_googleads_v3_resources_media_file_pb.MediaFile;
      reader.readMessage(value,google_ads_googleads_v3_resources_media_file_pb.MediaFile.deserializeBinaryFromReader);
      msg.setCreate(value);
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
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.MediaFileOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.MediaFileOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_ads_googleads_v3_resources_media_file_pb.MediaFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.ads.googleads.v3.resources.MediaFile create = 1;
 * @return {?proto.google.ads.googleads.v3.resources.MediaFile}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.getCreate = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.MediaFile} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_resources_media_file_pb.MediaFile, 1));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.MediaFile|undefined} value
 * @return {!proto.google.ads.googleads.v3.services.MediaFileOperation} returns this
*/
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.setCreate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.ads.googleads.v3.services.MediaFileOperation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.services.MediaFileOperation} returns this
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.clearCreate = function() {
  return this.setCreate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.services.MediaFileOperation.prototype.hasCreate = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.repeatedFields_ = [2];



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
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partialFailureError: (f = msg.getPartialFailureError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.google.ads.googleads.v3.services.MutateMediaFileResult.toObject, includeInstance)
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
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.MutateMediaFilesResponse;
  return proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setPartialFailureError(value);
      break;
    case 2:
      var value = new proto.google.ads.googleads.v3.services.MutateMediaFileResult;
      reader.readMessage(value,proto.google.ads.googleads.v3.services.MutateMediaFileResult.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartialFailureError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.google.ads.googleads.v3.services.MutateMediaFileResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.rpc.Status partial_failure_error = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.getPartialFailureError = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} returns this
*/
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.setPartialFailureError = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.clearPartialFailureError = function() {
  return this.setPartialFailureError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.hasPartialFailureError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MutateMediaFileResult results = 2;
 * @return {!Array<!proto.google.ads.googleads.v3.services.MutateMediaFileResult>}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v3.services.MutateMediaFileResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.ads.googleads.v3.services.MutateMediaFileResult, 2));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v3.services.MutateMediaFileResult>} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} returns this
*/
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFileResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFileResult}
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.ads.googleads.v3.services.MutateMediaFileResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFilesResponse} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFilesResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
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
proto.google.ads.googleads.v3.services.MutateMediaFileResult.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.services.MutateMediaFileResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFileResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFileResult}
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.services.MutateMediaFileResult;
  return proto.google.ads.googleads.v3.services.MutateMediaFileResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFileResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFileResult}
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.deserializeBinaryFromReader = function(msg, reader) {
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
proto.google.ads.googleads.v3.services.MutateMediaFileResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.services.MutateMediaFileResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.services.MutateMediaFileResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.services.MutateMediaFileResult} returns this
 */
proto.google.ads.googleads.v3.services.MutateMediaFileResult.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.google.ads.googleads.v3.services);
