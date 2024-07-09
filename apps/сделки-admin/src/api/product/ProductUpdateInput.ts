import { DeliveryUpdateManyWithoutProductsInput } from "./DeliveryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  deliveries?: DeliveryUpdateManyWithoutProductsInput;
};
