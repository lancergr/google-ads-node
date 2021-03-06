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
var google_ads_googleads_v3_services_currency_constant_service_pb = require('../../../../../google/ads/googleads/v3/services/currency_constant_service_pb.js');
var google_ads_googleads_v3_resources_currency_constant_pb = require('../../../../../google/ads/googleads/v3/resources/currency_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');

function serialize_google_ads_googleads_v3_resources_CurrencyConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_currency_constant_pb.CurrencyConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.CurrencyConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_CurrencyConstant(buffer_arg) {
  return google_ads_googleads_v3_resources_currency_constant_pb.CurrencyConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetCurrencyConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_currency_constant_service_pb.GetCurrencyConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetCurrencyConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetCurrencyConstantRequest(buffer_arg) {
  return google_ads_googleads_v3_services_currency_constant_service_pb.GetCurrencyConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch currency constants.
var CurrencyConstantServiceService = exports.CurrencyConstantServiceService = {
  // Returns the requested currency constant.
getCurrencyConstant: {
    path: '/google.ads.googleads.v3.services.CurrencyConstantService/GetCurrencyConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_currency_constant_service_pb.GetCurrencyConstantRequest,
    responseType: google_ads_googleads_v3_resources_currency_constant_pb.CurrencyConstant,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetCurrencyConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetCurrencyConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_CurrencyConstant,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_CurrencyConstant,
  },
};

exports.CurrencyConstantServiceClient = grpc.makeGenericClientConstructor(CurrencyConstantServiceService);
