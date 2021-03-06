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
var google_ads_googleads_v3_services_ad_group_ad_label_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_ad_label_service_pb.js');
var google_ads_googleads_v3_resources_ad_group_ad_label_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_ad_label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v3_resources_AdGroupAdLabel(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_ad_group_ad_label_pb.AdGroupAdLabel)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.AdGroupAdLabel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_AdGroupAdLabel(buffer_arg) {
  return google_ads_googleads_v3_resources_ad_group_ad_label_pb.AdGroupAdLabel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetAdGroupAdLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetAdGroupAdLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetAdGroupAdLabelRequest(buffer_arg) {
  return google_ads_googleads_v3_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateAdGroupAdLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateAdGroupAdLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Group Ad Label service.
//
// Service to manage labels on ad group ads.
var AdGroupAdLabelServiceService = exports.AdGroupAdLabelServiceService = {
  // Returns the requested ad group ad label in full detail.
getAdGroupAdLabel: {
    path: '/google.ads.googleads.v3.services.AdGroupAdLabelService/GetAdGroupAdLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_ad_group_ad_label_service_pb.GetAdGroupAdLabelRequest,
    responseType: google_ads_googleads_v3_resources_ad_group_ad_label_pb.AdGroupAdLabel,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetAdGroupAdLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetAdGroupAdLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_AdGroupAdLabel,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_AdGroupAdLabel,
  },
  // Creates and removes ad group ad labels.
// Operation statuses are returned.
mutateAdGroupAdLabels: {
    path: '/google.ads.googleads.v3.services.AdGroupAdLabelService/MutateAdGroupAdLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsRequest,
    responseType: google_ads_googleads_v3_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_MutateAdGroupAdLabelsResponse,
  },
};

exports.AdGroupAdLabelServiceClient = grpc.makeGenericClientConstructor(AdGroupAdLabelServiceService);
