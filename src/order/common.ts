import { GenericOrder, MockPharmacyPayload } from "./types";
import { profiles } from "./pharmacy/main";
import axios from "axios";

export const mapPharmacyPayload = (
  integrationName: string,
  genericOrder: any
): MockPharmacyPayload => {
  try {
    let payload: any = {};

    /**
     * Check if pharmacy (integrationName) exists, throw error if it doesn't
     */
    if (!profiles[integrationName]) throw "pharmacy_not_found";

    /**
     * Generate the request payload based on the mapped pharmacy profile
     */
    for (const property in genericOrder) {
      const point = profiles[integrationName].orderSchema[property];

      if (point.type === "object") {
        const objectField =
          profiles[integrationName].orderSchema[property].properties;

        payload[point.field] = {};

        for (const nestedProperty in objectField) {
          payload[point.field][objectField[nestedProperty].field] =
            genericOrder[property][nestedProperty];
        }
      } else payload[point.field] = genericOrder[property];
    }

    return {
      payload,
      endpoint: profiles[integrationName as string].endpoint,
    };
  } catch (error) {
    throw error;
  }
};

export const mockPharmacyAPI = async (payload: MockPharmacyPayload) => {
  try {
    const result = await axios.post(payload.endpoint, payload.payload);

    return result.data;
  } catch (error) {
    throw error;
  }
};
