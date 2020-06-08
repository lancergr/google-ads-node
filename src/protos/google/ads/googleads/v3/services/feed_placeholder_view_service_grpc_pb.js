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
var google_ads_googleads_v3_services_feed_placeholder_view_service_pb = require('../../../../../google/ads/googleads/v3/services/feed_placeholder_view_service_pb.js');
var google_ads_googleads_v3_resources_feed_placeholder_view_pb = require('../../../../../google/ads/googleads/v3/resources/feed_placeholder_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');

function serialize_google_ads_googleads_v3_resources_FeedPlaceholderView(arg) {
  if (!(arg instanceof google_ads_googleads_v3_resources_feed_placeholder_view_pb.FeedPlaceholderView)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.resources.FeedPlaceholderView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_resources_FeedPlaceholderView(buffer_arg) {
  return google_ads_googleads_v3_resources_feed_placeholder_view_pb.FeedPlaceholderView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_GetFeedPlaceholderViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.GetFeedPlaceholderViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_GetFeedPlaceholderViewRequest(buffer_arg) {
  return google_ads_googleads_v3_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the FeedPlaceholderView service.
//
// Service to fetch feed placeholder views.
var FeedPlaceholderViewServiceService = exports.FeedPlaceholderViewServiceService = {
  // Returns the requested feed placeholder view in full detail.
getFeedPlaceholderView: {
    path: '/google.ads.googleads.v3.services.FeedPlaceholderViewService/GetFeedPlaceholderView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_feed_placeholder_view_service_pb.GetFeedPlaceholderViewRequest,
    responseType: google_ads_googleads_v3_resources_feed_placeholder_view_pb.FeedPlaceholderView,
    requestSerialize: serialize_google_ads_googleads_v3_services_GetFeedPlaceholderViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_GetFeedPlaceholderViewRequest,
    responseSerialize: serialize_google_ads_googleads_v3_resources_FeedPlaceholderView,
    responseDeserialize: deserialize_google_ads_googleads_v3_resources_FeedPlaceholderView,
  },
};

exports.FeedPlaceholderViewServiceClient = grpc.makeGenericClientConstructor(FeedPlaceholderViewServiceService);
