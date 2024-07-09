import { StringFilter } from "../../util/StringFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  deliveries?: DeliveryListRelationFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  address?: StringNullableFilter;
  name?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
};
