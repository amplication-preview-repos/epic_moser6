import { DeliveryUpdateManyWithoutSuppliersInput } from "./DeliveryUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  deliveries?: DeliveryUpdateManyWithoutSuppliersInput;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  name?: string | null;
  contactPerson?: string | null;
};
