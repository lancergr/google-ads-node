// package: google.ads.googleads.v3.errors
// file: google/ads/googleads/v3/errors/user_list_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListErrorEnum): UserListErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListErrorEnum;
  static deserializeBinaryFromReader(message: UserListErrorEnum, reader: jspb.BinaryReader): UserListErrorEnum;
}

export namespace UserListErrorEnum {
  export type AsObject = {
  }

  export interface UserListErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    EXTERNAL_REMARKETING_USER_LIST_MUTATE_NOT_SUPPORTED: 2;
    CONCRETE_TYPE_REQUIRED: 3;
    CONVERSION_TYPE_ID_REQUIRED: 4;
    DUPLICATE_CONVERSION_TYPES: 5;
    INVALID_CONVERSION_TYPE: 6;
    INVALID_DESCRIPTION: 7;
    INVALID_NAME: 8;
    INVALID_TYPE: 9;
    CAN_NOT_ADD_LOGICAL_LIST_AS_LOGICAL_LIST_OPERAND: 10;
    INVALID_USER_LIST_LOGICAL_RULE_OPERAND: 11;
    NAME_ALREADY_USED: 12;
    NEW_CONVERSION_TYPE_NAME_REQUIRED: 13;
    CONVERSION_TYPE_NAME_ALREADY_USED: 14;
    OWNERSHIP_REQUIRED_FOR_SET: 15;
    USER_LIST_MUTATE_NOT_SUPPORTED: 16;
    INVALID_RULE: 17;
    INVALID_DATE_RANGE: 27;
    CAN_NOT_MUTATE_SENSITIVE_USERLIST: 28;
    MAX_NUM_RULEBASED_USERLISTS: 29;
    CANNOT_MODIFY_BILLABLE_RECORD_COUNT: 30;
    APP_ID_NOT_SET: 31;
    USERLIST_NAME_IS_RESERVED_FOR_SYSTEM_LIST: 32;
    ADVERTISER_NOT_WHITELISTED_FOR_USING_UPLOADED_DATA: 33;
    RULE_TYPE_IS_NOT_SUPPORTED: 34;
    CAN_NOT_ADD_A_SIMILAR_USERLIST_AS_LOGICAL_LIST_OPERAND: 35;
    CAN_NOT_MIX_CRM_BASED_IN_LOGICAL_LIST_WITH_OTHER_LISTS: 36;
  }

  export const UserListError: UserListErrorMap;
}

