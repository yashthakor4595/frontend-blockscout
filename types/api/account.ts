export interface AddressTag {
  address_hash: string;
  name: string;
  id: string;
}

export type AddressTags = Array<AddressTag>

export interface ApiKey {
  api_key: string;
  name: string;
}

export type ApiKeys = Array<ApiKey>

export interface ModelError {
  message: string;
}

export interface NotificationDirection {
  incoming: boolean;
  outcoming: boolean;
}

export interface NotificationSettings {
  'native': NotificationDirection;
  'ERC-20': NotificationDirection;
  'ERC-721': NotificationDirection;
}

export interface NotificationMethods {
  email: boolean;
}

export interface Transaction {
  fromAddressHash?: string;
  toAddressHash?: string;
  createdContractAddressHash?: string;
}

export interface TransactionTag {
  transaction_hash: string;
  name: string;
  id: string;
}

export type TransactionTags = Array<TransactionTag>

export type Transactions = Array<Transaction>

export interface UserInfo {
  name?: string;
  nickname?: string;
  email?: string;
}

export interface WatchlistAddress {
  address_hash: string;
  name: string;
  address_balance: number;
  coin_name: string;
  exchange_rate: number;
  notification_settings: NotificationSettings;
  notification_methods: NotificationMethods;
  id: string;
}

export interface WatchlistAddressNew {
  addressName: string;
  notificationSettings: NotificationSettings;
}

export type WatchlistAddresses = Array<WatchlistAddress>