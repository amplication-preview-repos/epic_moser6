import { Delivery } from "../delivery/Delivery";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deliveries?: Array<Delivery>;
  name: string | null;
  email: string | null;
  contactPerson: string | null;
  phoneNumber: string | null;
  address: string | null;
};
