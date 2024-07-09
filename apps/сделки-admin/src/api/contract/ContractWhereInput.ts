import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractWhereInput = {
  id?: StringFilter;
  contractNumber?: StringNullableFilter;
  description?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
};
