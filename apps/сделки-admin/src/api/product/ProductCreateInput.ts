import { DeliveryCreateNestedManyWithoutProductsInput } from "./DeliveryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  deliveries?: DeliveryCreateNestedManyWithoutProductsInput;
};
