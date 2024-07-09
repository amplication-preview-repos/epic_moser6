export type Contract = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contractNumber: string | null;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
};
