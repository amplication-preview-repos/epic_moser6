import { DeliveryUpdateManyWithoutClientsInput } from "./DeliveryUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutClientsInput;
  name?: string | null;
  email?: string | null;
  contactPerson?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
};
