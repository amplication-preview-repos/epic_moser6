import { DeliveryCreateNestedManyWithoutTransportersInput } from "./DeliveryCreateNestedManyWithoutTransportersInput";

export type TransporterCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutTransportersInput;
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
};
