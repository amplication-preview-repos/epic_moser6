import { DeliveryCreateNestedManyWithoutClientsInput } from "./DeliveryCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutClientsInput;
  name?: string | null;
  email?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
};
