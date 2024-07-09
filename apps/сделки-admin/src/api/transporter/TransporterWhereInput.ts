import { StringFilter } from "../../util/StringFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransporterWhereInput = {
  id?: StringFilter;
  deliveries?: DeliveryListRelationFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
};
