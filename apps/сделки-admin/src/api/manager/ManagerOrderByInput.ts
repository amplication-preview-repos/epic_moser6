import { SortOrder } from "../../util/SortOrder";

export type ManagerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  department?: SortOrder;
};
