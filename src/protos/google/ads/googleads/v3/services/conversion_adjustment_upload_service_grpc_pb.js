// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb = require('../../../../../google/ads/googleads/v3/services/conversion_adjustment_upload_service_pb.js');
var google_ads_googleads_v3_enums_conversion_adjustment_type_pb = require('../../../../../google/ads/googleads/v3/enums/conversion_adjustment_type_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.UploadConversionAdjustmentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.UploadConversionAdjustmentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to upload conversion adjustments.
var ConversionAdjustmentUploadServiceService = exports.ConversionAdjustmentUploadServiceService = {
  // Processes the given conversion adjustments.
uploadConversionAdjustments: {
    path: '/google.ads.googleads.v3.services.ConversionAdjustmentUploadService/UploadConversionAdjustments',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsRequest,
    responseType: google_ads_googleads_v3_services_conversion_adjustment_upload_service_pb.UploadConversionAdjustmentsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_UploadConversionAdjustmentsResponse,
  },
};

exports.ConversionAdjustmentUploadServiceClient = grpc.makeGenericClientConstructor(ConversionAdjustmentUploadServiceService);
