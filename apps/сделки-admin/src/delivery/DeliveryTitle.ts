import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryNumber";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryNumber?.toString() || String(record.id);
};
