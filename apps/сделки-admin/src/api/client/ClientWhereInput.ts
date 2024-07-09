import { StringFilter } from "../../util/StringFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  deliveries?: DeliveryListRelationFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
};
