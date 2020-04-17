var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_api_annotations_pb=require("../../google/api/annotations_pb.js"),google_api_client_pb=require("../../google/api/client_pb.js"),google_protobuf_any_pb=require("google-protobuf/google/protobuf/any_pb.js"),google_protobuf_duration_pb=require("google-protobuf/google/protobuf/duration_pb.js"),google_protobuf_empty_pb=require("google-protobuf/google/protobuf/empty_pb.js"),google_rpc_status_pb=require("../../google/rpc/status_pb.js"),google_protobuf_descriptor_pb=require("google-protobuf/google/protobuf/descriptor_pb.js");goog.exportSymbol("proto.google.longrunning.CancelOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.DeleteOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.GetOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.ListOperationsRequest",null,global),goog.exportSymbol("proto.google.longrunning.ListOperationsResponse",null,global),goog.exportSymbol("proto.google.longrunning.Operation",null,global),goog.exportSymbol("proto.google.longrunning.OperationInfo",null,global),goog.exportSymbol("proto.google.longrunning.WaitOperationRequest",null,global),goog.exportSymbol("proto.google.longrunning.operationInfo",null,global),proto.google.longrunning.Operation=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,proto.google.longrunning.Operation.oneofGroups_)},goog.inherits(proto.google.longrunning.Operation,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.Operation.displayName="proto.google.longrunning.Operation"),proto.google.longrunning.Operation.oneofGroups_=[[4,5]],proto.google.longrunning.Operation.ResultCase={RESULT_NOT_SET:0,ERROR:4,RESPONSE:5},proto.google.longrunning.Operation.prototype.getResultCase=function(){return jspb.Message.computeOneofCase(this,proto.google.longrunning.Operation.oneofGroups_[0])},jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.Operation.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.Operation.toObject(opt_includeInstance,this)},proto.google.longrunning.Operation.toObject=function(includeInstance,msg){var f,obj={name:jspb.Message.getFieldWithDefault(msg,1,""),metadata:(f=msg.getMetadata())&&google_protobuf_any_pb.Any.toObject(includeInstance,f),done:jspb.Message.getFieldWithDefault(msg,3,!1),error:(f=msg.getError())&&google_rpc_status_pb.Status.toObject(includeInstance,f),response:(f=msg.getResponse())&&google_protobuf_any_pb.Any.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.Operation.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.Operation;return proto.google.longrunning.Operation.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.Operation.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;case 2:value=new google_protobuf_any_pb.Any,reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader),msg.setMetadata(value);break;case 3:value=reader.readBool(),msg.setDone(value);break;case 4:value=new google_rpc_status_pb.Status,reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader),msg.setError(value);break;case 5:value=new google_protobuf_any_pb.Any,reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader),msg.setResponse(value);break;default:reader.skipField()}return msg},proto.google.longrunning.Operation.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.Operation.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.Operation.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(1,f),null!=(f=message.getMetadata())&&writer.writeMessage(2,f,google_protobuf_any_pb.Any.serializeBinaryToWriter),(f=message.getDone())&&writer.writeBool(3,f),null!=(f=message.getError())&&writer.writeMessage(4,f,google_rpc_status_pb.Status.serializeBinaryToWriter),null!=(f=message.getResponse())&&writer.writeMessage(5,f,google_protobuf_any_pb.Any.serializeBinaryToWriter)},proto.google.longrunning.Operation.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.Operation.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.Operation.prototype.getMetadata=function(){return jspb.Message.getWrapperField(this,google_protobuf_any_pb.Any,2)},proto.google.longrunning.Operation.prototype.setMetadata=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.longrunning.Operation.prototype.clearMetadata=function(){this.setMetadata(void 0)},proto.google.longrunning.Operation.prototype.hasMetadata=function(){return null!=jspb.Message.getField(this,2)},proto.google.longrunning.Operation.prototype.getDone=function(){return jspb.Message.getFieldWithDefault(this,3,!1)},proto.google.longrunning.Operation.prototype.setDone=function(value){jspb.Message.setProto3BooleanField(this,3,value)},proto.google.longrunning.Operation.prototype.getError=function(){return jspb.Message.getWrapperField(this,google_rpc_status_pb.Status,4)},proto.google.longrunning.Operation.prototype.setError=function(value){jspb.Message.setOneofWrapperField(this,4,proto.google.longrunning.Operation.oneofGroups_[0],value)},proto.google.longrunning.Operation.prototype.clearError=function(){this.setError(void 0)},proto.google.longrunning.Operation.prototype.hasError=function(){return null!=jspb.Message.getField(this,4)},proto.google.longrunning.Operation.prototype.getResponse=function(){return jspb.Message.getWrapperField(this,google_protobuf_any_pb.Any,5)},proto.google.longrunning.Operation.prototype.setResponse=function(value){jspb.Message.setOneofWrapperField(this,5,proto.google.longrunning.Operation.oneofGroups_[0],value)},proto.google.longrunning.Operation.prototype.clearResponse=function(){this.setResponse(void 0)},proto.google.longrunning.Operation.prototype.hasResponse=function(){return null!=jspb.Message.getField(this,5)},proto.google.longrunning.GetOperationRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.GetOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.GetOperationRequest.displayName="proto.google.longrunning.GetOperationRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.GetOperationRequest.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.GetOperationRequest.toObject(opt_includeInstance,this)},proto.google.longrunning.GetOperationRequest.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.GetOperationRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.GetOperationRequest;return proto.google.longrunning.GetOperationRequest.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.GetOperationRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;default:reader.skipField()}return msg},proto.google.longrunning.GetOperationRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.GetOperationRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.GetOperationRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getName()).length&&writer.writeString(1,f)},proto.google.longrunning.GetOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.GetOperationRequest.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.ListOperationsRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.ListOperationsRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.ListOperationsRequest.displayName="proto.google.longrunning.ListOperationsRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.ListOperationsRequest.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.ListOperationsRequest.toObject(opt_includeInstance,this)},proto.google.longrunning.ListOperationsRequest.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,4,""),filter:jspb.Message.getFieldWithDefault(msg,1,""),pageSize:jspb.Message.getFieldWithDefault(msg,2,0),pageToken:jspb.Message.getFieldWithDefault(msg,3,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.ListOperationsRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.ListOperationsRequest;return proto.google.longrunning.ListOperationsRequest.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.ListOperationsRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 4:var value=reader.readString();msg.setName(value);break;case 1:value=reader.readString(),msg.setFilter(value);break;case 2:value=reader.readInt32(),msg.setPageSize(value);break;case 3:value=reader.readString(),msg.setPageToken(value);break;default:reader.skipField()}return msg},proto.google.longrunning.ListOperationsRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.ListOperationsRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.ListOperationsRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(4,f),0<(f=message.getFilter()).length&&writer.writeString(1,f),0!==(f=message.getPageSize())&&writer.writeInt32(2,f),0<(f=message.getPageToken()).length&&writer.writeString(3,f)},proto.google.longrunning.ListOperationsRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,4,"")},proto.google.longrunning.ListOperationsRequest.prototype.setName=function(value){jspb.Message.setProto3StringField(this,4,value)},proto.google.longrunning.ListOperationsRequest.prototype.getFilter=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.ListOperationsRequest.prototype.setFilter=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.ListOperationsRequest.prototype.getPageSize=function(){return jspb.Message.getFieldWithDefault(this,2,0)},proto.google.longrunning.ListOperationsRequest.prototype.setPageSize=function(value){jspb.Message.setProto3IntField(this,2,value)},proto.google.longrunning.ListOperationsRequest.prototype.getPageToken=function(){return jspb.Message.getFieldWithDefault(this,3,"")},proto.google.longrunning.ListOperationsRequest.prototype.setPageToken=function(value){jspb.Message.setProto3StringField(this,3,value)},proto.google.longrunning.ListOperationsResponse=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.google.longrunning.ListOperationsResponse.repeatedFields_,null)},goog.inherits(proto.google.longrunning.ListOperationsResponse,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.ListOperationsResponse.displayName="proto.google.longrunning.ListOperationsResponse"),proto.google.longrunning.ListOperationsResponse.repeatedFields_=[1],jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.ListOperationsResponse.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.ListOperationsResponse.toObject(opt_includeInstance,this)},proto.google.longrunning.ListOperationsResponse.toObject=function(includeInstance,msg){var obj={operationsList:jspb.Message.toObjectList(msg.getOperationsList(),proto.google.longrunning.Operation.toObject,includeInstance),nextPageToken:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.ListOperationsResponse.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.ListOperationsResponse;return proto.google.longrunning.ListOperationsResponse.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.ListOperationsResponse.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=new proto.google.longrunning.Operation;reader.readMessage(value,proto.google.longrunning.Operation.deserializeBinaryFromReader),msg.addOperations(value);break;case 2:value=reader.readString(),msg.setNextPageToken(value);break;default:reader.skipField()}return msg},proto.google.longrunning.ListOperationsResponse.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.ListOperationsResponse.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.ListOperationsResponse.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getOperationsList()).length&&writer.writeRepeatedMessage(1,f,proto.google.longrunning.Operation.serializeBinaryToWriter),0<(f=message.getNextPageToken()).length&&writer.writeString(2,f)},proto.google.longrunning.ListOperationsResponse.prototype.getOperationsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.google.longrunning.Operation,1)},proto.google.longrunning.ListOperationsResponse.prototype.setOperationsList=function(value){jspb.Message.setRepeatedWrapperField(this,1,value)},proto.google.longrunning.ListOperationsResponse.prototype.addOperations=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.google.longrunning.Operation,opt_index)},proto.google.longrunning.ListOperationsResponse.prototype.clearOperationsList=function(){this.setOperationsList([])},proto.google.longrunning.ListOperationsResponse.prototype.getNextPageToken=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.longrunning.ListOperationsResponse.prototype.setNextPageToken=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.longrunning.CancelOperationRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.CancelOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.CancelOperationRequest.displayName="proto.google.longrunning.CancelOperationRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.CancelOperationRequest.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.CancelOperationRequest.toObject(opt_includeInstance,this)},proto.google.longrunning.CancelOperationRequest.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.CancelOperationRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.CancelOperationRequest;return proto.google.longrunning.CancelOperationRequest.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.CancelOperationRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;default:reader.skipField()}return msg},proto.google.longrunning.CancelOperationRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.CancelOperationRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.CancelOperationRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getName()).length&&writer.writeString(1,f)},proto.google.longrunning.CancelOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.CancelOperationRequest.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.DeleteOperationRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.DeleteOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.DeleteOperationRequest.displayName="proto.google.longrunning.DeleteOperationRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.DeleteOperationRequest.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.DeleteOperationRequest.toObject(opt_includeInstance,this)},proto.google.longrunning.DeleteOperationRequest.toObject=function(includeInstance,msg){var obj={name:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.DeleteOperationRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.DeleteOperationRequest;return proto.google.longrunning.DeleteOperationRequest.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.DeleteOperationRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;default:reader.skipField()}return msg},proto.google.longrunning.DeleteOperationRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.DeleteOperationRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.DeleteOperationRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getName()).length&&writer.writeString(1,f)},proto.google.longrunning.DeleteOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.DeleteOperationRequest.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.WaitOperationRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.WaitOperationRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.WaitOperationRequest.displayName="proto.google.longrunning.WaitOperationRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.WaitOperationRequest.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.WaitOperationRequest.toObject(opt_includeInstance,this)},proto.google.longrunning.WaitOperationRequest.toObject=function(includeInstance,msg){var f,obj={name:jspb.Message.getFieldWithDefault(msg,1,""),timeout:(f=msg.getTimeout())&&google_protobuf_duration_pb.Duration.toObject(includeInstance,f)};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.WaitOperationRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.WaitOperationRequest;return proto.google.longrunning.WaitOperationRequest.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.WaitOperationRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setName(value);break;case 2:value=new google_protobuf_duration_pb.Duration,reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader),msg.setTimeout(value);break;default:reader.skipField()}return msg},proto.google.longrunning.WaitOperationRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.WaitOperationRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.WaitOperationRequest.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getName()).length&&writer.writeString(1,f),null!=(f=message.getTimeout())&&writer.writeMessage(2,f,google_protobuf_duration_pb.Duration.serializeBinaryToWriter)},proto.google.longrunning.WaitOperationRequest.prototype.getName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.WaitOperationRequest.prototype.setName=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.WaitOperationRequest.prototype.getTimeout=function(){return jspb.Message.getWrapperField(this,google_protobuf_duration_pb.Duration,2)},proto.google.longrunning.WaitOperationRequest.prototype.setTimeout=function(value){jspb.Message.setWrapperField(this,2,value)},proto.google.longrunning.WaitOperationRequest.prototype.clearTimeout=function(){this.setTimeout(void 0)},proto.google.longrunning.WaitOperationRequest.prototype.hasTimeout=function(){return null!=jspb.Message.getField(this,2)},proto.google.longrunning.OperationInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.longrunning.OperationInfo,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.longrunning.OperationInfo.displayName="proto.google.longrunning.OperationInfo"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.longrunning.OperationInfo.prototype.toObject=function(opt_includeInstance){return proto.google.longrunning.OperationInfo.toObject(opt_includeInstance,this)},proto.google.longrunning.OperationInfo.toObject=function(includeInstance,msg){var obj={responseType:jspb.Message.getFieldWithDefault(msg,1,""),metadataType:jspb.Message.getFieldWithDefault(msg,2,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.longrunning.OperationInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.longrunning.OperationInfo;return proto.google.longrunning.OperationInfo.deserializeBinaryFromReader(msg,reader)},proto.google.longrunning.OperationInfo.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResponseType(value);break;case 2:value=reader.readString(),msg.setMetadataType(value);break;default:reader.skipField()}return msg},proto.google.longrunning.OperationInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.longrunning.OperationInfo.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.longrunning.OperationInfo.serializeBinaryToWriter=function(message,writer){var f=void 0;0<(f=message.getResponseType()).length&&writer.writeString(1,f),0<(f=message.getMetadataType()).length&&writer.writeString(2,f)},proto.google.longrunning.OperationInfo.prototype.getResponseType=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.longrunning.OperationInfo.prototype.setResponseType=function(value){jspb.Message.setProto3StringField(this,1,value)},proto.google.longrunning.OperationInfo.prototype.getMetadataType=function(){return jspb.Message.getFieldWithDefault(this,2,"")},proto.google.longrunning.OperationInfo.prototype.setMetadataType=function(value){jspb.Message.setProto3StringField(this,2,value)},proto.google.longrunning.operationInfo=new jspb.ExtensionFieldInfo(1049,{operationInfo:0},proto.google.longrunning.OperationInfo,proto.google.longrunning.OperationInfo.toObject,0),google_protobuf_descriptor_pb.MethodOptions.extensionsBinary[1049]=new jspb.ExtensionFieldBinaryInfo(proto.google.longrunning.operationInfo,jspb.BinaryReader.prototype.readMessage,jspb.BinaryWriter.prototype.writeMessage,proto.google.longrunning.OperationInfo.serializeBinaryToWriter,proto.google.longrunning.OperationInfo.deserializeBinaryFromReader,!1),google_protobuf_descriptor_pb.MethodOptions.extensions[1049]=proto.google.longrunning.operationInfo,goog.object.extend(exports,proto.google.longrunning);