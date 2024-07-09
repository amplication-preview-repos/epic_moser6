import { Delivery } from "../delivery/Delivery";

export type Supplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deliveries?: Array<Delivery>;
  phoneNumber: string | null;
  email: string | null;
  address: string | null;
  name: string | null;
  contactPerson: string | null;
};
