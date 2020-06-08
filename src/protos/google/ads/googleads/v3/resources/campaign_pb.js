// source: google/ads/googleads/v3/resources/campaign.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v3_common_bidding_pb = require('../../../../../google/ads/googleads/v3/common/bidding_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_bidding_pb);
var google_ads_googleads_v3_common_custom_parameter_pb = require('../../../../../google/ads/googleads/v3/common/custom_parameter_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_custom_parameter_pb);
var google_ads_googleads_v3_common_frequency_cap_pb = require('../../../../../google/ads/googleads/v3/common/frequency_cap_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_frequency_cap_pb);
var google_ads_googleads_v3_common_real_time_bidding_setting_pb = require('../../../../../google/ads/googleads/v3/common/real_time_bidding_setting_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_real_time_bidding_setting_pb);
var google_ads_googleads_v3_common_targeting_setting_pb = require('../../../../../google/ads/googleads/v3/common/targeting_setting_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_common_targeting_setting_pb);
var google_ads_googleads_v3_enums_ad_serving_optimization_status_pb = require('../../../../../google/ads/googleads/v3/enums/ad_serving_optimization_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_ad_serving_optimization_status_pb);
var google_ads_googleads_v3_enums_advertising_channel_sub_type_pb = require('../../../../../google/ads/googleads/v3/enums/advertising_channel_sub_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_advertising_channel_sub_type_pb);
var google_ads_googleads_v3_enums_advertising_channel_type_pb = require('../../../../../google/ads/googleads/v3/enums/advertising_channel_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_advertising_channel_type_pb);
var google_ads_googleads_v3_enums_app_campaign_app_store_pb = require('../../../../../google/ads/googleads/v3/enums/app_campaign_app_store_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_app_campaign_app_store_pb);
var google_ads_googleads_v3_enums_app_campaign_bidding_strategy_goal_type_pb = require('../../../../../google/ads/googleads/v3/enums/app_campaign_bidding_strategy_goal_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_app_campaign_bidding_strategy_goal_type_pb);
var google_ads_googleads_v3_enums_bidding_strategy_type_pb = require('../../../../../google/ads/googleads/v3/enums/bidding_strategy_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_bidding_strategy_type_pb);
var google_ads_googleads_v3_enums_brand_safety_suitability_pb = require('../../../../../google/ads/googleads/v3/enums/brand_safety_suitability_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_brand_safety_suitability_pb);
var google_ads_googleads_v3_enums_campaign_experiment_type_pb = require('../../../../../google/ads/googleads/v3/enums/campaign_experiment_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_campaign_experiment_type_pb);
var google_ads_googleads_v3_enums_campaign_serving_status_pb = require('../../../../../google/ads/googleads/v3/enums/campaign_serving_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_campaign_serving_status_pb);
var google_ads_googleads_v3_enums_campaign_status_pb = require('../../../../../google/ads/googleads/v3/enums/campaign_status_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_campaign_status_pb);
var google_ads_googleads_v3_enums_negative_geo_target_type_pb = require('../../../../../google/ads/googleads/v3/enums/negative_geo_target_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_negative_geo_target_type_pb);
var google_ads_googleads_v3_enums_payment_mode_pb = require('../../../../../google/ads/googleads/v3/enums/payment_mode_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_payment_mode_pb);
var google_ads_googleads_v3_enums_positive_geo_target_type_pb = require('../../../../../google/ads/googleads/v3/enums/positive_geo_target_type_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_positive_geo_target_type_pb);
var google_ads_googleads_v3_enums_vanity_pharma_display_url_mode_pb = require('../../../../../google/ads/googleads/v3/enums/vanity_pharma_display_url_mode_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_vanity_pharma_display_url_mode_pb);
var google_ads_googleads_v3_enums_vanity_pharma_text_pb = require('../../../../../google/ads/googleads/v3/enums/vanity_pharma_text_pb.js');
goog.object.extend(proto, google_ads_googleads_v3_enums_vanity_pharma_text_pb);
var google_api_field_behavior_pb = require('../../../../../google/api/field_behavior_pb.js');
goog.object.extend(proto, google_api_field_behavior_pb);
var google_api_resource_pb = require('../../../../../google/api/resource_pb.js');
goog.object.extend(proto, google_api_resource_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.CampaignBiddingStrategyCase', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting', null, global);
goog.exportSymbol('proto.google.ads.googleads.v3.resources.Campaign.VanityPharma', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.resources.Campaign.repeatedFields_, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.displayName = 'proto.google.ads.googleads.v3.resources.Campaign';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.VanityPharma, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.VanityPharma';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.repeatedFields_, null);
};
goog.inherits(proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.displayName = 'proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.resources.Campaign.repeatedFields_ = [12,53,40];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_ = [[23,49,24,25,37,30,31,26,48,29,27,34,41]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v3.resources.Campaign.CampaignBiddingStrategyCase = {
  CAMPAIGN_BIDDING_STRATEGY_NOT_SET: 0,
  BIDDING_STRATEGY: 23,
  COMMISSION: 49,
  MANUAL_CPC: 24,
  MANUAL_CPM: 25,
  MANUAL_CPV: 37,
  MAXIMIZE_CONVERSIONS: 30,
  MAXIMIZE_CONVERSION_VALUE: 31,
  TARGET_CPA: 26,
  TARGET_IMPRESSION_SHARE: 48,
  TARGET_ROAS: 29,
  TARGET_SPEND: 27,
  PERCENT_CPC: 34,
  TARGET_CPM: 41
};

/**
 * @return {proto.google.ads.googleads.v3.resources.Campaign.CampaignBiddingStrategyCase}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getCampaignBiddingStrategyCase = function() {
  return /** @type {proto.google.ads.googleads.v3.resources.Campaign.CampaignBiddingStrategyCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: (f = msg.getId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    name: (f = msg.getName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    servingStatus: jspb.Message.getFieldWithDefault(msg, 21, 0),
    adServingOptimizationStatus: jspb.Message.getFieldWithDefault(msg, 8, 0),
    advertisingChannelType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    advertisingChannelSubType: jspb.Message.getFieldWithDefault(msg, 10, 0),
    trackingUrlTemplate: (f = msg.getTrackingUrlTemplate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    urlCustomParametersList: jspb.Message.toObjectList(msg.getUrlCustomParametersList(),
    google_ads_googleads_v3_common_custom_parameter_pb.CustomParameter.toObject, includeInstance),
    realTimeBiddingSetting: (f = msg.getRealTimeBiddingSetting()) && google_ads_googleads_v3_common_real_time_bidding_setting_pb.RealTimeBiddingSetting.toObject(includeInstance, f),
    networkSettings: (f = msg.getNetworkSettings()) && proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.toObject(includeInstance, f),
    hotelSetting: (f = msg.getHotelSetting()) && proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.toObject(includeInstance, f),
    dynamicSearchAdsSetting: (f = msg.getDynamicSearchAdsSetting()) && proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.toObject(includeInstance, f),
    shoppingSetting: (f = msg.getShoppingSetting()) && proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.toObject(includeInstance, f),
    targetingSetting: (f = msg.getTargetingSetting()) && google_ads_googleads_v3_common_targeting_setting_pb.TargetingSetting.toObject(includeInstance, f),
    geoTargetTypeSetting: (f = msg.getGeoTargetTypeSetting()) && proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.toObject(includeInstance, f),
    appCampaignSetting: (f = msg.getAppCampaignSetting()) && proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.toObject(includeInstance, f),
    labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance),
    experimentType: jspb.Message.getFieldWithDefault(msg, 17, 0),
    baseCampaign: (f = msg.getBaseCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    campaignBudget: (f = msg.getCampaignBudget()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    biddingStrategyType: jspb.Message.getFieldWithDefault(msg, 22, 0),
    startDate: (f = msg.getStartDate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    endDate: (f = msg.getEndDate()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    finalUrlSuffix: (f = msg.getFinalUrlSuffix()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    frequencyCapsList: jspb.Message.toObjectList(msg.getFrequencyCapsList(),
    google_ads_googleads_v3_common_frequency_cap_pb.FrequencyCapEntry.toObject, includeInstance),
    videoBrandSafetySuitability: jspb.Message.getFieldWithDefault(msg, 42, 0),
    vanityPharma: (f = msg.getVanityPharma()) && proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.toObject(includeInstance, f),
    selectiveOptimization: (f = msg.getSelectiveOptimization()) && proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.toObject(includeInstance, f),
    trackingSetting: (f = msg.getTrackingSetting()) && proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.toObject(includeInstance, f),
    paymentMode: jspb.Message.getFieldWithDefault(msg, 52, 0),
    optimizationScore: (f = msg.getOptimizationScore()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f),
    biddingStrategy: (f = msg.getBiddingStrategy()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    commission: (f = msg.getCommission()) && google_ads_googleads_v3_common_bidding_pb.Commission.toObject(includeInstance, f),
    manualCpc: (f = msg.getManualCpc()) && google_ads_googleads_v3_common_bidding_pb.ManualCpc.toObject(includeInstance, f),
    manualCpm: (f = msg.getManualCpm()) && google_ads_googleads_v3_common_bidding_pb.ManualCpm.toObject(includeInstance, f),
    manualCpv: (f = msg.getManualCpv()) && google_ads_googleads_v3_common_bidding_pb.ManualCpv.toObject(includeInstance, f),
    maximizeConversions: (f = msg.getMaximizeConversions()) && google_ads_googleads_v3_common_bidding_pb.MaximizeConversions.toObject(includeInstance, f),
    maximizeConversionValue: (f = msg.getMaximizeConversionValue()) && google_ads_googleads_v3_common_bidding_pb.MaximizeConversionValue.toObject(includeInstance, f),
    targetCpa: (f = msg.getTargetCpa()) && google_ads_googleads_v3_common_bidding_pb.TargetCpa.toObject(includeInstance, f),
    targetImpressionShare: (f = msg.getTargetImpressionShare()) && google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.toObject(includeInstance, f),
    targetRoas: (f = msg.getTargetRoas()) && google_ads_googleads_v3_common_bidding_pb.TargetRoas.toObject(includeInstance, f),
    targetSpend: (f = msg.getTargetSpend()) && google_ads_googleads_v3_common_bidding_pb.TargetSpend.toObject(includeInstance, f),
    percentCpc: (f = msg.getPercentCpc()) && google_ads_googleads_v3_common_bidding_pb.PercentCpc.toObject(includeInstance, f),
    targetCpm: (f = msg.getTargetCpm()) && google_ads_googleads_v3_common_bidding_pb.TargetCpm.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign}
 */
proto.google.ads.googleads.v3.resources.Campaign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign;
  return proto.google.ads.googleads.v3.resources.Campaign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign}
 */
proto.google.ads.googleads.v3.resources.Campaign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 21:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.CampaignServingStatusEnum.CampaignServingStatus} */ (reader.readEnum());
      msg.setServingStatus(value);
      break;
    case 8:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus} */ (reader.readEnum());
      msg.setAdServingOptimizationStatus(value);
      break;
    case 9:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType} */ (reader.readEnum());
      msg.setAdvertisingChannelType(value);
      break;
    case 10:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType} */ (reader.readEnum());
      msg.setAdvertisingChannelSubType(value);
      break;
    case 11:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTrackingUrlTemplate(value);
      break;
    case 12:
      var value = new google_ads_googleads_v3_common_custom_parameter_pb.CustomParameter;
      reader.readMessage(value,google_ads_googleads_v3_common_custom_parameter_pb.CustomParameter.deserializeBinaryFromReader);
      msg.addUrlCustomParameters(value);
      break;
    case 39:
      var value = new google_ads_googleads_v3_common_real_time_bidding_setting_pb.RealTimeBiddingSetting;
      reader.readMessage(value,google_ads_googleads_v3_common_real_time_bidding_setting_pb.RealTimeBiddingSetting.deserializeBinaryFromReader);
      msg.setRealTimeBiddingSetting(value);
      break;
    case 14:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.deserializeBinaryFromReader);
      msg.setNetworkSettings(value);
      break;
    case 32:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.deserializeBinaryFromReader);
      msg.setHotelSetting(value);
      break;
    case 33:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.deserializeBinaryFromReader);
      msg.setDynamicSearchAdsSetting(value);
      break;
    case 36:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.deserializeBinaryFromReader);
      msg.setShoppingSetting(value);
      break;
    case 43:
      var value = new google_ads_googleads_v3_common_targeting_setting_pb.TargetingSetting;
      reader.readMessage(value,google_ads_googleads_v3_common_targeting_setting_pb.TargetingSetting.deserializeBinaryFromReader);
      msg.setTargetingSetting(value);
      break;
    case 47:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.deserializeBinaryFromReader);
      msg.setGeoTargetTypeSetting(value);
      break;
    case 51:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.deserializeBinaryFromReader);
      msg.setAppCampaignSetting(value);
      break;
    case 53:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addLabels(value);
      break;
    case 17:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.CampaignExperimentTypeEnum.CampaignExperimentType} */ (reader.readEnum());
      msg.setExperimentType(value);
      break;
    case 28:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setBaseCampaign(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaignBudget(value);
      break;
    case 22:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} */ (reader.readEnum());
      msg.setBiddingStrategyType(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStartDate(value);
      break;
    case 20:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEndDate(value);
      break;
    case 38:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFinalUrlSuffix(value);
      break;
    case 40:
      var value = new google_ads_googleads_v3_common_frequency_cap_pb.FrequencyCapEntry;
      reader.readMessage(value,google_ads_googleads_v3_common_frequency_cap_pb.FrequencyCapEntry.deserializeBinaryFromReader);
      msg.addFrequencyCaps(value);
      break;
    case 42:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability} */ (reader.readEnum());
      msg.setVideoBrandSafetySuitability(value);
      break;
    case 44:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.VanityPharma;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.deserializeBinaryFromReader);
      msg.setVanityPharma(value);
      break;
    case 45:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.deserializeBinaryFromReader);
      msg.setSelectiveOptimization(value);
      break;
    case 46:
      var value = new proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting;
      reader.readMessage(value,proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.deserializeBinaryFromReader);
      msg.setTrackingSetting(value);
      break;
    case 52:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.PaymentModeEnum.PaymentMode} */ (reader.readEnum());
      msg.setPaymentMode(value);
      break;
    case 55:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setOptimizationScore(value);
      break;
    case 23:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setBiddingStrategy(value);
      break;
    case 49:
      var value = new google_ads_googleads_v3_common_bidding_pb.Commission;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.Commission.deserializeBinaryFromReader);
      msg.setCommission(value);
      break;
    case 24:
      var value = new google_ads_googleads_v3_common_bidding_pb.ManualCpc;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.ManualCpc.deserializeBinaryFromReader);
      msg.setManualCpc(value);
      break;
    case 25:
      var value = new google_ads_googleads_v3_common_bidding_pb.ManualCpm;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.ManualCpm.deserializeBinaryFromReader);
      msg.setManualCpm(value);
      break;
    case 37:
      var value = new google_ads_googleads_v3_common_bidding_pb.ManualCpv;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.ManualCpv.deserializeBinaryFromReader);
      msg.setManualCpv(value);
      break;
    case 30:
      var value = new google_ads_googleads_v3_common_bidding_pb.MaximizeConversions;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.MaximizeConversions.deserializeBinaryFromReader);
      msg.setMaximizeConversions(value);
      break;
    case 31:
      var value = new google_ads_googleads_v3_common_bidding_pb.MaximizeConversionValue;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.MaximizeConversionValue.deserializeBinaryFromReader);
      msg.setMaximizeConversionValue(value);
      break;
    case 26:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetCpa;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetCpa.deserializeBinaryFromReader);
      msg.setTargetCpa(value);
      break;
    case 48:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.deserializeBinaryFromReader);
      msg.setTargetImpressionShare(value);
      break;
    case 29:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetRoas;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetRoas.deserializeBinaryFromReader);
      msg.setTargetRoas(value);
      break;
    case 27:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetSpend;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetSpend.deserializeBinaryFromReader);
      msg.setTargetSpend(value);
      break;
    case 34:
      var value = new google_ads_googleads_v3_common_bidding_pb.PercentCpc;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.PercentCpc.deserializeBinaryFromReader);
      msg.setPercentCpc(value);
      break;
    case 41:
      var value = new google_ads_googleads_v3_common_bidding_pb.TargetCpm;
      reader.readMessage(value,google_ads_googleads_v3_common_bidding_pb.TargetCpm.deserializeBinaryFromReader);
      msg.setTargetCpm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getServingStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      21,
      f
    );
  }
  f = message.getAdServingOptimizationStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getAdvertisingChannelType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getAdvertisingChannelSubType();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getTrackingUrlTemplate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUrlCustomParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      google_ads_googleads_v3_common_custom_parameter_pb.CustomParameter.serializeBinaryToWriter
    );
  }
  f = message.getRealTimeBiddingSetting();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      google_ads_googleads_v3_common_real_time_bidding_setting_pb.RealTimeBiddingSetting.serializeBinaryToWriter
    );
  }
  f = message.getNetworkSettings();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.serializeBinaryToWriter
    );
  }
  f = message.getHotelSetting();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.serializeBinaryToWriter
    );
  }
  f = message.getDynamicSearchAdsSetting();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.serializeBinaryToWriter
    );
  }
  f = message.getShoppingSetting();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.serializeBinaryToWriter
    );
  }
  f = message.getTargetingSetting();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      google_ads_googleads_v3_common_targeting_setting_pb.TargetingSetting.serializeBinaryToWriter
    );
  }
  f = message.getGeoTargetTypeSetting();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.serializeBinaryToWriter
    );
  }
  f = message.getAppCampaignSetting();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      53,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getExperimentType();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getBaseCampaign();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCampaignBudget();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getBiddingStrategyType();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getStartDate();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEndDate();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFinalUrlSuffix();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getFrequencyCapsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      40,
      f,
      google_ads_googleads_v3_common_frequency_cap_pb.FrequencyCapEntry.serializeBinaryToWriter
    );
  }
  f = message.getVideoBrandSafetySuitability();
  if (f !== 0.0) {
    writer.writeEnum(
      42,
      f
    );
  }
  f = message.getVanityPharma();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.serializeBinaryToWriter
    );
  }
  f = message.getSelectiveOptimization();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.serializeBinaryToWriter
    );
  }
  f = message.getTrackingSetting();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.serializeBinaryToWriter
    );
  }
  f = message.getPaymentMode();
  if (f !== 0.0) {
    writer.writeEnum(
      52,
      f
    );
  }
  f = message.getOptimizationScore();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
  f = message.getBiddingStrategy();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCommission();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      google_ads_googleads_v3_common_bidding_pb.Commission.serializeBinaryToWriter
    );
  }
  f = message.getManualCpc();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      google_ads_googleads_v3_common_bidding_pb.ManualCpc.serializeBinaryToWriter
    );
  }
  f = message.getManualCpm();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      google_ads_googleads_v3_common_bidding_pb.ManualCpm.serializeBinaryToWriter
    );
  }
  f = message.getManualCpv();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      google_ads_googleads_v3_common_bidding_pb.ManualCpv.serializeBinaryToWriter
    );
  }
  f = message.getMaximizeConversions();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      google_ads_googleads_v3_common_bidding_pb.MaximizeConversions.serializeBinaryToWriter
    );
  }
  f = message.getMaximizeConversionValue();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      google_ads_googleads_v3_common_bidding_pb.MaximizeConversionValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetCpa();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetCpa.serializeBinaryToWriter
    );
  }
  f = message.getTargetImpressionShare();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare.serializeBinaryToWriter
    );
  }
  f = message.getTargetRoas();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetRoas.serializeBinaryToWriter
    );
  }
  f = message.getTargetSpend();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetSpend.serializeBinaryToWriter
    );
  }
  f = message.getPercentCpc();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      google_ads_googleads_v3_common_bidding_pb.PercentCpc.serializeBinaryToWriter
    );
  }
  f = message.getTargetCpm();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      google_ads_googleads_v3_common_bidding_pb.TargetCpm.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetGoogleSearch: (f = msg.getTargetGoogleSearch()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    targetSearchNetwork: (f = msg.getTargetSearchNetwork()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    targetContentNetwork: (f = msg.getTargetContentNetwork()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    targetPartnerSearchNetwork: (f = msg.getTargetPartnerSearchNetwork()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings;
  return proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTargetGoogleSearch(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTargetSearchNetwork(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTargetContentNetwork(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setTargetPartnerSearchNetwork(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetGoogleSearch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetSearchNetwork();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetContentNetwork();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetPartnerSearchNetwork();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.BoolValue target_google_search = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.getTargetGoogleSearch = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.setTargetGoogleSearch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.clearTargetGoogleSearch = function() {
  return this.setTargetGoogleSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.hasTargetGoogleSearch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.BoolValue target_search_network = 2;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.getTargetSearchNetwork = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 2));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.setTargetSearchNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.clearTargetSearchNetwork = function() {
  return this.setTargetSearchNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.hasTargetSearchNetwork = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue target_content_network = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.getTargetContentNetwork = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.setTargetContentNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.clearTargetContentNetwork = function() {
  return this.setTargetContentNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.hasTargetContentNetwork = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue target_partner_search_network = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.getTargetPartnerSearchNetwork = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.setTargetPartnerSearchNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.clearTargetPartnerSearchNetwork = function() {
  return this.setTargetPartnerSearchNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings.prototype.hasTargetPartnerSearchNetwork = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    hotelCenterId: (f = msg.getHotelCenterId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo;
  return proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setHotelCenterId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHotelCenterId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value hotel_center_id = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.getHotelCenterId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.setHotelCenterId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.clearHotelCenterId = function() {
  return this.setHotelCenterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo.prototype.hasHotelCenterId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    biddingStrategyGoalType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appId: (f = msg.getAppId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    appStore: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting;
  return proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType} */ (reader.readEnum());
      msg.setBiddingStrategyGoalType(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAppId(value);
      break;
    case 3:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore} */ (reader.readEnum());
      msg.setAppStore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBiddingStrategyGoalType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAppStore();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional google.ads.googleads.v3.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType bidding_strategy_goal_type = 1;
 * @return {!proto.google.ads.googleads.v3.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.getBiddingStrategyGoalType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.AppCampaignBiddingStrategyGoalTypeEnum.AppCampaignBiddingStrategyGoalType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.setBiddingStrategyGoalType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue app_id = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.getAppId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.setAppId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.clearAppId = function() {
  return this.setAppId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.hasAppId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore app_store = 3;
 * @return {!proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore}
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.getAppStore = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.AppCampaignAppStoreEnum.AppCampaignAppStore} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting.prototype.setAppStore = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    domainName: (f = msg.getDomainName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    languageCode: (f = msg.getLanguageCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    useSuppliedUrlsOnly: (f = msg.getUseSuppliedUrlsOnly()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    feedsList: jspb.Message.toObjectList(msg.getFeedsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting;
  return proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDomainName(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setUseSuppliedUrlsOnly(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addFeeds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomainName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getUseSuppliedUrlsOnly();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getFeedsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue domain_name = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.getDomainName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.setDomainName = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.clearDomainName = function() {
  return this.setDomainName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.hasDomainName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue language_code = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.getLanguageCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.setLanguageCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.clearLanguageCode = function() {
  return this.setLanguageCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.hasLanguageCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.BoolValue use_supplied_urls_only = 3;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.getUseSuppliedUrlsOnly = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 3));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.setUseSuppliedUrlsOnly = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.clearUseSuppliedUrlsOnly = function() {
  return this.setUseSuppliedUrlsOnly(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.hasUseSuppliedUrlsOnly = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated google.protobuf.StringValue feeds = 5;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.getFeedsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.setFeedsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.addFeeds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting.prototype.clearFeedsList = function() {
  return this.setFeedsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    merchantId: (f = msg.getMerchantId()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    salesCountry: (f = msg.getSalesCountry()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    campaignPriority: (f = msg.getCampaignPriority()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    enableLocal: (f = msg.getEnableLocal()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting;
  return proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setMerchantId(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSalesCountry(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setCampaignPriority(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setEnableLocal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMerchantId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getSalesCountry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCampaignPriority();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getEnableLocal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Int64Value merchant_id = 1;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.getMerchantId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 1));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.setMerchantId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.clearMerchantId = function() {
  return this.setMerchantId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.hasMerchantId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue sales_country = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.getSalesCountry = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.setSalesCountry = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.clearSalesCountry = function() {
  return this.setSalesCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.hasSalesCountry = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Int32Value campaign_priority = 3;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.getCampaignPriority = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.setCampaignPriority = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.clearCampaignPriority = function() {
  return this.setCampaignPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.hasCampaignPriority = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue enable_local = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.getEnableLocal = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.setEnableLocal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.clearEnableLocal = function() {
  return this.setEnableLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting.prototype.hasEnableLocal = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.toObject = function(includeInstance, msg) {
  var f, obj = {
    vanityPharmaDisplayUrlMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vanityPharmaText: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.VanityPharma;
  return proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode} */ (reader.readEnum());
      msg.setVanityPharmaDisplayUrlMode(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.VanityPharmaTextEnum.VanityPharmaText} */ (reader.readEnum());
      msg.setVanityPharmaText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVanityPharmaDisplayUrlMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVanityPharmaText();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional google.ads.googleads.v3.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode vanity_pharma_display_url_mode = 1;
 * @return {!proto.google.ads.googleads.v3.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.getVanityPharmaDisplayUrlMode = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.VanityPharmaDisplayUrlModeEnum.VanityPharmaDisplayUrlMode} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.setVanityPharmaDisplayUrlMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.ads.googleads.v3.enums.VanityPharmaTextEnum.VanityPharmaText vanity_pharma_text = 2;
 * @return {!proto.google.ads.googleads.v3.enums.VanityPharmaTextEnum.VanityPharmaText}
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.getVanityPharmaText = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.VanityPharmaTextEnum.VanityPharmaText} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.VanityPharmaTextEnum.VanityPharmaText} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.VanityPharma.prototype.setVanityPharmaText = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    trackingUrl: (f = msg.getTrackingUrl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting;
  return proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTrackingUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrackingUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue tracking_url = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.getTrackingUrl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.setTrackingUrl = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.clearTrackingUrl = function() {
  return this.setTrackingUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting.prototype.hasTrackingUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    positiveGeoTargetType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    negativeGeoTargetType: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting;
  return proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType} */ (reader.readEnum());
      msg.setPositiveGeoTargetType(value);
      break;
    case 2:
      var value = /** @type {!proto.google.ads.googleads.v3.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType} */ (reader.readEnum());
      msg.setNegativeGeoTargetType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositiveGeoTargetType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNegativeGeoTargetType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional google.ads.googleads.v3.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType positive_geo_target_type = 1;
 * @return {!proto.google.ads.googleads.v3.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.getPositiveGeoTargetType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.PositiveGeoTargetTypeEnum.PositiveGeoTargetType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.setPositiveGeoTargetType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.ads.googleads.v3.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType negative_geo_target_type = 2;
 * @return {!proto.google.ads.googleads.v3.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType}
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.getNegativeGeoTargetType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.NegativeGeoTargetTypeEnum.NegativeGeoTargetType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting.prototype.setNegativeGeoTargetType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversionActionsList: jspb.Message.toObjectList(msg.getConversionActionsList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization;
  return proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addConversionActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversionActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.StringValue conversion_actions = 1;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.getConversionActionsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.setConversionActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.addConversionActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization.prototype.clearConversionActionsList = function() {
  return this.setConversionActionsList([]);
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Int64Value id = 3;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getId = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 3));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue name = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus status = 5;
 * @return {!proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.CampaignStatusEnum.CampaignStatus} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional google.ads.googleads.v3.enums.CampaignServingStatusEnum.CampaignServingStatus serving_status = 21;
 * @return {!proto.google.ads.googleads.v3.enums.CampaignServingStatusEnum.CampaignServingStatus}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getServingStatus = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.CampaignServingStatusEnum.CampaignServingStatus} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.CampaignServingStatusEnum.CampaignServingStatus} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setServingStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 21, value);
};


/**
 * optional google.ads.googleads.v3.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus ad_serving_optimization_status = 8;
 * @return {!proto.google.ads.googleads.v3.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getAdServingOptimizationStatus = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.AdServingOptimizationStatusEnum.AdServingOptimizationStatus} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setAdServingOptimizationStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.ads.googleads.v3.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType advertising_channel_type = 9;
 * @return {!proto.google.ads.googleads.v3.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getAdvertisingChannelType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.AdvertisingChannelTypeEnum.AdvertisingChannelType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setAdvertisingChannelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.ads.googleads.v3.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType advertising_channel_sub_type = 10;
 * @return {!proto.google.ads.googleads.v3.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getAdvertisingChannelSubType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setAdvertisingChannelSubType = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional google.protobuf.StringValue tracking_url_template = 11;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTrackingUrlTemplate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 11));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTrackingUrlTemplate = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTrackingUrlTemplate = function() {
  return this.setTrackingUrlTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTrackingUrlTemplate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated google.ads.googleads.v3.common.CustomParameter url_custom_parameters = 12;
 * @return {!Array<!proto.google.ads.googleads.v3.common.CustomParameter>}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getUrlCustomParametersList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v3.common.CustomParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v3_common_custom_parameter_pb.CustomParameter, 12));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v3.common.CustomParameter>} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setUrlCustomParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.ads.googleads.v3.common.CustomParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v3.common.CustomParameter}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.addUrlCustomParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.ads.googleads.v3.common.CustomParameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearUrlCustomParametersList = function() {
  return this.setUrlCustomParametersList([]);
};


/**
 * optional google.ads.googleads.v3.common.RealTimeBiddingSetting real_time_bidding_setting = 39;
 * @return {?proto.google.ads.googleads.v3.common.RealTimeBiddingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getRealTimeBiddingSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.RealTimeBiddingSetting} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_real_time_bidding_setting_pb.RealTimeBiddingSetting, 39));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.RealTimeBiddingSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setRealTimeBiddingSetting = function(value) {
  return jspb.Message.setWrapperField(this, 39, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearRealTimeBiddingSetting = function() {
  return this.setRealTimeBiddingSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasRealTimeBiddingSetting = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional NetworkSettings network_settings = 14;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getNetworkSettings = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings, 14));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.NetworkSettings|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setNetworkSettings = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearNetworkSettings = function() {
  return this.setNetworkSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasNetworkSettings = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional HotelSettingInfo hotel_setting = 32;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getHotelSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo, 32));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.HotelSettingInfo|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setHotelSetting = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearHotelSetting = function() {
  return this.setHotelSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasHotelSetting = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional DynamicSearchAdsSetting dynamic_search_ads_setting = 33;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getDynamicSearchAdsSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting, 33));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.DynamicSearchAdsSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setDynamicSearchAdsSetting = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearDynamicSearchAdsSetting = function() {
  return this.setDynamicSearchAdsSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasDynamicSearchAdsSetting = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional ShoppingSetting shopping_setting = 36;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getShoppingSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting, 36));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.ShoppingSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setShoppingSetting = function(value) {
  return jspb.Message.setWrapperField(this, 36, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearShoppingSetting = function() {
  return this.setShoppingSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasShoppingSetting = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetingSetting targeting_setting = 43;
 * @return {?proto.google.ads.googleads.v3.common.TargetingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetingSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetingSetting} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_targeting_setting_pb.TargetingSetting, 43));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetingSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetingSetting = function(value) {
  return jspb.Message.setWrapperField(this, 43, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetingSetting = function() {
  return this.setTargetingSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetingSetting = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional GeoTargetTypeSetting geo_target_type_setting = 47;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getGeoTargetTypeSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting, 47));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.GeoTargetTypeSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setGeoTargetTypeSetting = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearGeoTargetTypeSetting = function() {
  return this.setGeoTargetTypeSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasGeoTargetTypeSetting = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional AppCampaignSetting app_campaign_setting = 51;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getAppCampaignSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting, 51));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.AppCampaignSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setAppCampaignSetting = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearAppCampaignSetting = function() {
  return this.setAppCampaignSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasAppCampaignSetting = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * repeated google.protobuf.StringValue labels = 53;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getLabelsList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 53));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setLabelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 53, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.addLabels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 53, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional google.ads.googleads.v3.enums.CampaignExperimentTypeEnum.CampaignExperimentType experiment_type = 17;
 * @return {!proto.google.ads.googleads.v3.enums.CampaignExperimentTypeEnum.CampaignExperimentType}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getExperimentType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.CampaignExperimentTypeEnum.CampaignExperimentType} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.CampaignExperimentTypeEnum.CampaignExperimentType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setExperimentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional google.protobuf.StringValue base_campaign = 28;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getBaseCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 28));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setBaseCampaign = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearBaseCampaign = function() {
  return this.setBaseCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasBaseCampaign = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional google.protobuf.StringValue campaign_budget = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getCampaignBudget = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setCampaignBudget = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearCampaignBudget = function() {
  return this.setCampaignBudget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasCampaignBudget = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType bidding_strategy_type = 22;
 * @return {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getBiddingStrategyType = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.BiddingStrategyTypeEnum.BiddingStrategyType} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setBiddingStrategyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * optional google.protobuf.StringValue start_date = 19;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getStartDate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 19));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setStartDate = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearStartDate = function() {
  return this.setStartDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasStartDate = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional google.protobuf.StringValue end_date = 20;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getEndDate = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 20));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setEndDate = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearEndDate = function() {
  return this.setEndDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasEndDate = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional google.protobuf.StringValue final_url_suffix = 38;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getFinalUrlSuffix = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 38));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setFinalUrlSuffix = function(value) {
  return jspb.Message.setWrapperField(this, 38, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearFinalUrlSuffix = function() {
  return this.setFinalUrlSuffix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasFinalUrlSuffix = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * repeated google.ads.googleads.v3.common.FrequencyCapEntry frequency_caps = 40;
 * @return {!Array<!proto.google.ads.googleads.v3.common.FrequencyCapEntry>}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getFrequencyCapsList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v3.common.FrequencyCapEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v3_common_frequency_cap_pb.FrequencyCapEntry, 40));
};


/**
 * @param {!Array<!proto.google.ads.googleads.v3.common.FrequencyCapEntry>} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setFrequencyCapsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 40, value);
};


/**
 * @param {!proto.google.ads.googleads.v3.common.FrequencyCapEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v3.common.FrequencyCapEntry}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.addFrequencyCaps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 40, opt_value, proto.google.ads.googleads.v3.common.FrequencyCapEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearFrequencyCapsList = function() {
  return this.setFrequencyCapsList([]);
};


/**
 * optional google.ads.googleads.v3.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability video_brand_safety_suitability = 42;
 * @return {!proto.google.ads.googleads.v3.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getVideoBrandSafetySuitability = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.BrandSafetySuitabilityEnum.BrandSafetySuitability} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setVideoBrandSafetySuitability = function(value) {
  return jspb.Message.setProto3EnumField(this, 42, value);
};


/**
 * optional VanityPharma vanity_pharma = 44;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.VanityPharma}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getVanityPharma = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.VanityPharma} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.VanityPharma, 44));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.VanityPharma|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setVanityPharma = function(value) {
  return jspb.Message.setWrapperField(this, 44, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearVanityPharma = function() {
  return this.setVanityPharma(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasVanityPharma = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional SelectiveOptimization selective_optimization = 45;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getSelectiveOptimization = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization, 45));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.SelectiveOptimization|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setSelectiveOptimization = function(value) {
  return jspb.Message.setWrapperField(this, 45, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearSelectiveOptimization = function() {
  return this.setSelectiveOptimization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasSelectiveOptimization = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional TrackingSetting tracking_setting = 46;
 * @return {?proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTrackingSetting = function() {
  return /** @type{?proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting} */ (
    jspb.Message.getWrapperField(this, proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting, 46));
};


/**
 * @param {?proto.google.ads.googleads.v3.resources.Campaign.TrackingSetting|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTrackingSetting = function(value) {
  return jspb.Message.setWrapperField(this, 46, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTrackingSetting = function() {
  return this.setTrackingSetting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTrackingSetting = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional google.ads.googleads.v3.enums.PaymentModeEnum.PaymentMode payment_mode = 52;
 * @return {!proto.google.ads.googleads.v3.enums.PaymentModeEnum.PaymentMode}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getPaymentMode = function() {
  return /** @type {!proto.google.ads.googleads.v3.enums.PaymentModeEnum.PaymentMode} */ (jspb.Message.getFieldWithDefault(this, 52, 0));
};


/**
 * @param {!proto.google.ads.googleads.v3.enums.PaymentModeEnum.PaymentMode} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.setPaymentMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 52, value);
};


/**
 * optional google.protobuf.DoubleValue optimization_score = 55;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getOptimizationScore = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 55));
};


/**
 * @param {?proto.google.protobuf.DoubleValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setOptimizationScore = function(value) {
  return jspb.Message.setWrapperField(this, 55, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearOptimizationScore = function() {
  return this.setOptimizationScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasOptimizationScore = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional google.protobuf.StringValue bidding_strategy = 23;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getBiddingStrategy = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 23));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setBiddingStrategy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearBiddingStrategy = function() {
  return this.setBiddingStrategy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasBiddingStrategy = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional google.ads.googleads.v3.common.Commission commission = 49;
 * @return {?proto.google.ads.googleads.v3.common.Commission}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getCommission = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.Commission} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.Commission, 49));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.Commission|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setCommission = function(value) {
  return jspb.Message.setOneofWrapperField(this, 49, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearCommission = function() {
  return this.setCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasCommission = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional google.ads.googleads.v3.common.ManualCpc manual_cpc = 24;
 * @return {?proto.google.ads.googleads.v3.common.ManualCpc}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getManualCpc = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.ManualCpc} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.ManualCpc, 24));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.ManualCpc|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setManualCpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearManualCpc = function() {
  return this.setManualCpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasManualCpc = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional google.ads.googleads.v3.common.ManualCpm manual_cpm = 25;
 * @return {?proto.google.ads.googleads.v3.common.ManualCpm}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getManualCpm = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.ManualCpm} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.ManualCpm, 25));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.ManualCpm|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setManualCpm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearManualCpm = function() {
  return this.setManualCpm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasManualCpm = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional google.ads.googleads.v3.common.ManualCpv manual_cpv = 37;
 * @return {?proto.google.ads.googleads.v3.common.ManualCpv}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getManualCpv = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.ManualCpv} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.ManualCpv, 37));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.ManualCpv|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setManualCpv = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearManualCpv = function() {
  return this.setManualCpv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasManualCpv = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional google.ads.googleads.v3.common.MaximizeConversions maximize_conversions = 30;
 * @return {?proto.google.ads.googleads.v3.common.MaximizeConversions}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getMaximizeConversions = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.MaximizeConversions} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.MaximizeConversions, 30));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.MaximizeConversions|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setMaximizeConversions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearMaximizeConversions = function() {
  return this.setMaximizeConversions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasMaximizeConversions = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional google.ads.googleads.v3.common.MaximizeConversionValue maximize_conversion_value = 31;
 * @return {?proto.google.ads.googleads.v3.common.MaximizeConversionValue}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getMaximizeConversionValue = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.MaximizeConversionValue} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.MaximizeConversionValue, 31));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.MaximizeConversionValue|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setMaximizeConversionValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearMaximizeConversionValue = function() {
  return this.setMaximizeConversionValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasMaximizeConversionValue = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetCpa target_cpa = 26;
 * @return {?proto.google.ads.googleads.v3.common.TargetCpa}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetCpa = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetCpa} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetCpa, 26));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetCpa|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetCpa = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetCpa = function() {
  return this.setTargetCpa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetCpa = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetImpressionShare target_impression_share = 48;
 * @return {?proto.google.ads.googleads.v3.common.TargetImpressionShare}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetImpressionShare = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetImpressionShare} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetImpressionShare, 48));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetImpressionShare|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetImpressionShare = function(value) {
  return jspb.Message.setOneofWrapperField(this, 48, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetImpressionShare = function() {
  return this.setTargetImpressionShare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetImpressionShare = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetRoas target_roas = 29;
 * @return {?proto.google.ads.googleads.v3.common.TargetRoas}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetRoas = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetRoas} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetRoas, 29));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetRoas|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetRoas = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetRoas = function() {
  return this.setTargetRoas(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetRoas = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetSpend target_spend = 27;
 * @return {?proto.google.ads.googleads.v3.common.TargetSpend}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetSpend = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetSpend} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetSpend, 27));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetSpend|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetSpend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetSpend = function() {
  return this.setTargetSpend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetSpend = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional google.ads.googleads.v3.common.PercentCpc percent_cpc = 34;
 * @return {?proto.google.ads.googleads.v3.common.PercentCpc}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getPercentCpc = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.PercentCpc} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.PercentCpc, 34));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.PercentCpc|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setPercentCpc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearPercentCpc = function() {
  return this.setPercentCpc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasPercentCpc = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional google.ads.googleads.v3.common.TargetCpm target_cpm = 41;
 * @return {?proto.google.ads.googleads.v3.common.TargetCpm}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.getTargetCpm = function() {
  return /** @type{?proto.google.ads.googleads.v3.common.TargetCpm} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v3_common_bidding_pb.TargetCpm, 41));
};


/**
 * @param {?proto.google.ads.googleads.v3.common.TargetCpm|undefined} value
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
*/
proto.google.ads.googleads.v3.resources.Campaign.prototype.setTargetCpm = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.google.ads.googleads.v3.resources.Campaign.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.ads.googleads.v3.resources.Campaign} returns this
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.clearTargetCpm = function() {
  return this.setTargetCpm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.ads.googleads.v3.resources.Campaign.prototype.hasTargetCpm = function() {
  return jspb.Message.getField(this, 41) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v3.resources);
