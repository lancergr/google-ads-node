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
var google_ads_googleads_v3_services_payments_account_service_pb = require('../../../../../google/ads/googleads/v3/services/payments_account_service_pb.js');
var google_ads_googleads_v3_resources_payments_account_pb = require('../../../../../google/ads/googleads/v3/resources/payments_account_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');

function serialize_google_ads_googleads_v3_services_ListPaymentsAccountsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.ListPaymentsAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_ListPaymentsAccountsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_ListPaymentsAccountsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.ListPaymentsAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_ListPaymentsAccountsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the payments account service.
//
// Service to provide payments accounts that can be used to set up consolidated
// billing.
var PaymentsAccountServiceService = exports.PaymentsAccountServiceService = {
  // Returns all payments accounts associated with all managers
// between the login customer ID and specified serving customer in the
// hierarchy, inclusive.
listPaymentsAccounts: {
    path: '/google.ads.googleads.v3.services.PaymentsAccountService/ListPaymentsAccounts',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsRequest,
    responseType: google_ads_googleads_v3_services_payments_account_service_pb.ListPaymentsAccountsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_ListPaymentsAccountsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_ListPaymentsAccountsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_ListPaymentsAccountsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_ListPaymentsAccountsResponse,
  },
};

exports.PaymentsAccountServiceClient = grpc.makeGenericClientConstructor(PaymentsAccountServiceService);
