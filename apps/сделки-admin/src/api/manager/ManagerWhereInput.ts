import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";

export type ManagerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  department?: StringNullableFilter;
  deliveries?: DeliveryListRelationFilter;
};
