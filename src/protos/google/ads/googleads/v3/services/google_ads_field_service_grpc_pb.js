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
var google_ads_googleads_v3_services_google_ads_field_service_pb = require('../../../../../google/ads/googleads/v3/services/google_ads_field_service_pb.js');
var google_ads_googleads_v3_resources_google_ads_field_pb = require('../../../../../google/ads/googleads/v3/resources/google_ads_field_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');

function serialize_google_ads_googleads_v3_resources_GoogleAdsField(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_google_ads_field_pb.GoogleAdsField)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.GoogleAdsField');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_GoogleAdsField(buffer_arg) {
  return google_ads_googleads_v3_resources_google_ads_field_pb.GoogleAdsField.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetGoogleAdsFieldRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetGoogleAdsFieldRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetGoogleAdsFieldRequest(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsFieldsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsFieldsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the GoogleAdsFieldService
//
// Service to fetch Google Ads API fields.
var GoogleAdsFieldServiceService = exports.GoogleAdsFieldServiceService = {
  // Returns just the requested field.
getGoogleAdsField: {
    path: '/google.ads.googleads.v3.services.GoogleAdsFieldService/GetGoogleAdsField',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_google_ads_field_service_pb.GetGoogleAdsFieldRequest,
    responseType: google_ads_googleads_v3_resources_google_ads_field_pb.GoogleAdsField,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetGoogleAdsFieldRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetGoogleAdsFieldRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_GoogleAdsField,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_GoogleAdsField,
  },
  // Returns all fields that match the search query.
searchGoogleAdsFields: {
    path: '/google.ads.googleads.v3.services.GoogleAdsFieldService/SearchGoogleAdsFields',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsRequest,
    responseType: google_ads_googleads_v3_services_google_ads_field_service_pb.SearchGoogleAdsFieldsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsFieldsResponse,
  },
};

exports.GoogleAdsFieldServiceClient = grpc.makeGenericClientConstructor(GoogleAdsFieldServiceService);
