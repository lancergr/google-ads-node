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
var google_ads_googleads_v3_services_google_ads_service_pb = require('../../../../../google/ads/googleads/v3/services/google_ads_service_pb.js');
var google_ads_googleads_v3_common_metrics_pb = require('../../../../../google/ads/googleads/v3/common/metrics_pb.js');
var google_ads_googleads_v3_common_segments_pb = require('../../../../../google/ads/googleads/v3/common/segments_pb.js');
var google_ads_googleads_v3_enums_summary_row_setting_pb = require('../../../../../google/ads/googleads/v3/enums/summary_row_setting_pb.js');
var google_ads_googleads_v3_resources_account_budget_pb = require('../../../../../google/ads/googleads/v3/resources/account_budget_pb.js');
var google_ads_googleads_v3_resources_account_budget_proposal_pb = require('../../../../../google/ads/googleads/v3/resources/account_budget_proposal_pb.js');
var google_ads_googleads_v3_resources_ad_group_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_pb.js');
var google_ads_googleads_v3_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_ad_pb.js');
var google_ads_googleads_v3_resources_ad_group_ad_asset_view_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_ad_asset_view_pb.js');
var google_ads_googleads_v3_resources_ad_group_ad_label_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_ad_label_pb.js');
var google_ads_googleads_v3_resources_ad_group_audience_view_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_audience_view_pb.js');
var google_ads_googleads_v3_resources_ad_group_bid_modifier_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_bid_modifier_pb.js');
var google_ads_googleads_v3_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_criterion_pb.js');
var google_ads_googleads_v3_resources_ad_group_criterion_label_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_criterion_label_pb.js');
var google_ads_googleads_v3_resources_ad_group_criterion_simulation_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_criterion_simulation_pb.js');
var google_ads_googleads_v3_resources_ad_group_extension_setting_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_extension_setting_pb.js');
var google_ads_googleads_v3_resources_ad_group_feed_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_feed_pb.js');
var google_ads_googleads_v3_resources_ad_group_label_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_label_pb.js');
var google_ads_googleads_v3_resources_ad_group_simulation_pb = require('../../../../../google/ads/googleads/v3/resources/ad_group_simulation_pb.js');
var google_ads_googleads_v3_resources_ad_parameter_pb = require('../../../../../google/ads/googleads/v3/resources/ad_parameter_pb.js');
var google_ads_googleads_v3_resources_ad_schedule_view_pb = require('../../../../../google/ads/googleads/v3/resources/ad_schedule_view_pb.js');
var google_ads_googleads_v3_resources_age_range_view_pb = require('../../../../../google/ads/googleads/v3/resources/age_range_view_pb.js');
var google_ads_googleads_v3_resources_asset_pb = require('../../../../../google/ads/googleads/v3/resources/asset_pb.js');
var google_ads_googleads_v3_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v3/resources/bidding_strategy_pb.js');
var google_ads_googleads_v3_resources_billing_setup_pb = require('../../../../../google/ads/googleads/v3/resources/billing_setup_pb.js');
var google_ads_googleads_v3_resources_campaign_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_pb.js');
var google_ads_googleads_v3_resources_campaign_audience_view_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_audience_view_pb.js');
var google_ads_googleads_v3_resources_campaign_bid_modifier_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_bid_modifier_pb.js');
var google_ads_googleads_v3_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_budget_pb.js');
var google_ads_googleads_v3_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_criterion_pb.js');
var google_ads_googleads_v3_resources_campaign_criterion_simulation_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_criterion_simulation_pb.js');
var google_ads_googleads_v3_resources_campaign_draft_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_draft_pb.js');
var google_ads_googleads_v3_resources_campaign_experiment_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_experiment_pb.js');
var google_ads_googleads_v3_resources_campaign_extension_setting_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_extension_setting_pb.js');
var google_ads_googleads_v3_resources_campaign_feed_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_feed_pb.js');
var google_ads_googleads_v3_resources_campaign_label_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_label_pb.js');
var google_ads_googleads_v3_resources_campaign_shared_set_pb = require('../../../../../google/ads/googleads/v3/resources/campaign_shared_set_pb.js');
var google_ads_googleads_v3_resources_carrier_constant_pb = require('../../../../../google/ads/googleads/v3/resources/carrier_constant_pb.js');
var google_ads_googleads_v3_resources_change_status_pb = require('../../../../../google/ads/googleads/v3/resources/change_status_pb.js');
var google_ads_googleads_v3_resources_click_view_pb = require('../../../../../google/ads/googleads/v3/resources/click_view_pb.js');
var google_ads_googleads_v3_resources_conversion_action_pb = require('../../../../../google/ads/googleads/v3/resources/conversion_action_pb.js');
var google_ads_googleads_v3_resources_currency_constant_pb = require('../../../../../google/ads/googleads/v3/resources/currency_constant_pb.js');
var google_ads_googleads_v3_resources_custom_interest_pb = require('../../../../../google/ads/googleads/v3/resources/custom_interest_pb.js');
var google_ads_googleads_v3_resources_customer_pb = require('../../../../../google/ads/googleads/v3/resources/customer_pb.js');
var google_ads_googleads_v3_resources_customer_client_pb = require('../../../../../google/ads/googleads/v3/resources/customer_client_pb.js');
var google_ads_googleads_v3_resources_customer_client_link_pb = require('../../../../../google/ads/googleads/v3/resources/customer_client_link_pb.js');
var google_ads_googleads_v3_resources_customer_extension_setting_pb = require('../../../../../google/ads/googleads/v3/resources/customer_extension_setting_pb.js');
var google_ads_googleads_v3_resources_customer_feed_pb = require('../../../../../google/ads/googleads/v3/resources/customer_feed_pb.js');
var google_ads_googleads_v3_resources_customer_label_pb = require('../../../../../google/ads/googleads/v3/resources/customer_label_pb.js');
var google_ads_googleads_v3_resources_customer_manager_link_pb = require('../../../../../google/ads/googleads/v3/resources/customer_manager_link_pb.js');
var google_ads_googleads_v3_resources_customer_negative_criterion_pb = require('../../../../../google/ads/googleads/v3/resources/customer_negative_criterion_pb.js');
var google_ads_googleads_v3_resources_detail_placement_view_pb = require('../../../../../google/ads/googleads/v3/resources/detail_placement_view_pb.js');
var google_ads_googleads_v3_resources_display_keyword_view_pb = require('../../../../../google/ads/googleads/v3/resources/display_keyword_view_pb.js');
var google_ads_googleads_v3_resources_distance_view_pb = require('../../../../../google/ads/googleads/v3/resources/distance_view_pb.js');
var google_ads_googleads_v3_resources_domain_category_pb = require('../../../../../google/ads/googleads/v3/resources/domain_category_pb.js');
var google_ads_googleads_v3_resources_dynamic_search_ads_search_term_view_pb = require('../../../../../google/ads/googleads/v3/resources/dynamic_search_ads_search_term_view_pb.js');
var google_ads_googleads_v3_resources_expanded_landing_page_view_pb = require('../../../../../google/ads/googleads/v3/resources/expanded_landing_page_view_pb.js');
var google_ads_googleads_v3_resources_extension_feed_item_pb = require('../../../../../google/ads/googleads/v3/resources/extension_feed_item_pb.js');
var google_ads_googleads_v3_resources_feed_pb = require('../../../../../google/ads/googleads/v3/resources/feed_pb.js');
var google_ads_googleads_v3_resources_feed_item_pb = require('../../../../../google/ads/googleads/v3/resources/feed_item_pb.js');
var google_ads_googleads_v3_resources_feed_item_target_pb = require('../../../../../google/ads/googleads/v3/resources/feed_item_target_pb.js');
var google_ads_googleads_v3_resources_feed_mapping_pb = require('../../../../../google/ads/googleads/v3/resources/feed_mapping_pb.js');
var google_ads_googleads_v3_resources_feed_placeholder_view_pb = require('../../../../../google/ads/googleads/v3/resources/feed_placeholder_view_pb.js');
var google_ads_googleads_v3_resources_gender_view_pb = require('../../../../../google/ads/googleads/v3/resources/gender_view_pb.js');
var google_ads_googleads_v3_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v3/resources/geo_target_constant_pb.js');
var google_ads_googleads_v3_resources_geographic_view_pb = require('../../../../../google/ads/googleads/v3/resources/geographic_view_pb.js');
var google_ads_googleads_v3_resources_group_placement_view_pb = require('../../../../../google/ads/googleads/v3/resources/group_placement_view_pb.js');
var google_ads_googleads_v3_resources_hotel_group_view_pb = require('../../../../../google/ads/googleads/v3/resources/hotel_group_view_pb.js');
var google_ads_googleads_v3_resources_hotel_performance_view_pb = require('../../../../../google/ads/googleads/v3/resources/hotel_performance_view_pb.js');
var google_ads_googleads_v3_resources_keyword_plan_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_plan_pb.js');
var google_ads_googleads_v3_resources_keyword_plan_ad_group_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_plan_ad_group_pb.js');
var google_ads_googleads_v3_resources_keyword_plan_campaign_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_plan_campaign_pb.js');
var google_ads_googleads_v3_resources_keyword_plan_keyword_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_plan_keyword_pb.js');
var google_ads_googleads_v3_resources_keyword_plan_negative_keyword_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_plan_negative_keyword_pb.js');
var google_ads_googleads_v3_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v3/resources/keyword_view_pb.js');
var google_ads_googleads_v3_resources_label_pb = require('../../../../../google/ads/googleads/v3/resources/label_pb.js');
var google_ads_googleads_v3_resources_landing_page_view_pb = require('../../../../../google/ads/googleads/v3/resources/landing_page_view_pb.js');
var google_ads_googleads_v3_resources_language_constant_pb = require('../../../../../google/ads/googleads/v3/resources/language_constant_pb.js');
var google_ads_googleads_v3_resources_location_view_pb = require('../../../../../google/ads/googleads/v3/resources/location_view_pb.js');
var google_ads_googleads_v3_resources_managed_placement_view_pb = require('../../../../../google/ads/googleads/v3/resources/managed_placement_view_pb.js');
var google_ads_googleads_v3_resources_media_file_pb = require('../../../../../google/ads/googleads/v3/resources/media_file_pb.js');
var google_ads_googleads_v3_resources_mobile_app_category_constant_pb = require('../../../../../google/ads/googleads/v3/resources/mobile_app_category_constant_pb.js');
var google_ads_googleads_v3_resources_mobile_device_constant_pb = require('../../../../../google/ads/googleads/v3/resources/mobile_device_constant_pb.js');
var google_ads_googleads_v3_resources_mutate_job_pb = require('../../../../../google/ads/googleads/v3/resources/mutate_job_pb.js');
var google_ads_googleads_v3_resources_offline_user_data_job_pb = require('../../../../../google/ads/googleads/v3/resources/offline_user_data_job_pb.js');
var google_ads_googleads_v3_resources_operating_system_version_constant_pb = require('../../../../../google/ads/googleads/v3/resources/operating_system_version_constant_pb.js');
var google_ads_googleads_v3_resources_paid_organic_search_term_view_pb = require('../../../../../google/ads/googleads/v3/resources/paid_organic_search_term_view_pb.js');
var google_ads_googleads_v3_resources_parental_status_view_pb = require('../../../../../google/ads/googleads/v3/resources/parental_status_view_pb.js');
var google_ads_googleads_v3_resources_product_bidding_category_constant_pb = require('../../../../../google/ads/googleads/v3/resources/product_bidding_category_constant_pb.js');
var google_ads_googleads_v3_resources_product_group_view_pb = require('../../../../../google/ads/googleads/v3/resources/product_group_view_pb.js');
var google_ads_googleads_v3_resources_recommendation_pb = require('../../../../../google/ads/googleads/v3/resources/recommendation_pb.js');
var google_ads_googleads_v3_resources_remarketing_action_pb = require('../../../../../google/ads/googleads/v3/resources/remarketing_action_pb.js');
var google_ads_googleads_v3_resources_search_term_view_pb = require('../../../../../google/ads/googleads/v3/resources/search_term_view_pb.js');
var google_ads_googleads_v3_resources_shared_criterion_pb = require('../../../../../google/ads/googleads/v3/resources/shared_criterion_pb.js');
var google_ads_googleads_v3_resources_shared_set_pb = require('../../../../../google/ads/googleads/v3/resources/shared_set_pb.js');
var google_ads_googleads_v3_resources_shopping_performance_view_pb = require('../../../../../google/ads/googleads/v3/resources/shopping_performance_view_pb.js');
var google_ads_googleads_v3_resources_topic_constant_pb = require('../../../../../google/ads/googleads/v3/resources/topic_constant_pb.js');
var google_ads_googleads_v3_resources_topic_view_pb = require('../../../../../google/ads/googleads/v3/resources/topic_view_pb.js');
var google_ads_googleads_v3_resources_user_interest_pb = require('../../../../../google/ads/googleads/v3/resources/user_interest_pb.js');
var google_ads_googleads_v3_resources_user_list_pb = require('../../../../../google/ads/googleads/v3/resources/user_list_pb.js');
var google_ads_googleads_v3_resources_user_location_view_pb = require('../../../../../google/ads/googleads/v3/resources/user_location_view_pb.js');
var google_ads_googleads_v3_resources_video_pb = require('../../../../../google/ads/googleads/v3/resources/video_pb.js');
var google_ads_googleads_v3_services_ad_group_ad_label_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_ad_label_service_pb.js');
var google_ads_googleads_v3_services_ad_group_ad_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_ad_service_pb.js');
var google_ads_googleads_v3_services_ad_group_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_bid_modifier_service_pb.js');
var google_ads_googleads_v3_services_ad_group_criterion_label_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_criterion_label_service_pb.js');
var google_ads_googleads_v3_services_ad_group_criterion_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_criterion_service_pb.js');
var google_ads_googleads_v3_services_ad_group_extension_setting_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_extension_setting_service_pb.js');
var google_ads_googleads_v3_services_ad_group_feed_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_feed_service_pb.js');
var google_ads_googleads_v3_services_ad_group_label_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_label_service_pb.js');
var google_ads_googleads_v3_services_ad_group_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_group_service_pb.js');
var google_ads_googleads_v3_services_ad_parameter_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_parameter_service_pb.js');
var google_ads_googleads_v3_services_ad_service_pb = require('../../../../../google/ads/googleads/v3/services/ad_service_pb.js');
var google_ads_googleads_v3_services_asset_service_pb = require('../../../../../google/ads/googleads/v3/services/asset_service_pb.js');
var google_ads_googleads_v3_services_bidding_strategy_service_pb = require('../../../../../google/ads/googleads/v3/services/bidding_strategy_service_pb.js');
var google_ads_googleads_v3_services_campaign_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_bid_modifier_service_pb.js');
var google_ads_googleads_v3_services_campaign_budget_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_budget_service_pb.js');
var google_ads_googleads_v3_services_campaign_criterion_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_criterion_service_pb.js');
var google_ads_googleads_v3_services_campaign_draft_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_draft_service_pb.js');
var google_ads_googleads_v3_services_campaign_experiment_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_experiment_service_pb.js');
var google_ads_googleads_v3_services_campaign_extension_setting_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_extension_setting_service_pb.js');
var google_ads_googleads_v3_services_campaign_feed_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_feed_service_pb.js');
var google_ads_googleads_v3_services_campaign_label_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_label_service_pb.js');
var google_ads_googleads_v3_services_campaign_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_service_pb.js');
var google_ads_googleads_v3_services_campaign_shared_set_service_pb = require('../../../../../google/ads/googleads/v3/services/campaign_shared_set_service_pb.js');
var google_ads_googleads_v3_services_conversion_action_service_pb = require('../../../../../google/ads/googleads/v3/services/conversion_action_service_pb.js');
var google_ads_googleads_v3_services_customer_extension_setting_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_extension_setting_service_pb.js');
var google_ads_googleads_v3_services_customer_feed_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_feed_service_pb.js');
var google_ads_googleads_v3_services_customer_label_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_label_service_pb.js');
var google_ads_googleads_v3_services_customer_negative_criterion_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_negative_criterion_service_pb.js');
var google_ads_googleads_v3_services_customer_service_pb = require('../../../../../google/ads/googleads/v3/services/customer_service_pb.js');
var google_ads_googleads_v3_services_extension_feed_item_service_pb = require('../../../../../google/ads/googleads/v3/services/extension_feed_item_service_pb.js');
var google_ads_googleads_v3_services_feed_item_service_pb = require('../../../../../google/ads/googleads/v3/services/feed_item_service_pb.js');
var google_ads_googleads_v3_services_feed_item_target_service_pb = require('../../../../../google/ads/googleads/v3/services/feed_item_target_service_pb.js');
var google_ads_googleads_v3_services_feed_mapping_service_pb = require('../../../../../google/ads/googleads/v3/services/feed_mapping_service_pb.js');
var google_ads_googleads_v3_services_feed_service_pb = require('../../../../../google/ads/googleads/v3/services/feed_service_pb.js');
var google_ads_googleads_v3_services_label_service_pb = require('../../../../../google/ads/googleads/v3/services/label_service_pb.js');
var google_ads_googleads_v3_services_media_file_service_pb = require('../../../../../google/ads/googleads/v3/services/media_file_service_pb.js');
var google_ads_googleads_v3_services_remarketing_action_service_pb = require('../../../../../google/ads/googleads/v3/services/remarketing_action_service_pb.js');
var google_ads_googleads_v3_services_shared_criterion_service_pb = require('../../../../../google/ads/googleads/v3/services/shared_criterion_service_pb.js');
var google_ads_googleads_v3_services_shared_set_service_pb = require('../../../../../google/ads/googleads/v3/services/shared_set_service_pb.js');
var google_ads_googleads_v3_services_user_list_service_pb = require('../../../../../google/ads/googleads/v3/services/user_list_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v3_services_MutateGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateGoogleAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_MutateGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.MutateGoogleAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_MutateGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamRequest(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v3.services.SearchGoogleAdsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamResponse(buffer_arg) {
  return google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the GoogleAdsService.
//
// Service to fetch data and metrics across resources.
var GoogleAdsServiceService = exports.GoogleAdsServiceService = {
  // Returns all rows that match the search query.
search: {
    path: '/google.ads.googleads.v3.services.GoogleAdsService/Search',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsRequest,
    responseType: google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsResponse,
  },
  // Returns all rows that match the search stream query.
searchStream: {
    path: '/google.ads.googleads.v3.services.GoogleAdsService/SearchStream',
    requestStream: false,
    responseStream: true,
    requestType: google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamRequest,
    responseType: google_ads_googleads_v3_services_google_ads_service_pb.SearchGoogleAdsStreamResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_SearchGoogleAdsStreamResponse,
  },
  // Creates, updates, or removes resources. This method supports atomic
// transactions with multiple types of resources. For example, you can
// atomically create a campaign and a campaign budget, or perform up to
// thousands of mutates atomically.
//
// This method is essentially a wrapper around a series of mutate methods. The
// only features it offers over calling those methods directly are:
//
// - Atomic transactions
// - Temp resource names (described below)
// - Somewhat reduced latency over making a series of mutate calls
//
// Note: Only resources that support atomic transactions are included, so this
// method can't replace all calls to individual services.
//
// ## Atomic Transaction Benefits
//
// Atomicity makes error handling much easier. If you're making a series of
// changes and one fails, it can leave your account in an inconsistent state.
// With atomicity, you either reach the desired state directly, or the request
// fails and you can retry.
//
// ## Temp Resource Names
//
// Temp resource names are a special type of resource name used to create a
// resource and reference that resource in the same request. For example, if a
// campaign budget is created with `resource_name` equal to
// `customers/123/campaignBudgets/-1`, that resource name can be reused in
// the `Campaign.budget` field in the same request. That way, the two
// resources are created and linked atomically.
//
// To create a temp resource name, put a negative number in the part of the
// name that the server would normally allocate.
//
// Note:
//
// - Resources must be created with a temp name before the name can be reused.
//   For example, the previous CampaignBudget+Campaign example would fail if
//   the mutate order was reversed.
// - Temp names are not remembered across requests.
// - There's no limit to the number of temp names in a request.
// - Each temp name must use a unique negative number, even if the resource
//   types differ.
//
// ## Latency
//
// It's important to group mutates by resource type or the request may time
// out and fail. Latency is roughly equal to a series of calls to individual
// mutate methods, where each change in resource type is a new call. For
// example, mutating 10 campaigns then 10 ad groups is like 2 calls, while
// mutating 1 campaign, 1 ad group, 1 campaign, 1 ad group is like 4 calls.
mutate: {
    path: '/google.ads.googleads.v3.services.GoogleAdsService/Mutate',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsRequest,
    responseType: google_ads_googleads_v3_services_google_ads_service_pb.MutateGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v3_services_MutateGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v3_services_MutateGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v3_services_MutateGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v3_services_MutateGoogleAdsResponse,
  },
};

exports.GoogleAdsServiceClient = grpc.makeGenericClientConstructor(GoogleAdsServiceService);
