import { Transporter as TTransporter } from "../api/transporter/Transporter";

export const TRANSPORTER_TITLE_FIELD = "name";

export const TransporterTitle = (record: TTransporter): string => {
  return record.name?.toString() || String(record.id);
};
