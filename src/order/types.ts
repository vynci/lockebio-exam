export type GenericOrder = {
  product: string;
  quantity: number;
  customerInfo: CustomerInfo;
};

export type CustomerInfo = {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type MockPharmacyPayload = {
  payload: any;
  endpoint: string;
};

export type CreateRecordInput = {
  integrationName: string;
  externalAPIResult: Object;
};

export type OrderRecord = {
  id: string;
  integrationName: string;
  externalAPIResult: Object;
};
