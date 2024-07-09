import { DeliveryCreateNestedManyWithoutManagersInput } from "./DeliveryCreateNestedManyWithoutManagersInput";

export type ManagerCreateInput = {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  department?: string | null;
  deliveries?: DeliveryCreateNestedManyWithoutManagersInput;
};
