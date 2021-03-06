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
var google_ads_googleads_v3_services_customer_manager_link_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_manager_link_service_pb.js');
var google_ads_googleads_v3_resources_customer_manager_link_pb = require('../../../../../google/ads/googleads/v3/resources/customer_manager_link_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_ads_googleads_v3_resources_CustomerManagerLink(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_customer_manager_link_pb.CustomerManagerLink)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.CustomerManagerLink');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_CustomerManagerLink(buffer_arg) {
  return google_ads_googleads_v3_resources_customer_manager_link_pb.CustomerManagerLink.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetCustomerManagerLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetCustomerManagerLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetCustomerManagerLinkRequest(buffer_arg) {
  return google_ads_googleads_v3_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MoveManagerLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MoveManagerLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MoveManagerLinkRequest(buffer_arg) {
  return google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MoveManagerLinkResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MoveManagerLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MoveManagerLinkResponse(buffer_arg) {
  return google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateCustomerManagerLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkRequest(buffer_arg) {
  return google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateCustomerManagerLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkResponse(buffer_arg) {
  return google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage customer-manager links.
var CustomerManagerLinkServiceService = exports.CustomerManagerLinkServiceService = {
  // Returns the requested CustomerManagerLink in full detail.
getCustomerManagerLink: {
    path: '/google.ads.googleads.v3.services.CustomerManagerLinkService/GetCustomerManagerLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_customer_manager_link_service_pb.GetCustomerManagerLinkRequest,
    responseType: google_ads_googleads_v3_resources_customer_manager_link_pb.CustomerManagerLink,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetCustomerManagerLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetCustomerManagerLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_CustomerManagerLink,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_CustomerManagerLink,
  },
  // Creates or updates customer manager links. Operation statuses are returned.
mutateCustomerManagerLink: {
    path: '/google.ads.googleads.v3.services.CustomerManagerLinkService/MutateCustomerManagerLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkRequest,
    responseType: google_ads_googleads_v3_services_customer_manager_link_service_pb.MutateCustomerManagerLinkResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_MutateCustomerManagerLinkResponse,
  },
  // Moves a client customer to a new manager customer.
// This simplifies the complex request that requires two operations to move
// a client customer to a new manager. i.e:
// 1. Update operation with Status INACTIVE (previous manager) and,
// 2. Update operation with Status ACTIVE (new manager).
moveManagerLink: {
    path: '/google.ads.googleads.v3.services.CustomerManagerLinkService/MoveManagerLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkRequest,
    responseType: google_ads_googleads_v3_services_customer_manager_link_service_pb.MoveManagerLinkResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_MoveManagerLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_MoveManagerLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_MoveManagerLinkResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_MoveManagerLinkResponse,
  },
};

exports.CustomerManagerLinkServiceClient = grpc.makeGenericClientConstructor(CustomerManagerLinkServiceService);
