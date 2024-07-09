import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="contractNumber" source="contractNumber" />
        <TextField label="description" source="description" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
      </SimpleShowLayout>
    </Show>
  );
};
