import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contractNumber?: SortOrder;
  description?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
};
