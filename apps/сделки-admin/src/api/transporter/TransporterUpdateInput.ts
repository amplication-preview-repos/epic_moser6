import { DeliveryUpdateManyWithoutTransportersInput } from "./DeliveryUpdateManyWithoutTransportersInput";

export type TransporterUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutTransportersInput;
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
};
