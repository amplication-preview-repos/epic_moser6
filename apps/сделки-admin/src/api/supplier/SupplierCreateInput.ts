import { DeliveryCreateNestedManyWithoutSuppliersInput } from "./DeliveryCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  deliveries?: DeliveryCreateNestedManyWithoutSuppliersInput;
  phoneNumber?: string | null;
  email?: string | null;
  address?: string | null;
  name?: string | null;
  contactPerson?: string | null;
};
