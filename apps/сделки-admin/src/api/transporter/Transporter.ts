import { Delivery } from "../delivery/Delivery";

export type Transporter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deliveries?: Array<Delivery>;
  name: string | null;
  phoneNumber: string | null;
  email: string | null;
};
