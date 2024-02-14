import { LocalDB } from "../lib";
import { CreateRecordInput, OrderRecord } from "./types";
import { v4 as uuidv4 } from "uuid";

export const createRecord = ({
  integrationName,
  externalAPIResult,
}: CreateRecordInput) => {
  /**
   * Generate record object
   */
  const record: OrderRecord = {
    id: uuidv4(),
    integrationName,
    externalAPIResult,
  };

  /**
   * Save to mock db
   */
  LocalDB.push(record);

  return record;
};

export const listRecords = () => {
  return LocalDB;
};
