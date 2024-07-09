import { DeliveryUpdateManyWithoutManagersInput } from "./DeliveryUpdateManyWithoutManagersInput";

export type ManagerUpdateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  department?: string | null;
  deliveries?: DeliveryUpdateManyWithoutManagersInput;
};
