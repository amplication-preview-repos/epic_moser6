import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  contactPerson?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
};
