var jspb=require("google-protobuf"),goog=jspb,global=Function("return this")(),google_ads_googleads_v3_resources_gender_view_pb=require("../../../../../google/ads/googleads/v3/resources/gender_view_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js"),google_api_field_behavior_pb=require("../../../../../google/api/field_behavior_pb.js");goog.exportSymbol("proto.google.ads.googleads.v3.services.GetGenderViewRequest",null,global),proto.google.ads.googleads.v3.services.GetGenderViewRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)},goog.inherits(proto.google.ads.googleads.v3.services.GetGenderViewRequest,jspb.Message),goog.DEBUG&&!COMPILED&&(proto.google.ads.googleads.v3.services.GetGenderViewRequest.displayName="proto.google.ads.googleads.v3.services.GetGenderViewRequest"),jspb.Message.GENERATE_TO_OBJECT&&(proto.google.ads.googleads.v3.services.GetGenderViewRequest.prototype.toObject=function(opt_includeInstance){return proto.google.ads.googleads.v3.services.GetGenderViewRequest.toObject(opt_includeInstance,this)},proto.google.ads.googleads.v3.services.GetGenderViewRequest.toObject=function(includeInstance,msg){var obj={resourceName:jspb.Message.getFieldWithDefault(msg,1,"")};return includeInstance&&(obj.$jspbMessageInstance=msg),obj}),proto.google.ads.googleads.v3.services.GetGenderViewRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes),msg=new proto.google.ads.googleads.v3.services.GetGenderViewRequest;return proto.google.ads.googleads.v3.services.GetGenderViewRequest.deserializeBinaryFromReader(msg,reader)},proto.google.ads.googleads.v3.services.GetGenderViewRequest.deserializeBinaryFromReader=function(msg,reader){for(;reader.nextField()&&!reader.isEndGroup();)switch(reader.getFieldNumber()){case 1:var value=reader.readString();msg.setResourceName(value);break;default:reader.skipField()}return msg},proto.google.ads.googleads.v3.services.GetGenderViewRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;return proto.google.ads.googleads.v3.services.GetGenderViewRequest.serializeBinaryToWriter(this,writer),writer.getResultBuffer()},proto.google.ads.googleads.v3.services.GetGenderViewRequest.serializeBinaryToWriter=function(message,writer){var f;0<(f=message.getResourceName()).length&&writer.writeString(1,f)},proto.google.ads.googleads.v3.services.GetGenderViewRequest.prototype.getResourceName=function(){return jspb.Message.getFieldWithDefault(this,1,"")},proto.google.ads.googleads.v3.services.GetGenderViewRequest.prototype.setResourceName=function(value){jspb.Message.setProto3StringField(this,1,value)},goog.object.extend(exports,proto.google.ads.googleads.v3.services);