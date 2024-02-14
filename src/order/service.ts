import { Request } from "express";
import { mapPharmacyPayload, mockPharmacyAPI } from "./common";
import { createRecord, listRecords } from "./model";

export const createOrder = async (req: Request) => {
  try {
    const { integrationName, order } = req.body;

    /**
     * Map the request payload by providing the integration name,
     * and the generic order from the req.body
     */
    const payload = mapPharmacyPayload(integrationName, order);

    /**
     * Perform the external API request
     */
    const externalAPIResult = await mockPharmacyAPI(payload);

    /**
     * Create local order record in memory (DB)
     */
    const dataStoreResult = createRecord({
      integrationName,
      externalAPIResult,
    });

    return dataStoreResult;
  } catch (error) {
    throw error;
  }
};

export const listOrder = () => {
  return listRecords();
};
