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
var google_ads_googleads_v3_services_user_data_service_pb = require('../../../../../google/ads/googleads/v3/services/user_data_service_pb.js');
var google_ads_googleads_v3_common_offline_user_data_pb = require('../../../../../google/ads/googleads/v3/common/offline_user_data_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v3_services_UploadUserDataRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.UploadUserDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_UploadUserDataRequest(buffer_arg) {
  return google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_UploadUserDataResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.UploadUserDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_UploadUserDataResponse(buffer_arg) {
  return google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the UserDataService.
//
// Service to manage user data uploads.
// Accessible to whitelisted customers only.
var UserDataServiceService = exports.UserDataServiceService = {
  // Uploads the given user data.
uploadUserData: {
    path: '/google.ads.googleads.v3.services.UserDataService/UploadUserData',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataRequest,
    responseType: google_ads_googleads_v3_services_user_data_service_pb.UploadUserDataResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_UploadUserDataRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_UploadUserDataRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_UploadUserDataResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_UploadUserDataResponse,
  },
};

exports.UserDataServiceClient = grpc.makeGenericClientConstructor(UserDataServiceService);
