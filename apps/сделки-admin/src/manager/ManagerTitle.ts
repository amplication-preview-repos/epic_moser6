import { Manager as TManager } from "../api/manager/Manager";

export const MANAGER_TITLE_FIELD = "name";

export const ManagerTitle = (record: TManager): string => {
  return record.name?.toString() || String(record.id);
};
