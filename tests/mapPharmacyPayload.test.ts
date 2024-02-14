import { mapPharmacyPayload } from "../src/order/common";

describe("Pharmacy payload mapper", () => {
  it("Should be able to generate the required API payload", async () => {
    const genericRequest = {
      integrationName: "healthmart",
      order: {
        product: "Producy XYZ",
        quantity: 8,
        customerInfo: {
          name: "Random Name",
          address: "123 Random Street",
          city: "Random City",
          state: "Random State",
          zipCode: "62362623",
          country: "Random Country",
        },
      },
    };

    const result = mapPharmacyPayload(
      genericRequest.integrationName,
      genericRequest.order
    );

    expect(result.payload).toBeDefined();
    expect(result.payload).toHaveProperty("healthMartProduct");
    expect(result.payload).toHaveProperty("healthMartQuantity");
    expect(result.payload).toHaveProperty("healthMartCustomerInfo");
    expect(result.endpoint).toEqual(
      "http://pharmacy-mock-service-env.eba-xzj3bbnm.us-east-1.elasticbeanstalk.com/healthmart/orders"
    );
  });

  it("Should throw an error if pharmacy doesn't exist", async () => {
    try {
      const genericRequest = {
        integrationName: "aaaa",
        order: {
          product: "Producy XYZ",
          quantity: 8,
          customerInfo: {
            name: "Random Name",
            address: "123 Random Street",
            city: "Random City",
            state: "Random State",
            zipCode: "62362623",
            country: "Random Country",
          },
        },
      };

      const result = mapPharmacyPayload(
        genericRequest.integrationName,
        genericRequest.order
      );
    } catch (error) {
      expect(error).toEqual("pharmacy_not_found");
    }
  });
});
