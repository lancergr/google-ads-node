"use strict";var grpc=require("grpc"),google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb=require("../../../../../google/ads/googleads/v2/services/conversion_adjustment_upload_service_pb.js"),google_ads_googleads_v2_enums_conversion_adjustment_type_pb=require("../../../../../google/ads/googleads/v2/enums/conversion_adjustment_type_pb.js"),google_api_annotations_pb=require("../../../../../google/api/annotations_pb.js"),google_protobuf_wrappers_pb=require("google-protobuf/google/protobuf/wrappers_pb.js"),google_rpc_status_pb=require("../../../../../google/rpc/status_pb.js"),google_api_client_pb=require("../../../../../google/api/client_pb.js");function serialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsRequest(arg){if(!(arg instanceof google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest))throw new Error("Expected argument of type google.ads.googleads.v2.services.UploadConversionAdjustmentsRequest");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsRequest(buffer_arg){return google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest.deserializeBinary(new Uint8Array(buffer_arg))}function serialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsResponse(arg){if(!(arg instanceof google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse))throw new Error("Expected argument of type google.ads.googleads.v2.services.UploadConversionAdjustmentsResponse");return Buffer.from(arg.serializeBinary())}function deserialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsResponse(buffer_arg){return google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse.deserializeBinary(new Uint8Array(buffer_arg))}var ConversionAdjustmentUploadServiceService=exports.ConversionAdjustmentUploadServiceService={uploadConversionAdjustments:{path:"/google.ads.googleads.v2.services.ConversionAdjustmentUploadService/UploadConversionAdjustments",requestStream:!1,responseStream:!1,requestType:google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest,responseType:google_ads_googleads_v2_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse,requestSerialize:serialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsRequest,requestDeserialize:deserialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsRequest,responseSerialize:serialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsResponse,responseDeserialize:deserialize_google_ads_googleads_v2_services_UploadConversionAdjustmentsResponse}};exports.ConversionAdjustmentUploadServiceClient=grpc.makeGenericClientConstructor(ConversionAdjustmentUploadServiceService);