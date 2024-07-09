import { Delivery } from "../delivery/Delivery";

export type Manager = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phone: string | null;
  department: string | null;
  deliveries?: Array<Delivery>;
};
