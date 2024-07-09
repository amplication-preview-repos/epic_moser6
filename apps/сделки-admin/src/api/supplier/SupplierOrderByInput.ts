import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
  address?: SortOrder;
  name?: SortOrder;
  contactPerson?: SortOrder;
};
