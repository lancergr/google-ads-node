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
var google_ads_googleads_v3_services_offline_user_data_job_service_pb = require('../../../../../google/ads/googleads/v3/services/offline_user_data_job_service_pb.js');
var google_ads_googleads_v3_common_offline_user_data_pb = require('../../../../../google/ads/googleads/v3/common/offline_user_data_pb.js');
var google_ads_googleads_v3_resources_offline_user_data_job_pb = require('../../../../../google/ads/googleads/v3/resources/offline_user_data_job_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v3_resources_OfflineUserDataJob(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_offline_user_data_job_pb.OfflineUserDataJob)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.OfflineUserDataJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_OfflineUserDataJob(buffer_arg) {
  return google_ads_googleads_v3_resources_offline_user_data_job_pb.OfflineUserDataJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.AddOfflineUserDataJobOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.AddOfflineUserDataJobOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.CreateOfflineUserDataJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobRequest(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.CreateOfflineUserDataJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobResponse(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetOfflineUserDataJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.GetOfflineUserDataJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetOfflineUserDataJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetOfflineUserDataJobRequest(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.GetOfflineUserDataJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_RunOfflineUserDataJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_offline_user_data_job_service_pb.RunOfflineUserDataJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.RunOfflineUserDataJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_RunOfflineUserDataJobRequest(buffer_arg) {
  return google_ads_googleads_v3_services_offline_user_data_job_service_pb.RunOfflineUserDataJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the OfflineUserDataJobService.
//
// Service to manage offline user data jobs.
var OfflineUserDataJobServiceService = exports.OfflineUserDataJobServiceService = {
  // Creates an offline user data job.
createOfflineUserDataJob: {
    path: '/google.ads.googleads.v3.services.OfflineUserDataJobService/CreateOfflineUserDataJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobRequest,
    responseType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.CreateOfflineUserDataJobResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_CreateOfflineUserDataJobResponse,
  },
  // Returns the offline user data job.
getOfflineUserDataJob: {
    path: '/google.ads.googleads.v3.services.OfflineUserDataJobService/GetOfflineUserDataJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.GetOfflineUserDataJobRequest,
    responseType: google_ads_googleads_v3_resources_offline_user_data_job_pb.OfflineUserDataJob,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetOfflineUserDataJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetOfflineUserDataJobRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_OfflineUserDataJob,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_OfflineUserDataJob,
  },
  // Adds operations to the offline user data job.
addOfflineUserDataJobOperations: {
    path: '/google.ads.googleads.v3.services.OfflineUserDataJobService/AddOfflineUserDataJobOperations',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsRequest,
    responseType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.AddOfflineUserDataJobOperationsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_AddOfflineUserDataJobOperationsResponse,
  },
  // Runs the offline user data job.
//
// When finished, the long running operation will contain the processing
// result or failure information, if any.
runOfflineUserDataJob: {
    path: '/google.ads.googleads.v3.services.OfflineUserDataJobService/RunOfflineUserDataJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_offline_user_data_job_service_pb.RunOfflineUserDataJobRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_ads_googleads_v3_services_RunOfflineUserDataJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_RunOfflineUserDataJobRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.OfflineUserDataJobServiceClient = grpc.makeGenericClientConstructor(OfflineUserDataJobServiceService);
